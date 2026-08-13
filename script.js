
document.querySelectorAll('[data-wa]').forEach(el=>{
  const msg=encodeURIComponent('שלום, הגעתי דרך אתר נץ מערכות מידע. נשמח לדבר על תהליך או פתרון שצריך לקדם.');
  el.href='https://wa.me/972508673333?text='+msg;
});
