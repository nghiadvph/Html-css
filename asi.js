var index=0;
var imgs=["https://www.carmudi.vn/images/slider/slide-01-desktop.jpg",
"https://www.carmudi.vn/images/slider/slide-03-desktop.png",
"https://www.carmudi.vn/images/slider/slide-02-desktop.jpg"];
function next(){
  index++;
  if(index>=imgs.length)index=0;
    document.getElementById("anh").src=imgs[index];
}
function back(){
    index--;
    if(index<0)index=imgs.length -1;
    document.getElementById("anh").src=imgs[index];
}
setInterval("next()",3000);
