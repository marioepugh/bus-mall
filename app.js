'use strict';

function Pictures(number) {
  this.name = number;
  this.source = 'img/' + this.name + '.jpg';
  this.amountOfShows = 0;
  this.timesClicked = 0;
  Pictures.all.push(this);
}

Pictures.all = [];
Pictures.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// The container DOM element is needed for the event listener
Pictures.container = document.getElementById('imageContainer');
// Need the first three DOM elements to assign the sources to them.
Pictures.pics = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];
Pictures.totalClicks = 0;


for(var i = 0; i < Pictures.allNames.length; i++){
  new Pictures(Pictures.allNames[i]);
}
function makeRandomNumber(){
  return Math.floor(Math.random() * Pictures.all.length);
}

Pictures.leftImg = document.getElementById('left');
Pictures.centerImg = document.getElementById('center');
Pictures.rightImg = document.getElementById('right');
Pictures.container = document.getElementById('imageContainer');


function displayImages(){
  var numbers = [];
  numbers[0] = makeRandomNumber();
  numbers[1] = makeRandomNumber();
  while(numbers[0] === numbers[1]) {
    console.log('Dupe found');
    numbers[1] = makeRandomNumber();
  }
  numbers[2] = makeRandomNumber();
  while(numbers[2] === numbers[1] || numbers[2] ===
    numbers[0]) {
    console.log('Dupe found');
    numbers[2] = makeRandomNumber();
  }
  // for(var i = 0; i < 3; i++) {
  //   Pictures.pics[i].src = Pictures.all[currentlyShowing[i]].source;
  //   Pictures.pics[i].alt = Pictures.all[currentlyShowing[i]].name;
  //   var numshows = Pictures.all[currentlyShowing[i]].amountOfShows += 1;
  //   console.log(Pictures.all[currentlyShowing[i]].name, 'has been shown', numshows, 'times');
  // }





  Pictures.leftImg.src = Pictures.all[numbers[0]].source;
  Pictures.centerImg.src = Pictures.all[numbers[1]].source;
  Pictures.rightImg.src = Pictures.all[numbers[2]].source;
  Pictures.leftImg.alt = Pictures.all[numbers[0]].name;
  Pictures.centerImg.alt = Pictures.all[numbers[1]].name;
  Pictures.rightImg.alt = Pictures.all[numbers[2]].name;

function makeRandomNumber(){
  return Math.floor(Math.random() * Pictures.all.length);
}

function displayImages(){
  var currentlyShowing = [];
  currentlyShowing[0] = makeRandomNumber();
  currentlyShowing[1] = makeRandomNumber();
  currentlyShowing[2] = makeRandomNumber();
  while(currentlyShowing[0] === currentlyShowing[1] || currentlyShowing[2] === currentlyShowing[1] || currentlyShowing[2] === currentlyShowing[0]){
    currentlyShowing[0] = makeRandomNumber();
    currentlyShowing[1] = makeRandomNumber();
    currentlyShowing[2] = makeRandomNumber();
  }
  for(var i = 0; i < 3; i++) {
    Pictures.pics[i].src = Pictures.all[currentlyShowing[i]].source;
    Pictures.pics[i].alt = Pictures.all[currentlyShowing[i]].name;
    var numshows = Pictures.all[currentlyShowing[i]].amountOfShows += 1;
    console.log(Pictures.all[currentlyShowing[i]].name, 'has been shown', numshows, 'times');
  }
}

function handleClick(e){
  console.log(Pictures.totalClicks, 'totalClicks');
  Pictures.totalClicks++;
  if(Pictures.totalClicks < 8) {
    for(var i = 0; i < Pictures.all.length; i++){
      if(Pictures.all[i].name === e.target.name) {
        console.log(Pictures.all[i].name + ' was clicked');
        Pictures.all[i].timesClicked++;
      }
    }
    displayImages();
  }
  else {
    Pictures.container.removeEventListener('click', handleClick);
  }

}
function handleClick(e){
  console.log(e.target);
  displayImages();
}

Pictures.container.addEventListener('click', handleClick);

displayImages();




// for a pop up notifying they didnt click the pic.
// function randomImages(){
//   function handleClick(e){
//     // if they dont click on an image
//     if(e.target.id === "image section"){
//       return alert('Click the pictures and not the page background')
//     }
//   }
// }

//  var randomIndex = Math.floor(Math.random() * Image.all.length;
//   Image.imgEl.src = Image.all[randomIndex].source;
//   Image.imgEl.alt = Image.all[randomIndex].name;
//   Image.all[randomIndex].timeShown += 1;
//
//   console.log(Image.all[randomIndex].name+, 'has been shown' + Image.all.[randomIndex].timeShown + ' times');
// }
//
// document.getElementById('the image').addEventListener('click', randomImage);
//
// randomImage();
//
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
