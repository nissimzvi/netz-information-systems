document.querySelectorAll('[data-wa]').forEach(el=>{
  const isEnglish=document.documentElement.lang==='en';
  const text=isEnglish
    ? 'Hello, I reached you through the Netz Information Systems website. I would like to discuss a process or technology solution.'
    : 'שלום, הגעתי דרך אתר נץ מערכות מידע. אשמח לדבר על תהליך או פתרון שצריך לקדם.';
  el.href='https://wa.me/972508673333?text='+encodeURIComponent(text);
});

const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.menu');
if(hamburger&&menu){
  hamburger.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    hamburger.classList.toggle('open',open);
    hamburger.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }));
}

const details={
 he:{
  process:{title:'שיפור תהליכים',icon:'⚙️',summary:'מיפוי, אפיון ואוטומציה של עבודה ידנית ותהליכים חוצי ארגון.',copy:['ממפים את התהליך הקיים ומזהים עבודה ידנית, כפילויות, צווארי בקבוק ונקודות שבהן מידע עובר לא נכון או לא בזמן.','מגדירים תהליך פשוט ויעיל יותר, בוחנים מה נכון לשנות בתהליך ומה נכון לפתור באמצעות מערכת, אינטגרציה או אוטומציה.'],points:['פחות עבודה ידנית ומשימות חוזרות.','פחות טעויות ותלות באנשים.','תהליך ברור, מדיד וקל יותר לניהול.']},
  priority:{title:'מערכות ו־Priority',icon:'🧩',summary:'אפיון, יישום, התאמות, אינטגרציות והטמעה בהתאם לתהליכים העסקיים.',copy:['מלווים תהליכים ב־Priority מהאפיון ועד היישום: הגדרת צרכים, התאמות, אינטגרציות והטמעה מול המשתמשים.','המטרה היא לחבר בין המערכת לעבודה בפועל, לשפר זרימות בין מחלקות ולהקטין עבודה כפולה ופתרונות עוקפים.'],points:['היכרות טובה עם מודולים ותהליכים ב־Priority.','חיבור למערכות נוספות ואינטגרציות.','שיפור תהליך והטמעה אצל המשתמשים.']},
  logistics:{title:'PUDO ולוגיסטיקה',icon:'📦',summary:'מערכות חבילות, נקודות מסירה, מחסנים, איסוף, מסירה והפצה.',copy:['מאפיינים ומשפרים תהליכים לוגיסטיים מקצה לקצה: קליטה, מחסן, איסוף, מסירה, הפצה, נקודות חלוקה ומערכות חבילות PUDO.','העבודה כוללת חיבור בין מערכות תפעוליות, לקוחות וספקים, שיפור בקרה והפחתת טיפול ידני.','ניסיון עמוק ומומחיות מהבולטים בארץ בתחום PUDO וניהול נקודות מסירה, כולל הקמת מערכת מאפס, אפיון, ליווי, הטמעה ושיפור מתמשך של התהליך.'],points:['PUDO וניהול נקודות מסירה.','הקמת מערכת PUDO מאפס, ליווי והטמעה.','מערכות מחסן, הפצה ותהליכי שטח.','אינטגרציות, בקרה ושיפור תפעולי.']},
  cio:{title:'CIO במיקור חוץ',icon:'🧭',summary:'ניהול מערכות מידע בכיר וגמיש, בלי צורך להחזיק פונקציה מלאה.',copy:['מקבלים ראייה ניהולית כוללת של מערכות המידע: תוכנית עבודה, סדרי עדיפויות, תקציב, פרויקטים, ספקים, תשתיות ואבטחת מידע.','השירות מתאים לארגון שצריך ניסיון ניהולי וטכנולוגי בכיר בהיקף גמיש ובהתאם לצורך.'],points:['תוכנית עבודה ותקציב מערכות מידע.','ניהול פרויקטים וספקים.','בחינת חלופות והוזלת עלויות.']},
  'ai-bi':{title:'AI ו־BI',icon:'🤖',summary:'אוטומציה, מידע ניהולי וכלים חכמים במקום שבו הם מייצרים ערך אמיתי.',copy:['מזהים פעולות חוזרות ותהליכים שבהם AI ואוטומציה יכולים לחסוך זמן, לצמצם טעויות ולשפר שירות.','במקביל בונים מידע ניהולי, דוחות ומדדים שמאפשרים להנהלה לראות את המצב ולקבל החלטות על בסיס נתונים.'],points:['אוטומציה של משימות ותהליכים.','BI, דוחות ומדדים ניהוליים.','חיבור נתונים ממערכות שונות.']},
  cloud:{title:'ענן ושרתים',icon:'☁️',summary:'התאמת ענן, שרתים, וירטואליזציה ואירוח אפליקציות לצורכי הארגון.',copy:['בוחנים את סביבת המחשוב הקיימת ומתאימים פתרון ענן ציבורי או פרטי, שרתים, וירטואליזציה ואירוח אפליקציות.','המיקוד הוא בזמינות, ביצועים, אבטחה ועלות נכונה — כחלק ממעטפת ה־IT הכוללת.'],points:['Azure / AWS ופתרונות ענן.','וירטואליזציה ואירוח שרתים.','ניטור, זמינות והתאמת עלויות.']},
  'backup-dr':{title:'גיבויים ו־DR',icon:'💾',summary:'גיבוי שרתים וקבצים ותכנון התאוששות מאסון והמשכיות עסקית.',copy:['בודקים שהמידע הקריטי אכן מגובה ושניתן להחזיר אותו בזמן סביר במקרה תקלה או אירוע.','מתכננים מערך גיבוי ו־DR בהתאם למערכות הקריטיות, רמת הסיכון והזמן שהארגון יכול להרשות לעצמו להיות מושבת.'],points:['בדיקת מערך גיבויים קיים.','תכנון DR והמשכיות עסקית.','בדיקות שחזור ולא רק עצם ביצוע הגיבוי.']},
  security:{title:'אבטחת מידע',icon:'🛡️',summary:'אבטחת מידע כחלק מניהול IT שוטף ולא כפעולה נפרדת.',copy:['בוחנים הרשאות, תשתיות, גיבויים, ספקים, גישה מרחוק והקשחות בהתאם לצורכי הארגון ולרמת הסיכון.','המטרה היא לשלב אבטחה בלי לפגוע בעבודה, ולוודא שיש בקרה, אחריות ותהליך ברור לטיפול בסיכונים.'],points:['הרשאות וגישה למערכות.','הקשחות, גיבויים וספקים.','איזון בין אבטחה לרציפות עבודה.']},
  'it-maintenance':{title:'תחזוקת רשת ו־IT',icon:'🖥️',summary:'ניהול ותיאום תמיכה, תחזוקה, ניטור וטיפול בתקלות.',copy:['מנהלים את שירותי ה־IT השוטפים מול ספקים קיימים או חדשים, מגדירים רמת שירות ומוודאים שתקלות מטופלות בזמן ובאחריות.','בודקים עלויות, חלופות, תשתיות ונקודות כשל כדי לשפר את רמת השירות ולשמור על רציפות תפעולית.'],points:['ניהול ספקי IT ושירות.','ניטור ותחזוקה שוטפת.','שיפור SLA ועלויות.']}
 },
 en:{
  process:{title:'Process Improvement',icon:'⚙️',summary:'Mapping, analysis and automation of manual and cross-organizational processes.',copy:['We map the current process and identify manual work, duplication, bottlenecks and places where information does not flow correctly or on time.','We define a simpler future process and decide what should change operationally and what should be solved with systems, integrations or automation.'],points:['Less manual and repetitive work.','Fewer errors and dependencies.','A clearer, measurable process.']},
  priority:{title:'Systems & Priority',icon:'🧩',summary:'Analysis, implementation, customization, integrations and rollout aligned with business processes.',copy:['We support Priority processes from requirements through implementation, including customization, integrations and user rollout.','The goal is to connect the system to the real work, improve flows between departments and reduce duplicate or workaround processes.'],points:['Strong familiarity with Priority processes and modules.','Integrations with additional systems.','Process improvement and user adoption.']},
  logistics:{title:'PUDO & Logistics',icon:'📦',summary:'Parcel systems, pickup points, warehouses, collection, delivery and distribution.',copy:['We design and improve logistics processes end-to-end: receiving, warehouse, pickup, delivery, distribution, pickup points and PUDO parcel systems.','The work includes connecting operational systems, customers and vendors, improving control and reducing manual handling.','Deep hands-on expertise in PUDO and pickup-point management, including building a PUDO operation from the ground up, requirements definition, implementation, rollout and continuous improvement.'],points:['PUDO and pickup-point management.','Building a PUDO solution from the ground up, rollout and implementation.','Warehouse, distribution and field operations.','Integrations, controls and operational improvement.']},
  cio:{title:'Outsourced CIO',icon:'🧭',summary:'Senior, flexible information-systems management without maintaining a full-time CIO role.',copy:['You get a management-level view of information systems: roadmap, priorities, budgets, projects, vendors, infrastructure and security.','The service fits organizations that need senior management and technology experience with a flexible scope.'],points:['IT roadmap and budget.','Project and vendor management.','Alternative assessment and cost reduction.']},
  'ai-bi':{title:'AI & BI',icon:'🤖',summary:'Automation, management information and intelligent tools where they create real value.',copy:['We identify repetitive tasks and processes where AI and automation can save time, reduce errors and improve service.','We also build management information, reports and KPIs that help management understand the business and make data-based decisions.'],points:['Process and task automation.','BI, reports and management KPIs.','Connecting data across systems.']},
  cloud:{title:'Cloud & Servers',icon:'☁️',summary:'Cloud, servers, virtualization and application hosting aligned with organizational needs.',copy:['We review the current environment and align public/private cloud, servers, virtualization and application hosting with business needs.','The focus is availability, performance, security and the right cost as part of the overall IT environment.'],points:['Azure / AWS and cloud solutions.','Virtualization and server hosting.','Monitoring, availability and cost alignment.']},
  'backup-dr':{title:'Backup & DR',icon:'💾',summary:'Server and file backup, disaster recovery and business continuity planning.',copy:['We verify that critical information is really backed up and can be restored within a reasonable timeframe after an incident.','Backup and DR are planned according to critical systems, risk level and the downtime the business can tolerate.'],points:['Review of the existing backup environment.','DR and business-continuity planning.','Restore testing, not only backup completion.']},
  security:{title:'Information Security',icon:'🛡️',summary:'Information security as part of ongoing IT management, not a separate activity.',copy:['We review permissions, infrastructure, backups, vendors, remote access and hardening according to organizational needs and risk.','The goal is to integrate security without stopping the business, with clear control, responsibility and risk handling.'],points:['Access and permissions.','Hardening, backups and vendors.','Balance between security and operational continuity.']},
  'it-maintenance':{title:'Network & IT Maintenance',icon:'🖥️',summary:'Management and coordination of support, maintenance, monitoring and troubleshooting.',copy:['We manage ongoing IT services with existing or new vendors, define service expectations and make sure issues are handled with clear responsibility.','We review costs, alternatives, infrastructure and failure points to improve service and maintain operational continuity.'],points:['IT vendor and service management.','Monitoring and ongoing maintenance.','Improved SLA and costs.']}
 }
};

