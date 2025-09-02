let screenLog = document.querySelector("#screen-log");

let offsetX = 0, offsetY = 0;

screenLog.addEventListener("pointerdown", (e) => {
  // store the offset of pointer from element’s top-left corner
  offsetX = e.clientX - screenLog.offsetLeft;
  offsetY = e.clientY - screenLog.offsetTop;

  screenLog.style.cursor = "grabbing";

  // move handler
  const handleMove = (e) => {
    e.preventDefault();
    screenLog.style.left = (e.clientX - offsetX) + "px";
    screenLog.style.top = (e.clientY - offsetY) + "px";
  };

  document.addEventListener("pointermove", handleMove);

  // stop moving on release
  const handleUp = () => {
    screenLog.style.cursor = "grab";
    document.removeEventListener("pointermove", handleMove);
    document.removeEventListener("pointerup", handleUp);
  };

  document.addEventListener("pointerup", handleUp);
});