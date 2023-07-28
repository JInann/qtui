let openCount = 0;
let ZIndex = 10;

export function getIndex() {
  return ZIndex++;
}
export function open() {
  setTimeout(() => {
    const container = document.querySelector(".app") as HTMLDivElement;
    if (container) {
      container.style.height = "100vh";
      container.style.overflow = "hidden";
      openCount++;
    }
  }, 0);
}
export function close() {
  openCount--;
  if (openCount <= 0) {
    const container = document.querySelector(".app") as HTMLDivElement;
    if (container) {
      container.style.height = "";
      container.style.overflow = "";
    }
  }
}
