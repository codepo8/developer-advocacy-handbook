let bqs = document.querySelectorAll('blockquote');
console.log(bqs);
bqs.forEach(b => {
  b.className = b.
    querySelector('strong').
      innerText.
        toLowerCase().
          replace(':','');
});