(function(){
 const title=document.getElementById('detail-title'); if(!title) return;
 const lang=document.documentElement.lang==='en'?'en':'he';
 const key=new URLSearchParams(location.search).get('service')||'process';
 const d=details[lang][key]||details[lang].process;
 document.title=d.title+' | '+(lang==='en'?'Netz Information Systems':'נץ מערכות מידע');
 title.textContent=d.title;
 const summary=document.getElementById('detail-summary'); if(summary) summary.textContent=d.summary;
 const heading=document.getElementById('detail-heading'); if(heading) heading.textContent=d.title;
 const icon=document.getElementById('detail-icon'); if(icon) icon.textContent=d.icon;
 const copy=document.getElementById('detail-copy'); if(copy) copy.innerHTML=d.copy.map(p=>'<p>'+p+'</p>').join('');
 const points=document.getElementById('detail-points'); if(points) points.innerHTML=d.points.map(p=>'<div class="detail-point">'+p+'</div>').join('');
 const en=document.getElementById('detail-lang-en'); if(en) en.href='service-detail-en.html?service='+encodeURIComponent(key);
 const he=document.getElementById('detail-lang-he'); if(he) he.href='service-detail.html?service='+encodeURIComponent(key);
 const back=document.querySelector('[data-back]'); if(back) back.addEventListener('click',()=>location.href=(lang==='en'?'services-en.html':'services.html'));
})();
