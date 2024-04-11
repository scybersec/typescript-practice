const button = document.querySelector("button")!;
function clickHandler(message: string, age: number) {
  let username = "Shimul";
  console.log("Clicked! " + message);
}
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're Welcome", 30));
}
