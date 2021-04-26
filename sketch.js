let jsonbj;
let btns = []; // 館所有的 btn
function preload(){
  jsonbj=loadJSON('data.json');
  img=loadImage("assets/map.jpeg")
  jsonbj=loadJSON('data.json');
}
function setup() {
  createCanvas(360, 180);
  console.log(jsonbj);
  console.log(jsonbj.features[0].geometry.coordinates);//.表下一階層
  
  jsonbj.features.forEach((v)=>{
    let lat = v.geometry.coordinates[0]; //Latitude (lat) 東西經
    let long = v.geometry.coordinates[1];//Longitude (long) 南北緯
    // 根據每筆資料製作 btn 物件
    btns.push(new btn((lat+180),180-(long+90),v.properties.mag*v.properties.mag));
    circle(lat+180,long+90,v.properties.mag*v.properties.mag); //magnitude 震度
    //noStroke();
    //fill(224,79,79,v.properties.mag*v.properties.mag)
    });
}

function draw() {
  //background(25);
  // 根據 btns 袋子中的每物件進行顯示
  image(img,0,0,360,180);
  btns.forEach((b)=>{
b.display();
})
}

class btn{
  constructor(x,y,size){
    this.x=x;
    this.y=y;
    this.size=size;
  } 
  display(){
    if (mouseX>this.x-this.size/2 &&
    mouseX<this.x+this.size/2 &&
    mouseY>this.y-this.size/2 &&
    mouseY<this.y+this.size/2){
      fill(232,70,70,this.size*2)
      }else {
      fill(100,this.size*2);
     }
  noStroke();
  circle(this.x,this.y,this.size);
  }
}