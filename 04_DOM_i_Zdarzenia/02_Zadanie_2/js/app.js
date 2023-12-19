const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((el) => {
  el.addEventListener("click", function (e) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;
  });
});
