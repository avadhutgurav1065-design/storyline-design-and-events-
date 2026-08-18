const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'frontend', 'src', 'components');
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('Form.jsx'));

files.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Revert standard input groups
  content = content.replace(/<input([\s\S]*?)\/>\s*<label htmlFor=\"([^\"]+)\">([^<]+)<\/label>/gm, '<label htmlFor=\"$2\">$3</label>\n            <input$1/>');
  
  // Revert textarea groups
  content = content.replace(/<textarea([\s\S]*?)><\/textarea>\s*<label htmlFor=\"([^\"]+)\">([^<]+)<\/label>/gm, '<label htmlFor=\"$2\">$3</label>\n            <textarea$1></textarea>');
  
  // Revert select groups
  content = content.replace(/<select([\s\S]*?)>([\s\S]*?)<\/select>\s*<label htmlFor=\"([^\"]+)\">([^<]+)<\/label>/gm, '<label htmlFor=\"$3\">$4</label>\n            <select$1>$2</select>');

  fs.writeFileSync(filePath, content);
  console.log('Reverted', file);
});
