
slideIndex = 1;
showSlides(slideIndex)
function showSlides(n) {
    var mySlide = document.getElementsByClassName('slideImg')
    var mySlides = document.getElementsByClassName('slideImgs')
    var slidingTxt = document.getElementsByClassName('slideTxt')
    for (var i = 0; i < mySlide.length; i++) {
         mySlide[i].style.display = 'none' 
    }

    for (var i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none' 
   }
   for (var i = 0; i < slidingTxt.length; i++) {
    slidingTxt[i].style.display = 'none' 
    }

    if (n > mySlide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = mySlide.length
    }

    mySlide[slideIndex - 1].style.display = 'block';
    mySlides[slideIndex - 1].style.display = 'block';
    slidingTxt[slideIndex - 1].style.display = 'block';
}

function plusSlide(n) {
    showSlides(slideIndex += n)
}
//Function for mobile navigation..

var closeNav = document.getElementsByClassName('close')
var navItem = document.getElementById('navMenu')
var openNav = document.getElementById('burger')

openNav.onclick = function () {
    navItem.classList.add('show')
}

closeNav[0].onclick = function () {
    navItem.classList.remove('show')
}

