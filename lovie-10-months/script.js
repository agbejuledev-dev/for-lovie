const $=s=>document.querySelector(s);$('#start').addEventListener('click',()=>$('#beginning').scrollIntoView({behavior:'smooth'}));const modal=$('#modal');document.querySelectorAll('.note').forEach(btn=>btn.addEventListener('click',()=>{$('#modal-title').textContent=btn.dataset.title;$('#modal-text').textContent=btn.dataset.text;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('lock')}));function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('lock')}$('#close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});$('#another').addEventListener('click',()=>{closeModal();document.querySelector('.letter-section').scrollIntoView({behavior:'smooth'})});$('#hug').addEventListener('click',()=>{$('#hugmsg').textContent='Hug delivered! 🫂 Imagine me holding you close for as long as you need. ♡';$('#hug').textContent='Hug sent ♡'});$('#restart').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})});



// One tap opens the video player in fullscreen and requests autoplay.
const driveVideo = document.getElementById("lovie-drive-video");
const driveVideoLaunch = document.getElementById("lovie-video-launch");
if (driveVideo && driveVideoLaunch) {
  const driveVideoWrap = driveVideo.closest(".drive-video-wrap");
  driveVideoLaunch.addEventListener("click", async () => {
    const fullscreen = driveVideoWrap.requestFullscreen || driveVideoWrap.webkitRequestFullscreen;
    if (fullscreen) {
      try { await fullscreen.call(driveVideoWrap); } catch (error) {}
    }
    driveVideoWrap.classList.add("launched");
    driveVideo.src = "https://drive.google.com/file/d/1xwlj_nHlWw0VCkOy4uvtoyhgHKfREqdq/preview?autoplay=1";
  });
}
