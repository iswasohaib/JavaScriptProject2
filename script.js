function copyText() {
  var myfield1 = document.getElementById("field1");
  var myfield2 = document.getElementById("field2");
  var btn = document.getElementById("buttonColor");
  myfield2 = myfield1;
  myfield1.value = "";
  if (btn.classList.contains("red")) {
    btn.classList.remove("red");
  } else {
    btn.classList.add("red");
  }
}
