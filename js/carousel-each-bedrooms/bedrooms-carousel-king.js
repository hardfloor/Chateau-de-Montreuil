let carousel = null;

function openModal(id) {
  document.getElementById(`myModal-${id}`).style.display = "block";
  carousel = id;
}

function closeModal(id) {
  document.getElementById(`myModal-${id}`).style.display = "none";
  carousel = null;
}

var slideIndex = 1;
showSlides(slideIndex, carousel);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(`mySlides-${carousel}`);

  var captionText = document.getElementById("caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
