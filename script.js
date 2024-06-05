 // 도파민 콘텐츠1 인터렉션
 document.addEventListener('DOMContentLoaded', function() {
 const h2 = document.querySelector('h2');
 const h2Width = h2.offsetWidth;
 const underline = h2.nextElementSibling;
 underline.style.width = h2Width + 'px';
 });

// 팀소개 프로필 아이콘 인터렉션
 document.querySelectorAll('.icon-3 img').forEach(function(img) {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-hover');

  img.addEventListener('mouseover', function() {
   img.src = hoverSrc;
  });

  img.addEventListener('mouseout', function() {
   img.src = originalSrc;
  });
 });

 // 말풍선 인터렉션
 document.addEventListener("DOMContentLoaded", function() {

  const images1 = document.querySelectorAll('#con1-img1');
  const images2 = document.querySelectorAll('#con1-img2');
  const images3 = document.querySelectorAll('#con1-img3');


  function revealImages(images) {
   images.forEach((image, index) => {
    if (isElementInViewport(image)) {
     setTimeout(() => {
      image.style.opacity = '1';
     }, 300 * index);
    }
   });
  }
 // 메인메뉴
  function isElementInViewport(el) {
   const rect = el.getBoundingClientRect();
   return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
  }

  window.addEventListener('scroll', function() {
   revealImages(images1);
   revealImages(images2);
   revealImages(images3);
  });

  revealImages(images1);
  revealImages(images2);
  revealImages(images3);
 });

 window.addEventListener('scroll', function() {
  const header = document.getElementById('top_menu');
  const links = document.querySelectorAll('#nav a');

  if (window.scrollY > 0) {
   header.classList.add('scrolled');
   links.forEach(link => {
    link.style.color = '#7B5FCE';
   });
  } else {
   header.classList.remove('scrolled');
   links.forEach(link => {
    link.style.color = 'inherit';
   });
  }
 });
 //목업
 document.addEventListener("DOMContentLoaded", function() {
  const images = ["img/screen1.png", "img/screen1-1.png", "img/screen1-2.png"]; // 바뀔 이미지들의 경로 배열
  let currentIndex = 0;
  let isScrolling = false;

  function changeImage() {
   const slider = document.querySelector(".slider");
   slider.style.opacity = 0;

   setTimeout(function() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
    slider.style.opacity = 1;
   }, 1000);
  }

  setInterval(changeImage, 4000);

  window.addEventListener("scroll", function() {

   if (!isScrolling) {
    isScrolling = true;
    clearInterval(intervalId);
   }

   clearTimeout(this.scrollTimeout);
   this.scrollTimeout = setTimeout(function() {
    isScrolling = false;
    intervalId = setInterval(changeImage, 4000);
   }, 100);
  });
 });

 document.addEventListener("DOMContentLoaded", function() {
  const images = ["img/screen3.png", "img/screen3-1.png", "img/screen3-2.png", "img/screen3-3.png"]; // 바뀔 이미지들의 경로 배열
  let currentIndex = 0;
  let isScrolling = false;
  let intervalId;

  function changeImage() {
   const slider = document.querySelector(".slider1");
   slider.style.opacity = 0;

   setTimeout(function() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
    slider.style.opacity = 1;
   }, 1000);
  }

  intervalId = setInterval(changeImage, 4000);

  window.addEventListener("scroll", function() {
   if (!isScrolling) {
    isScrolling = true;
    clearInterval(intervalId);
   }

   clearTimeout(this.scrollTimeout);
   this.scrollTimeout = setTimeout(function() {
    isScrolling = false;
    intervalId = setInterval(changeImage, 4000);
   }, 100);
  });
 });

