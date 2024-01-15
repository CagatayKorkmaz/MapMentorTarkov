const image = document.getElementById('zoomable-image');
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0, scale = 1;

image.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scaleFactor = 0.1;
  const deltaY = e.deltaY > 0 ? -scaleFactor : scaleFactor;

  scale += deltaY;
  scale = Math.min(Math.max(0.85, scale), 3); // Min ve max zoom seviyeleri ayarlayabilirsiniz

  image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});

image.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDragging = true;
  startX = e.clientX - translateX;
  startY = e.clientY - translateY;
  image.style.cursor = 'grabbing';
});

image.addEventListener('mouseup', () => {
  isDragging = false;
  image.style.cursor = 'grab';
});

image.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (isDragging) {
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }
});

image.addEventListener('dblclick', () => {
  scale = 1;
  translateX = 0;
  translateY = 0;
  image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});


// Lokasyon küçültme

var divKucukMu = true; // Div'in şu anki durumunu takip eden bir değişken

function toggleKucult() {
  var divElement = document.querySelector(".locations");
  
  // Div'in boyutunu kontrol et
  if (divKucukMu) {
    // Eğer div küçükse, eski haline getir
    divElement.style.height = "500px";
  } else {
    // Eğer div büyükse, küçült
    divElement.style.height = "0px"; // Örneğin, 50px olarak belirledim. İhtiyacınıza göre ayarlayabilirsiniz.
  }

  // Durumu tersine çevir
  divKucukMu = !divKucukMu;
}


var isFullScreen = false;

function toggleFullScreen() {
  var fullScreenElement = document.querySelector(".changethemap");
  var fullScreenElement2 = document.querySelector(".changelocation");
  
  if (isFullScreen) {
    fullScreenElement.style.right = "0";
    fullScreenElement2.style.left = "0";
  } else {
    fullScreenElement.style.right = "-220px";
    fullScreenElement2.style.left = "-220px";
  }

  isFullScreen = !isFullScreen;

  var fullScreenIcon = document.getElementById('arrow');

  // 'fa-caret-down' ve 'fa-caret-up' sınıflarını kontrol et ve değiştir
  if (fullScreenIcon.classList.contains('fa-expand')) {
    fullScreenIcon.classList.remove('fa-expand');
    fullScreenIcon.classList.add('fa-compress');
  } else {
    fullScreenIcon.classList.remove('fa-compress');
    fullScreenIcon.classList.add('fa-expand');
  }
  
}