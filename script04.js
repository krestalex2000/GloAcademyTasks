const lineEditing = function(str) {
  if(typeof str !== "string") {
    console.log("Это не строка");
  } else {
    str = str.trim();
    console.log(str);
  }

  if(str.length > 30) {
    console.log(str.slice(0, 30) + "...");
  }
}