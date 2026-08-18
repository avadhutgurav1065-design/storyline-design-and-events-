const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'frontend', 'src', 'components');
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('Form.jsx'));

files.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace standard input groups
  content = content.replace(/<label htmlFor=\"([^\"]+)\">([^<]+)<\/label>\s*<input([\s\S]*?)\/>/gm, '<input$3/>\n            <label htmlFor=\"$1\">$2</label>');
  
  // Replace textarea groups
  content = content.replace(/<label htmlFor=\"([^\"]+)\">([^<]+)<\/label>\s*<textarea([\s\S]*?)><\/textarea>/gm, '<textarea$3></textarea>\n            <label htmlFor=\"$1\">$2</label>');
  
  // Replace select groups
  content = content.replace(/<label htmlFor=\"([^\"]+)\">([^<]+)<\/label>\s*<select([\s\S]*?)>([\s\S]*?)<\/select>/gm, '<select$3>$4</select>\n            <label htmlFor=\"$1\">$2</label>');

  fs.writeFileSync(filePath, content);
  console.log('Updated', file);
});
