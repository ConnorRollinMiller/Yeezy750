$(document).ready(function() {

   $(genderSec).fadeOut();
   $(genderSec).children().fadeOut();

   $(colorSec).fadeOut();
   $(colorSec).children().fadeOut();

   $(newsletterSec).fadeOut();
   $(newsletterSec).children().fadeOut();

   $(checkoutSec).fadeOut();
   $(checkoutSec).children().fadeOut();

   $(gallerySec).fadeOut();
   $(footer).fadeOut();


   function shoeSlider(container) {

      var totalSlides = container.children().length;
      var currentSlide = container.add("li.show");
      var nextSlide = currentSlide.next();
      var firstSlide = container.children().first();

      if (nextSlide.length <= 0) {
         nextSlide = firstSlide;
      }

      currentSlide.removeClass("show");
      nextSlide.addClass("show");
   }

   $(document).scroll(function(){
      var headerHeight = $("header").height();
      if ($(document).scrollTop() > headerHeight) {
         //$("nav").fadeIn();
         //$("nav").css("visibility", "visible");
      } else {
         $("nav").fadeOut();
      }
   });
});

function carouselSlider() {

   var index = 0;
   var container = document.getElementById("slide-container");
   var leftButton = document.getElementById("left-button");
   var rightButton = document.getElementById("right-button");
   var slides = document.getElementsByClassName("slide");
   var images = document.getElementsByClassName("slide-img");
   var leftPos = 0;

   container.style.width = slides.length * 100 + "%";

      leftButton.addEventListener("click", function(){
         index -= 1;
         leftPos += 100;
         container.style.marginLeft = leftPos + "%";
         //console.log(leftPos, index);
         if (index > slides.length - 1) {
            index = 0;
            leftPos = 0;
            container.style.marginLeft = leftPos + "%";
         }
         if (index < 0) {
            index = slides.length - 1;
            leftPos = -(slides.length - 1) * 100;
            container.style.marginLeft = leftPos + "%";
         }
      });

      rightButton.addEventListener("click", function(){
         index += 1;
         leftPos -= 100;
         container.style.marginLeft = leftPos + "%";
         //console.log(left, index);
         if (index > slides.length - 1) {
            index = 0;
            leftPos = 0;
            container.style.marginLeft = leftPos + "%";
         }
         if (index < 0) {
            index = slide.length - 1;
            leftPos = -slides.length * 100;
            container.style.marginLeft = leftPos + "%";
         }
      });
   }

function changeImage(index, name, container){

   var imagesArray = document.getElementsByClassName("shoe-img-colors");
   var buttonArray = document.getElementsByClassName("ring");
   var options = document.getElementsByTagName("option");

   for (var i = 0; i < buttonArray.length; i++) {
      if (i == index) {
         imagesArray[i].style.opacity = "1";
         container.innerHTML = name;
         buttonArray[i].classList.add("active-color-picker");
         options[i].selected = true;
      } else {
         imagesArray[i].style.opacity = "0";
         buttonArray[i].classList.remove("active-color-picker");
         options[i].selected = false;
      }
   }
}

function newsLetterFocus() {
   inputBox.style.textAlign = "left";
   inputBox.style.fontWeight = "bold";
   inputBox.placeholder = "";
}

function newsLetterUnfocus() {
   if (inputBox.value.length == 0) {
      inputBox.style.textAlign = "center";
      inputBox.style.fontWeight = "normal";
      inputBox.placeholder = "Email";
      inputBox.style.borderColor = "rgba(0,0,0,0)";
   }
   return inputBox;
}

function validEmail() {
   var wrong = "#e94f64";
   var correct = "#52d273";
   var email = document.getElementById("email-input");
   var btn = document.getElementById("newsletter-button");

   if (email.value.includes("@") && email.value.includes(".com")) {
      btn.disabled = false;
      email.style.borderColor = correct;
      discountPrice(btn);
   } else {
      btn.disabled = true;
      email.style.borderColor = wrong;
   }
}

function discountPrice(btn) {
   var priceContainer = document.getElementById("checkout-price");
   var price = 350;
   var newPrice;

   btn.addEventListener("click", function(){
      newPrice = price - (price * 0.15);
      priceContainer.innerHTML = "$" + newPrice;
   });

}

function showSection(section) {
   $(section).fadeIn();
   $(section).children().fadeIn();
   //section.style.display = "flex";

   /*
   $('html, body').animate({
      scrollTop: section.offsetTop
   }, 500);
   */
}

var checkoutShoeImgs = document.getElementsByClassName("checkout-shoe-img");

function checkoutColorPicker(images) {

   var options = document.getElementsByTagName("option");
   var names = ["Cool Grey", "Chocolate", "Triple Black", "Gum Bottoms"];
   var nameContainer = document.getElementById("checkout-colorway");

   for (var i = 0; i < options.length; i++) {
      if (options[i].selected == true) {
         images[i].style.opacity = "1";
         nameContainer.innerHTML = names[i];
      } else {
         images[i].style.opacity = "0";
      }
   }
}

var selectElem = document.getElementById("checkout-color-dropdown");

