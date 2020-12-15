let bqs = document.querySelectorAll('blockquote');
bqs.forEach(b => {
  b.className = b.
    querySelector('strong').
      innerText.
        toLowerCase().
          replace(':','');
});