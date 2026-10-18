const $=s=>document.querySelector(s);
$('#start').addEventListener('click',()=>$('#beginning').scrollIntoView({behavior:'smooth'}));
$('#hug').addEventListener('click',()=>{const p=$('#hugMessage');p.textContent='Hug delivered, baby. Imagine me holding you close for as long as you need. ♡';$('#hug').textContent='Hug sent ♡';});
$('#restart').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seen');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.chapter,.ending').forEach(el=>revealObserver.observe(el));
