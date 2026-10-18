const $=s=>document.querySelector(s);
$('#start').addEventListener('click',()=>$('#beginning').scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('.reminder').forEach(card=>card.addEventListener('click',()=>{const open=card.classList.toggle('open');card.setAttribute('aria-expanded',String(open));}));
document.querySelectorAll('.hug-choice').forEach(button=>button.addEventListener('click',()=>{$('#hugMessage').textContent=button.dataset.message;document.querySelectorAll('.hug-choice').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');}));
$('#restart').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seen');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.chapter,.ending').forEach(el=>revealObserver.observe(el));
