let boxes = document.getElementsByClassName("box");
let img = document.querySelector(".imgBox");
img.addEventListener("dragstart", () => {
  console.log("Drag start");
});
img.addEventListener("dragend", (e) => {
  console.log("Drag end");
  e.target.className = "imgBox";
});
for (box of boxes) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    console.log("drag over");
  });
  box.addEventListener("dragenter", (e) => {
    console.log("drag enter");
  });
  box.addEventListener("dragleave", (e) => {
    console.log("drag leave");
  });
  box.addEventListener("drop", (e) => {
    let name = e.target.className;
    console.log(name);
    e.target.append(img);

    console.log("drop");
  });
}
