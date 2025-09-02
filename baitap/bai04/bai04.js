const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = box.dataset.color;
  });

  box.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = ''; 
  });
});
