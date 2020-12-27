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
    a.controls = true;
    audiolink.parentNode.appendChild(a);
    audiolink.remove();
  })
}