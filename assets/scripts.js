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
    console.log(e.target.href);
    e.preventDefault();
  })
}