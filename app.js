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
Pictures.totalClicks = 0;

for (var i = 0; i < Pictures.allNames.length; i++) {
  new Pictures(Pictures.allNames[i]);
}

function makeRandomNumber() {
  return Math.floor(Math.random() * Pictures.all.length);
}

function displayImages() {
  var currentlyShowing = [];
  currentlyShowing[0] = makeRandomNumber();
  currentlyShowing[1] = makeRandomNumber();
  currentlyShowing[2] = makeRandomNumber();
  while (currentlyShowing[0] === currentlyShowing[1] || currentlyShowing[2] === currentlyShowing[1] || currentlyShowing[2] === currentlyShowing[0]) {
    currentlyShowing[0] = makeRandomNumber();
    currentlyShowing[1] = makeRandomNumber();
    currentlyShowing[2] = makeRandomNumber();
  }
  for (var i = 0; i < 3; i++) {
    Pictures.pics[i].src = Pictures.all[currentlyShowing[i]].source;
    Pictures.pics[i].alt = Pictures.all[currentlyShowing[i]].name;
    var numshows = Pictures.all[currentlyShowing[i]].amountOfShows += 1;
    // console.log(Pictures.all[currentlyShowing[i]].name, 'has been shown', numshows, 'times');
    // console.log(Pictures.all[i].timesClicked, 'timesClicked');
  }
}

function handleClick(e) {
  e.preventDefault();
  console.log(Pictures.totalClicks, 'totalClicks');
  Pictures.totalClicks++;
  // Pictures.timesClicked++;
  if (event.target.id === 'imageContainer') {
    return alert('Click on the picture please');
  }
  for (var i = 0; i < Pictures.all.length; i++) {
    if (Pictures.all[i].name === e.target.alt) {
      // console.log('++++++++', Pictures.all[i].timesClicked);
      Pictures.all[i].timesClicked++;
      // console.log('------------', Pictures.all[i].timesClicked);
      console.log(Pictures.all[i].name + ' was clicked ' + Pictures.all[i].timesClicked + ' times.');
    }
  }
  for (var i = 0; i < Pictures.all.length; i++) {
    if (Pictures.all[i].name === e.target.name) {
      console.log(Pictures.all[i].totalClicks + ' totalClicks: ');
    }
  }
  if (Pictures.totalClicks < 25) {
    console.log('EVENT*******', e.target.alt);
    displayImages();
  } else {
    Pictures.container.removeEventListener('click', handleClick);
    alert('You have completed the survey. Thank you for your participation!');
    var counts = [];
    for (var i = 0; i < Pictures.all.length; i++) {
      counts.push(Pictures.all[i].timesClicked);
      if(Pictures.all[i].timesClicked > 0){
        // console.log('im here');
        var liEl = document.createElement('li');
        liEl.textContent = (Pictures.all[i].name + ' was clicked ' + Pictures.all[i].timesClicked + ' times.');
        dataList.appendChild(liEl);
      }
    }
    // retrieve savedCounts from localstorage
    var savedCounts = localStorage.getItem('savedCounts');
    // if savedCounts is not undefined, update counts with savedCounts
    if (savedCounts !== null) {
      console.log('savedCounts is', savedCounts);
    } else {
      console.log('no saved data');
    }
    chart(Pictures.allNames, counts);
    // store counts in localstorage as savedCounts
    localStorage.setItem('savedCounts', JSON.stringify(counts));
  }
}
function chart(names, counts){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: counts,
        backgroundColor: [
          'gray',
          'blue',
          'red',
          'purple',
          'yellow',
          'white',
          'green',
          'pink',
          'orange',
          'burgandy',
          'gray',
          'blue',
          'red',
          'purple',
          'yellow',
          'white',
          'green',
          'pink',
          'orange',
          'burgandy',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}




Pictures.container.addEventListener('click', handleClick);
displayImages();
