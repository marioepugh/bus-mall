'use strict';

function Image(number) {
  this.name = number;
  this.source = 'img/' + this.name + '.jpg';
  this.timeShown = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.lenght; i++){
  new Image(Image.allNames[i]);
}

Image.imgEl = document.getElementById('the_image');

 var randomIndex = Math.floor(Math.random() * Image.all.length;
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timeShown += 1;

  console.log(Image.all[randomIndex].name+, 'has been shown' + Image.all.[randomIndex].timeShown + ' times');
}

document.getElementById('the image').addEventListener('click', randomImage);

randomImage();

// function randomIndex(){
// var myimages=new Array()
// myimages[1]="img/bag.jpg"
// myimages[2]="img/banana.jpg"
// myimages[3]="img/bathroom.jpg"
// myimages[4]="img/boots.jpg"
// myimages[5]="img/breakfast.jpg"
// myimages[6]="img/bubblegum.jpg"
// myimages[7]="img/chair.jpg"
// myimages[8]="img/cthulhu.jpg"
// myimages[9]="img/dog-duck.jpg"
// myimages[10]="img/dragon.jpg"
// myimages[11]="img/pen.jpg"
// myimages[12]="img/pet-sweep.jpg"
// myimages[13]="img/scissors.jpg"
// myimages[14]="img/shark.jpg"
// myimages[15]="img/sweep.png"
// myimages[16]="img/tauntaun.jpg"
// myimages[17]="img/unicorn.jpg"
// myimages[18]="img/usb.gif"
// myimages[19]="img/water-can.jpg"
// myimages[20]="img/wine-glass.jpg"
//
//
//
// var ry=Math.floor(Math.random()*myimages.length)
// if (ry==0)
// ry=1
// document.write('<img src="'+myimages[ry]+'" border=0>')
// }
// randomIndex()
