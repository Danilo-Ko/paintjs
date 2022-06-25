const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext ("2d");

canvas.width =700;
canvas.height =700;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;


let painting = true;

function stopPainting () {
  painting = false;
}
function startPainting () {
  painting = true;
}

function onMouseMove (event) {
const x = event.offsetX;
const y = event.offsetY;
if(!painting) {
  ctx.beginPath ();
  ctx.moveTo(x,y);
}else {
  ctx.lineTo(x,y);
  ctx.stroke();
}
}




canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);