const range = document.querySelector("input");
const span = document.querySelector(".input-box span");

span.innerHTML = range.value;

range.addEventListener("input", (e) => {
  let widthRange = range.offsetWidth + 60;
  let widthSpan = span.offsetWidth;
  let leftPx = ((widthRange - widthSpan) * e.target.value) / 100;

  console.log(widthSpan);

  span.innerHTML = e.target.value;
  span.style.left = `${leftPx - 30}px`;
});
