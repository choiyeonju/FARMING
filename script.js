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


