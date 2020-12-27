// let bqs = document.querySelectorAll('blockquote');
//   bqs.forEach(b => {
//   b.className = b.
//     querySelector('strong').
//       innerText.
//         toLowerCase().
//           replace(':','');
// });

const audiolink = document.querySelector('.audio a');
if (audiolink) {
  audiolink.addEventListener('click', e => {
    e.preventDefault();
    let a = document.createElement('audio');
    a.src = audiolink.href;
    a.width = "100%";
    audiolink.parentNode.replaceChild(audiolink, a);
  })
}