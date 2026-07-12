const fs = require('fs');
const file = 'c:\\\\Users\\\\arnav\\\\Desktop\\\\Projects\\\\buildroom\\\\src\\\\data\\\\modules.tsx';
let content = fs.readFileSync(file, 'utf8');
const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[\u{2B50}]/gu;
const hasEmojis = emojiRegex.test(content);
console.log('Has emojis:', hasEmojis);
if(hasEmojis) {
  content = content.replace(emojiRegex, '');
  fs.writeFileSync(file, content);
  console.log('Removed emojis');
}
