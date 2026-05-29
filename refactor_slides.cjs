const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Remove Slide 4 and Slide 5 imports
content = content.replace(/import Slide4Interactive from '\.\/components\/Slide4Interactive'\n/g, '');
content = content.replace(/import Slide5Conclusion from '\.\/components\/Slide5Conclusion'\n/g, '');

// 2. Change slidesCount to 3
content = content.replace(/const slidesCount = 5/, 'const slidesCount = 3');

// 3. Remove Slide 4 and Slide 5 from the overview Grid
const slide4OverviewRegex = /\s*\{\/\* Slide 4 Card \*\/\}\s*<div[\s\S]*?Slide 4 — Tech Playground[\s\S]*?<\/div>\s*<\/div>/g;
content = content.replace(slide4OverviewRegex, '');

const slide5OverviewRegex = /\s*\{\/\* Slide 5 Card \*\/\}\s*<div[\s\S]*?Slide 5 — Movement[\s\S]*?<\/div>\s*<\/div>/g;
content = content.replace(slide5OverviewRegex, '');

// Wait, the regexes above might be tricky. Let's just do a simpler replacement for the overview items.
content = content.replace(/\{\/\* Slide 4 Card \*\/\}[\s\S]*?\{\/\* Slide 5 Card \*\/\}/g, '{/* Slide 5 Card */}');
content = content.replace(/\{\/\* Slide 5 Card \*\/\}[\s\S]*?<\/div>\n          <\/div>/g, '</div>\n          </div>');

// Also update Slide 3 Overview Text
content = content.replace(/Slide 3 — Welcome/g, 'Slide 3 — Importance');
content = content.replace(/Opening & Core Movement Pillars/g, 'Why This Project Matters');
content = content.replace(/Appreciation, welcoming volunteers, and the launch of the digitalization movement./g, 'Language is more than communication; it carries our identity and heritage.');

// 4. Remove Slide 4 and 5 from the active slide container
content = content.replace(/\{\/\* SLIDE 4: INTERACTIVE DEMO LAB \*\/\}[\s\S]*?\{\/\* SLIDE 5: CALL TO ACTION & CONCLUSION \*\/\}[\s\S]*?<\/div>/, '</div>');

// 5. Update Sidebar Menu items
content = content.replace(/\{ label: 'Slide 3: Welcome Remarks', desc: 'Greeting, Gratitude & Core Pillars' \},[\s\S]*?\]\.map/g, `{ label: 'Slide 3: Why It Matters', desc: 'Identity, Culture & Digital Survival' }
              ].map`);

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx refactored for 3 slides');

