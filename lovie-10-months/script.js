const $=s=>document.querySelector(s);$('#start').addEventListener('click',()=>$('#beginning').scrollIntoView({behavior:'smooth'}));const modal=$('#modal');document.querySelectorAll('.note').forEach(btn=>btn.addEventListener('click',()=>{$('#modal-title').textContent=btn.dataset.title;$('#modal-text').textContent=btn.dataset.text;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('lock')}));function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('lock')}$('#close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});$('#another').addEventListener('click',()=>{closeModal();document.querySelector('.letter-section').scrollIntoView({behavior:'smooth'})});$('#hug').addEventListener('click',()=>{$('#hugmsg').textContent='Hug delivered! 🫂 Imagine me holding you close for as long as you need. ♡';$('#hug').textContent='Hug sent ♡'});$('#restart').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})});

// Open the video in full screen when the custom play button is tapped.
const lovieVideo = document.getElementById("lovie-video");
const videoPlay = document.getElementById("video-play");
if (lovieVideo && videoPlay) {
  const player = lovieVideo.closest(".video-player");

  async function openVideoFullscreen() {
    videoPlay.disabled = true;
    videoPlay.textContent = "…";
    try {
      // Native iPhone video fullscreen gives the viewer familiar playback controls.
      lovieVideo.controls = true;
      if (typeof lovieVideo.webkitEnterFullscreen === "function") {
        lovieVideo.webkitEnterFullscreen();
      } else if (player.requestFullscreen) {
        await player.requestFullscreen();
      } else if (lovieVideo.requestFullscreen) {
        await lovieVideo.requestFullscreen();
      }
      await lovieVideo.play();
      player.classList.add("is-playing");
      videoPlay.hidden = true;
    } catch (error) {
      // If fullscreen is blocked, still start playback in the page.
      lovieVideo.controls = true;
      await lovieVideo.play().catch(() => {});
      videoPlay.hidden = true;
    } finally {
      videoPlay.disabled = false;
      videoPlay.textContent = "▶";
    }
  }

  videoPlay.addEventListener("click", openVideoFullscreen);
  lovieVideo.addEventListener("webkitendfullscreen", () => {
    lovieVideo.controls = false;
    player.classList.remove("is-playing");
    videoPlay.hidden = false;
  });
  document.addEventListener("fullscreenchange", () => {
    const isFullscreen = document.fullscreenElement === player;
    if (!isFullscreen) {
      lovieVideo.controls = false;
      player.classList.remove("is-playing");
      videoPlay.hidden = false;
    }
  });
  lovieVideo.addEventListener("ended", () => {
    lovieVideo.controls = false;
    player.classList.remove("is-playing");
    videoPlay.hidden = false;
    videoPlay.textContent = "↻";
  });
}
