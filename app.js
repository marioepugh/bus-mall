'use strict';

function Pictures(name) {
  this.name = name;
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
Pictures.totalClicks = 1;

for(var i = 0; i < Pictures.allNames.length; i++){
  new Pictures(Pictures.allNames[i]);
}

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
    // console.log(Pictures.all[currentlyShowing[i]].name, 'has been shown', numshows, 'times');
    // console.log(Pictures.all[i].timesClicked, 'timesClicked');
  }
}

function handleClick(e){
  e.preventDefault();
  console.log(Pictures.totalClicks, 'totalClicks');
  Pictures.totalClicks++;
  Pictures.timesClicked++;
  if (event.target.id === 'imageContainer'){
    return alert('Click on the picture please');
  }
  if(Pictures.totalClicks < 8) {
    console.log('EVENT*******', e.target.alt);


    // for(var i = 0; i < 3; i++){
      for(var i = 0; i < Pictures.all.length; i++){
        // console.log('im here');
            var liEl = document.createElement('li');
            liEl.textContent = 'Pictures.timesClicked this is just a placeholder';
           dataList.appendChild(liEl);

      }

    for(var i = 0; i < Pictures.all.length; i++){
      if(Pictures.all[i].name === e.target.alt) {
        // console.log('++++++++', Pictures.all[i].timesClicked);
        Pictures.all[i].timesClicked++
        // console.log('------------', Pictures.all[i].timesClicked);

        console.log(Pictures.all[i].name + ' was clicked ' + Pictures.all[i].timesClicked + ' times.');
      }
    }
    for(var i = 0; i < Pictures.all.length; i++){
      if(Pictures.all[i].name === e.target.name) {
        console.log(Pictures.all[i].totalClicks + ' totalClicks: ');
      }
    }

    displayImages();
  }
  else {
    Pictures.container.removeEventListener('click', handleClick);
    alert('You have complete the survey. Thank you for your participation!');
  }
}

Pictures.container.addEventListener('click', handleClick);
displayImages();










//
//
//display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".
//
// function randomPictures1(){
//   var randomIndex = Math.floor(Math.random() * Pictures.all.length);
//
// }
//
// Pictures.imageElement.src = Pictures.all[randomIndex].source;
// Pictures.imageElement.alt = Pictures.all[randomIndex].name;
// Pictures.all[randomIndex].amountOfShows += 1;
// return randomIndex;
// }
//
//
// Pictures.leftImg
//
// Pictures.centerImg
//
// Pictures.rightImg
//
//
//
//
//
// function handleClick(e){
// Pictures.totalClicks += 1;
// console.log(Pictures.totalClicks, 'total clicks');
// if(Pictures.totalClicks === 25){
//
//
// }
//
//   console.log(e.target.alt);
//   for(var i = 0; i < Pictures.alt.length; i++){
//     if(e.target.alt === Pictures.all[i].name){
//
//     }
//   }
// }
//
//
// Image.all = [];
// Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//
//
// Image.imgEl = document.getElementById('the_image');
//
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