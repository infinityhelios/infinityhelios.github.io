window.onload = () => {
    fetch('https://infinityhelios.github.io/sidenav.html')
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("sidenav").innerHTML = data;
    })
}

let mybutton = document.getElementById("scroll");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
