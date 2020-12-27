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
    let a = document.createElement('audio');
    a.src = e.target.href;
    a.width = "100%";
    e.target.parentNode.addChild(a);
    e.target.remove();
    e.preventDefault();
  })
}