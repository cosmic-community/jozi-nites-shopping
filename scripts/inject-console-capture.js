const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'dashboard-console-capture.js'), 'utf8');

function injectScript(htmlPath) {
  if (!fs.existsSync(htmlPath)) return;
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  if (html.includes('dashboard-console-capture.js')) return;
  
  const scriptTag = `<script>${scriptContent}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${scriptTag}</head>`);
  } else if (html.includes('<body>')) {
    html = html.replace('<body>', `<body>${scriptTag}`);
  } else {
    return;
  }
  
  fs.writeFileSync(htmlPath, html);
  console.log(`Injected console capture script into ${htmlPath}`);
}

const outDir = path.join(__dirname, '..', '.next', 'server', 'app');
if (fs.existsSync(outDir)) {
  const files = fs.readdirSync(outDir, { recursive: true });
  files.forEach(file => {
    if (file.endsWith('.html')) {
      injectScript(path.join(outDir, file));
    }
  });
}