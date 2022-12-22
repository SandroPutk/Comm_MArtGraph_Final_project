//aq gavakete background fotos da textis sinqronulad cvlilebis funqcia
const imgg = document.getElementById("backk") // ukana fonistvis elementze miwvdoma
const navtxt = document.getElementById("txt") //fonze textis elementi
const navtxt1 = document.getElementById("txt1") //fonze textis elementi

var my = false //cvladi tu falsea
window.setInterval(function () { //funqcia set intervalshi avtomaturad momushave anu usaxelo funqciis sheqmna
  if (my) {
    navtxt.style.display = "block" //elementi gaxados blokuri
    navtxt1.style.display = "none"// es elementi dasruldes
    imgg.style.backgroundImage = "url(src/IMG/ForNavpage/navbar3.jpg)" //fotos gamodzaxeba
  } else {
    navtxt1.style.display = "block"//elementi gaxados blokuri
    navtxt.style.display = "none"// es elementi dasruldes
    imgg.style.backgroundImage = "url(src/IMG/ForNavpage/Navbar.jpg)"//fotos gamodzaxeba
  }
  my = !my
}, 5000)//5000 nishnavs 5 wams


//aq gavakete funqcia galerry gilakebistvis // gulaki show all
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    gallery(x[i], "show");
    if (x[i].className.indexOf(c) > -1) galleryadd(x[i], "show");
  }
}
//gilaki rigit meore
function galleryadd(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}
//gilaki rigit mesame
function gallery(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// titoueli ghilakis funqciaa 
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function myFunction() {
  var x = document.getElementById("demoo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}