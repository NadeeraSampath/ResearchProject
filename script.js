// Simple animation for button
document.querySelector('.btn').addEventListener('mouseover', () => {
  document.querySelector('.btn').style.boxShadow = '0 0 15px #ffc800';
});

document.querySelector('.btn').addEventListener('mouseout', () => {
  document.querySelector('.btn').style.boxShadow = 'none';
});
