function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
  document.getElementById("closebtn").style.width = "40%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("closebtn").style.width = "0";
  document.getElementById("closebtn").style.width = "0";
}


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("carrossel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); 
}
