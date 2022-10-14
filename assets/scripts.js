// let bqs = document.querySelectorAll('blockquote');
//   bqs.forEach(b => {
//   b.className = b.
//     querySelector('strong').
//       innerText.
//         toLowerCase().
//           replace(':','');
// });

const audiolink = document.querySelector('.audio');
if (audiolink) {
  const audio = document.querySelector('.audio audio');
  const playbackrate = document.querySelector('.audio input');
  const display = document.querySelector('.audio span');
  const button = document.querySelector('.audio button');
  button.addEventListener('click', e => {
    audio.currentTime = audio.currentTime - 10;
  });
  const displayvalue = val => {
    return parseInt(val * 100, 10) + '%'
  }
  if (window.localStorage.pbspeed) {
    audio.playbackRate = window.localStorage.pbspeed;
    playbackrate.value = window.localStorage.pbspeed;
  }
  display.innerText = displayvalue(audio.playbackRate);
  playbackrate.addEventListener('change', e => {
    audio.playbackRate = playbackrate.value;
    display.innerText = displayvalue(playbackrate.value);
    window.localStorage.pbspeed = playbackrate.value;
  });
}