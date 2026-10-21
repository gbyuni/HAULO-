// content/ 폴더의 파일들을 합쳐서 크리에이터 화면이 읽는 guide.json 을 만들어요.
// Netlify가 배포할 때마다 자동으로 실행해요. (직접 확인하려면: node build.js)
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'content');
const read = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));

const home = read('home.json');
const steps = read('steps.json').steps || [];
const updates = read('updates.json').updates || [];
const cats = (read('categories.json').categories || []).map((c) => ({ ...c, articles: [] }));
const byId = Object.fromEntries(cats.map((c) => [c.id, c]));

const artDir = path.join(dir, 'articles');
const files = fs.existsSync(artDir) ? fs.readdirSync(artDir).filter((f) => f.endsWith('.json')) : [];
const orphans = [];
for (const f of files) {
  const a = JSON.parse(fs.readFileSync(path.join(artDir, f), 'utf8'));
  const item = { id: path.basename(f, '.json'), title: a.title || '', body: a.body || '', updated: a.updated || '', order: Number(a.order) || 0 };
  if (byId[a.category]) byId[a.category].articles.push(item);
  else orphans.push(`${f} (카테고리 "${a.category}" 없음)`);
}
for (const c of cats) {
  c.articles.sort((x, y) => x.order - y.order || x.title.localeCompare(y.title, 'ko'));
  c.articles.forEach((a) => delete a.order);
}

const guide = { ...home, steps, updates, categories: cats };
fs.writeFileSync(path.join(__dirname, 'guide.json'), JSON.stringify(guide));
console.log(`guide.json: 카테고리 ${cats.length}개, 아티클 ${files.length - orphans.length}개`);
if (orphans.length) console.warn('카테고리가 없어 보이지 않는 아티클:\n  ' + orphans.join('\n  '));
