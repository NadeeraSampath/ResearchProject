// Simple animation for button
document.querySelector('.btn').addEventListener('mouseover', () => {
  document.querySelector('.btn').style.boxShadow = '0 0 15px #ffc800';
});

document.querySelector('.btn').addEventListener('mouseout', () => {
  document.querySelector('.btn').style.boxShadow = 'none';
});










// Add hover effect or animation trigger if needed
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px #ffc800';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});