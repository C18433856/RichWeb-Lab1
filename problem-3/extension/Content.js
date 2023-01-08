//array of images
let guineaPigs = [
    "https://www.zooplus.ie/magazine/wp-content/uploads/2022/03/peruvian-guinea-pig-with-swirly-hair.jpeg",
    "https://cf.ltkcdn.net/small-mammals/guinea-pigs/images/orig/326593-2119x1413-sheltie-guinea-pig.jpg",
    "https://www.thesprucepets.com/thmb/vENVsXZsjDeyWLWTLBNPgDcf51Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/about-guinea-pigs-1238899-hero-fd6b867b342e485796253c6c57b2d6c6.jpg",
    "https://media.os.fressnapf.com/cms/2020/08/5f2bd60dd7cac-5f2bd60dd7cadMeerschweinchen_594x320.jpg.jpg",
];

if (self.location.href == "https://www.google.ie/")
window.location.href = "https://www.google.ie/search?q=guinea+pig&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiyzqnL2Lj8AhVIUcAKHanqD04Q_AUoAXoECAEQAw&biw=1536&bih=754&dpr=1.25#imgrc=gd9VV1JVVQDS3M";

// get all the elements from the body
const elements = document.body.children;


if(confirm("Press OK to replace everything with Guinea Pigs.")){
let i = 0
Interval = setInterval(() => {
	const gpimg = document.createElement('img');
  	gpimg.src = guineaPigs[i%4];
	gpimg.style.maxHeight = "200px";
	gpimg.style.maxWidth = "200px";
	elements[i].replaceWith(gpimg)
	i = i + 1
	if(i === elements.length) {clearInterval(Interval)}
	
}, 1000)}