selectElem.addEventListener("change", function(){
   checkoutColorPicker(checkoutShoeImgs);

});

/* ========================================
            GLOBAL VARIABLES
======================================== */

var startBtn = document.getElementById("start-button");

var inputBox = document.getElementById("email-input");
var buttonsArray = document.getElementsByClassName("color-buttons");
var nameContainer = document.getElementById("colorway-name");

var sliderButtonLeft = document.getElementById("left-button");
var sliderButtonRight = document.getElementById("right-button");
var container = document.getElementById("slide-container");

var genderSecMenImg = document.getElementById("choice-men");
var genderSecWomenImg = document.getElementById("choice-women");

var colorSec = document.getElementById("section-color-picker");
var colorBtnList = document.getElementsByClassName("ring");
var gender, colorway;

var genderSec = document.getElementById("section-gender");

var colorBtn = document.getElementById("color-button");
var newsletterSec = document.getElementById("section-newsletter");
var checkoutSec = document.getElementById("section-checkout");


var sizeList = document.getElementById("checkout-size").childNodes;
var mensBtn = document.getElementById("checkout-mens");
var womensBtn = document.getElementById("checkout-womens");

var gallerySec = document.getElementById("section-gallery");
var footer = document.getElementsByTagName("footer");

/* ========================================
            INVOKE FUNCTIONS
======================================== */


// HEADER SECTION FUNCTIONS
startBtn.addEventListener("click", function() {
   showSection(genderSec);

   this.setAttribute('disabled', 'disabled');

   (function(){
      gallerySec.style.display = "flex";
      footer[0].style.display = "flex";
   })();

   $('html, body').animate({
      scrollTop: genderSec.offsetTop
   }, 500);

});

// GENDER SECTION FUNCTIONS

var womenTitle = genderSecWomenImg.children[0];
var menTitle = genderSecMenImg.children[0];

genderSecMenImg.addEventListener("click", function() {

   menTitle.style.opacity = "1";
   womenTitle.style.opacity = "0";

   showSection(colorSec);

   genderSec.style.display = "none";

   document.getElementById("checkout-mens").className = "checkout-gender-active";
   document.getElementById("checkout-womens").classList.remove("checkout-gender-active");

   genderSecWomenImg.classList.add("gender-inactive");
   genderSecMenImg.classList.remove("gender-inactive");
});

genderSecWomenImg.addEventListener("click",function() {

   womenTitle.style.opacity = "1";
   menTitle.style.opacity = "0";

   genderSec.style.display = "none";

   showSection(colorSec);

   document.getElementById("checkout-womens").classList.add("checkout-gender-active");
   document.getElementById("checkout-mens").classList.remove("checkout-gender-active");

   genderSecMenImg.classList.add("gender-inactive");
   genderSecWomenImg.classList.remove("gender-inactive");
});

// PICK-COLOR SECTION FUNCTIONS

inputBox.addEventListener("focus", newsLetterFocus);
inputBox.addEventListener("blur", newsLetterUnfocus);
inputBox.addEventListener("keyup", validEmail);

buttonsArray[0].addEventListener("click",function(){
   changeImage(0, "cool grey", nameContainer);
});
buttonsArray[1].addEventListener("click",function(){
   changeImage(1, "chocolate",nameContainer);
});
buttonsArray[2].addEventListener("click",function(){
   changeImage(2, "triple black",nameContainer);
});
buttonsArray[3].addEventListener("click",function(){
   changeImage(3, "Gum Bottoms", nameContainer);
});

colorBtn.addEventListener("click", function(){
   showSection(newsletterSec);
   showSection(checkoutSec);

   colorSec.style.display = "none";

   var active;
   var colorway;
   for (var i = 0; i < colorBtnList.length; i++) {
      active = colorBtnList[i].classList.contains("active-color-picker");
      if (active === true) {
         colorway = colorBtnList[i].dataset.colorway;
         checkoutShoeImgs[i].style.opacity = "1";
      } else {
         checkoutShoeImgs[i].style.opacity = "0";
      }
   }
   var checkoutColorway = document.getElementById("checkout-colorway");
   checkoutColorway.innerHTML = colorway;
});

// CHECKOUT SECTION FUNCTIONS

for (var a = 0; a < sizeList.length; a++) {
   sizeList[a].addEventListener("click", function(){
      for (var b = 0; b < sizeList.length; b++) {
         if (sizeList[b].className === "checkout-size-active") {
            sizeList[b].classList.remove("checkout-size-active");
         }
      }
      this.classList.add("checkout-size-active");
   });
}

// GENDER SECTION FUNCTIONS

mensBtn.addEventListener("click", function(){
   if (womensBtn.className === "checkout-gender-active") {
      womensBtn.classList.remove("checkout-gender-active");
   }
   this.classList.add("checkout-gender-active");
});

womensBtn.addEventListener("click", function(){
   if (mensBtn.className === "checkout-gender-active") {
      mensBtn.classList.remove("checkout-gender-active");
   }
   this.classList.add("checkout-gender-active");
});

// CAROUSEL SLIDER FUNCTIONS

carouselSlider();
