const btn3k = document.querySelector('#btn-4000');
btn3k.addEventListener('click', () => {
  throw new Error('Fail 4000');
});