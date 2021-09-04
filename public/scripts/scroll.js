const html = document.documentElement;
const canvas = document.getElementById("animation");
const context = canvas.getContext("2d");

const frameCount = 30;
const currentFrame = index => (
  `images/${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

canvas.width=1158;
canvas.height=770;

const img = new Image()
img.src = currentFrame(1);
img.onload=function(){
  drawScaledImage();
}

const updateImage = index => {
  img.src = currentFrame(index);
  drawScaledImage()
}

const drawScaledImage = () => {
  const ratio  = Math.min (canvas.width  / img.width,
	  					   canvas.height / img.height);
  const x = (canvas.width - img.width * ratio) / 2;
  const y = (canvas.height - img.height * ratio) / 2;  
  context.drawImage(img, 0,0, img.width, img.height,
	                x, y, img.width * ratio, img.height * ratio); 
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
