// var reviews = [
//   {
//     category: ['food', 'fast'],
//     name: "Wendys",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "wendys",
//     image: 'images/Wendys-logo.png',
//     reviewer: ['Karen', 'Megin', 'Parker', 'Kelly' ],
//     review: [{ text: 'Kind of greasy but you know what you are getting', funny: 0, useful: 0}, { text: 'Truly the most savory burger you will ever taste!!!', funny: 0, useful: 0}, { text: 'The Frostys are truly to die for.', funny: 0, useful: 0}, { text: 'Service was terrible!!!!!! THIS FAMILY WILL NOT BE RETURNING!', funny: 0, useful: 0}],
//     score: 15
//   },
//   {
//     category: ['food', 'fish'],
//     name: "Rubios",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "rubios",
//     image: 'images/rubios-logo.png',
//     reviewer: ['Bill'],
//     review: [{ text: 'Pretty good tacos, the fish was a little dry though.', funny: 0, useful: 0}],
//     score: 3
//   },
//   {
//     category: ['food', 'pizza'],
//     name: "Flippin Pizza",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "flippin",
//     image: 'images/fpizza-logo.jpg',
//     reviewer: ['Karly'],
//     review: [{ text: 'Great pizza but the service left a bad taste in my mouth (unlike the pizza).', funny: 0, useful: 0}],
//     score: 3
//   },
//   {
//     category: ['food', 'fast'],
//     name: "Dunkin' Donuts",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "dunkin",
//     image: 'images/dunkindonuts-logo.gif',
//     reviewer: ['Bill'],
//     review: [{ text: 'Not the best but it is great when I am in a hurry on my way in to work.', funny: 0, useful: 0}],
//     score: 2
//   },
//   {
//     category: ['food', 'fish'],
//     name: "Harbor Grill",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "harbor",
//     image: 'images/harborgrill-logo.jpg',
//     reviewer: ['Ryan'],
//     review: [{ text: 'A bit pricy but the food was absolutely delicious', funny: 0, useful: 0}],
//     score: 4
//   },
//   {
//     category: ['food', 'sandwiches'],
//     name: "Board 'n Brew'",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "board",
//     image: 'images/boardbrew-logo.jpg',
//     reviewer: ['Karen'],
//     review: [{ text: 'Great beer selection, the sandwiches are just okay but the sweet and sour sauce is to die for!', funny: 0, useful: 0}],
//     score:4
//   },
//   {
//     category: ['food', 'mexican'],
//     name: "Taco Mesa",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "taco",
//     image: 'images/tacomesa-logo.jpg',
//     reviewer: ['Erica'],
//     review: [{ text: 'Great tacos, the cashier was rude and it was definitely not easy on my wallet', funny: 0, useful: 0}],
//     score: 3
//   },
//   {
//     category: ['food', 'sandwiches'],
//     name: "Checkers",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "checkers",
//     image: 'images/checkers-logo.jpg',
//     reviewer: ['Karen'],
//     review: [{ text: 'Will be back for more!', funny: 0, useful: 0}],
//     score: 5
//   },
//   {
//     category: ['food', 'mexican'],
//     name: "La Salsa",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "la",
//     image: 'images/lasalsa-logo.png',
//     reviewer: ['Alex'],
//     review: [{ text: 'Quality salsa, subpar chicken', funny: 0, useful: 0}],
//     score: 3
//   },
//   {
//     category: ['food', 'chicken'],
//     name: "Wing Stop",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "wing",
//     image: 'images/wingstop-logo.png',
//     reviewer: ['Jeremy'],
//     review: [{ text: 'Great wings!', funny: 0, useful: 0}],
//     score: 4
//   },
//   {
//     category: ['food', 'mexican'],
//     name: "Chipotle",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "chipotle",
//     image: 'images/chipotle-logo.png',
//     reviewer: ['Bill'],
//     review: [{ text: 'The food was pretty good but they did not have carnitas!', funny: 0, useful: 0}],
//     score: 3
//   },
//   {
//     category: ['food', 'chinese'],
//     name: "Panda Express",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "panda",
//     image: 'images/pandaexpress-logo.svg',
//     reviewer: ['Jay'],
//     review: [{ text: 'You know what you are getting here.', funny: 0, useful: 0}],
//     score: 3
//   },
//   {
//     category: ['food', 'sandwiches'],
//     name: "Subway",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "subway",
//     image: 'images/subwayreal-logo.gif',
//     reviewer: ['Lisa'],
//     review: [{ text: 'Fast but flavorless.', funny: 0, useful: 0}],
//     score: 2
//   },
//   {
//     category: ['food', 'sandwiches'],
//     name: "Panera Bread",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "panera",
//     image: 'images/panera-logo.png',
//     reviewer: ['Amy'],
//     review: [{ text: 'Great soup, good sandwiches, will return!', funny: 0, useful: 0}],
//     score: 4
//   },
//   {
//     category: ['food', 'mexican'],
//     name: "Oscars",
//     type: "restaurant",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     id: "oscars",
//     image: 'images/oscars-logo.jpeg',
//     reviewer: ['Eric'],
//     review: [{ text: 'Best fish tacos I have ever had!', funny: 0, useful: 0}],
//     score: 5
//   },
//
//   //List of places with reviews
// ];

var body = document.getElementsByTagName('body')[0],
  home = document.getElementById('home'),
  searchButton = document.getElementById('search-button');

home.addEventListener('click', function() {
  remove('top');
  remove('single');
  remove('location-div');
});



//Search button even listener
searchButton.addEventListener('click', function(theEvent) {
  var searchItem = document.getElementById('search-reviews');
  remove('top');
  remove('single');
  remove('location-div');
  reviewBox(searchItem); //search Fx
});

function remove(spot) {
  var element = document.getElementById(spot);
  if (typeof(element) != 'undefined' && element != null) {
    element.parentNode.removeChild(element);
  }
}

//global to transfer recallReview to event listeners when needed
var keepArray = [];

body.addEventListener('click', function(theEvent) {
  var readReviews = theEvent.target;
  var textId = theEvent.target.getAttribute('id');
  var switchReview = [];

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/reviews', true);
  xhr.send();

  xhr.addEventListener('load', function() {
    var rev = xhr.responseText;
    console.log(rev);
  });

  //decides where to show review text box
  for (var i = 0, len = reviews.length; i < len; i++) {
    if (textId === reviews[i].id) {
      switchReview = reviews[i];
      keepArray = reviews[i];

      remove('top');
      remove('single');
      overhaul(switchReview);
    }
  }
});

//add funny event listener
body.addEventListener('click', function(funnyClick) {
  if ($(funnyClick.target).hasClass('fun-count')) {
    console.log('this');
    var funButton = funnyClick.target.getAttribute('id');
    tagCounter(funButton, keepArray);}
});
//useful event listener
body.addEventListener('click', function(usefulClick) {
  if ($(usefulClick.target).hasClass('useful-count')) {
    var usefulButton = usefulClick.target.getAttribute('id');
    tagCounter(usefulButton, keepArray);}
});

document.body.addEventListener('click', function(thisEvent) {
  if ($(thisEvent.target).hasClass('star')) {
    var numberedStar = thisEvent.target.getAttribute('id');
    var hideStar = document.getElementById('star-menu');
    hideStar.classList.add('hidden');
    document.getElementById('review-bod').classList.remove('hidden');
  } else {
    return false;
  }
});

body.addEventListener('click', function (nextEvent) {

  if (document.getElementById('submit-review') == nextEvent.target) {

    if(document.getElementById('complete-review').value === "") {
      alert("Please input your review.");
      return false;
    }

    if(document.getElementById('review-name').value === "") {
      alert("Please input your name.");
      return false;
    }

    var vanish = document.getElementById('top');
    vanish.classList.add('hidden');

    writeReview(keepArray.id, 0);
  } else {
    return false;
  }
});

//add location
var addLocation = document.getElementById('addLocation');
addLocation.addEventListener('click', function() {
  remove('top');
  remove('single');
  remove('location-div');
  createLocation();
});

//submit new location to array
body.addEventListener('click', function(locationEvent) {
  var submitLocation = document.getElementById('submit-location'),
      locationClick = locationEvent.target;
  newLocation(locationClick, submitLocation);
});

function overhaul(recallReview) {

  upperDiv('top');

  var container = document.createElement('div');
  container.setAttribute('id', 'contained');
  container.setAttribute('class', 'container-fluid');
  document.getElementById('top').appendChild(container);

  var reviewsRow = document.createElement('div');
  reviewsRow.setAttribute('class', 'row');
  reviewsRow.setAttribute('id', 'review-row')
  container.appendChild(reviewsRow);
  //createDiv('first', recallReview);

  reviewContent(recallReview);

  var prime = document.getElementById('primed'),
      panelFooter = document.createElement('div');
  panelFooter.setAttribute('class', 'panel-footer well clearfix');
  document.getElementById('review-row').appendChild(panelFooter);

  var dropButton = document.createElement('div');
  dropButton.setAttribute('class', 'col-xs-8 col-xs-offset-4');
  panelFooter.appendChild(dropButton);

  var addReview = document.createElement('button');
  addReview.setAttribute('class', 'btn btn-primary pull-right');
  addReview.setAttribute('id', 'add-review');
  addReview.textContent = "Add review"; //add review button
  dropButton.appendChild(addReview);

  reviewArea(recallReview);

  //makes review area visible
  document.getElementById('add-review').addEventListener('click', function(theEvent) {

    var openText = theEvent.target;

    var clear = document.getElementById('review-row');
    clear.classList.add('hidden');

    var numberedStar = 0;

    write(document.getElementById('unhide'));
    //add
    var starScore = document.getElementById('star-menu'),
        revHeading = document.getElementById('review-top');

    revHeading.addEventListener('mouseover', function(theEvent) {

      var whichStar = theEvent.target.getAttribute('id'),
          theStars = starScore.getElementsByTagName('i');

      var numerical = 0;

      for (i = 0; i < theStars.length; i++) {
        if (whichStar > i) {
          theStars[i].classList.remove('fa-star-o');
          theStars[i].classList.add('fa-star');
        } else {
          theStars[i].classList.add('fa-star-o');
          theStars[i].classList.remove('fa-star');
        }
      }
    });
  });
}

function upperDiv(id) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', id);
  body.appendChild(mainDiv);
}
//function to create review boxes
function reviewBox(reviewed) {
  upperDiv('top');

  reviews.forEach(function(review) {
    if (review.name.toLowerCase().indexOf(reviewed.value.toLowerCase()) !== -1 || review.category[0] === reviewed.value.toLowerCase() || review.category[1] === reviewed.value.toLowerCase() ) {
      createReview(review);
    }
  });
}

function createReview(review) {
  var container = document.createElement('div');
  container.setAttribute('class', 'container-fluid');
  document.getElementById('top').appendChild(container);

  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  container.appendChild(row);

  var fixDiv = document.createElement('div');
  fixDiv.setAttribute('class', 'col-xs-8 col-xs-offset-2');
  row.appendChild(fixDiv);

  var panelPrimary = document.createElement('div');
  panelPrimary.setAttribute('class', 'panel panel-primary');
  fixDiv.appendChild(panelPrimary);

  var panelHeading = document.createElement('div');
  panelHeading.setAttribute('class', 'panel-heading well');
  panelPrimary.appendChild(panelHeading);

  var headingText = document.createElement('h4');
  headingText.setAttribute('class', 'text-center');
  headingText.textContent = review.name;
  panelHeading.appendChild(headingText);

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body pre-scrollable panel-height');
  panelPrimary.appendChild(panelBody);

  var pictureDiv = document.createElement('div');
  pictureDiv.setAttribute('class', 'col-xs-2');
  panelBody.appendChild(pictureDiv);

  //gives image of searched place
  var image = document.createElement('img');
  image.setAttribute('class', 'img-responsive');
  image.setAttribute('src', review.image);
  pictureDiv.appendChild(image);

  var paragraphDiv = document.createElement('div');
  paragraphDiv.setAttribute('class', 'col-xs-10');
  panelBody.appendChild(paragraphDiv);

  var reviewParagraph = document.createElement('p');
  reviewParagraph.setAttribute('id', 'review');

  //stars
  averageStars(review, paragraphDiv);

  paragraphDiv.appendChild(reviewParagraph);
  reviewParagraph.textContent = review.description;

  var panelFooter = document.createElement('div');
  panelFooter.setAttribute('class', 'panel-footer well clearfix');
  panelPrimary.appendChild(panelFooter);

  var addReview = document.createElement('button');
  addReview.setAttribute('class', 'btn btn-primary pull-right');
  addReview.setAttribute('id', review.id)
  addReview.textContent = "View reviews"; //add review button
  panelFooter.appendChild(addReview);

  return container;
}

function averageStars(review, append) {
  var averageScore = review.score / review.reviewer.length;
  for (j = 0; j < Math.floor(averageScore); j++) {
    var rating = document.createElement('i');
    rating.setAttribute('class', 'fa fa-star star');
    rating.setAttribute('aria-hidden', 'true');
    append.appendChild(rating);
  }
  if ((averageScore - Math.floor(averageScore)) % 1 > .3) {
    var rating = document.createElement('i');
    rating.setAttribute('class', 'fa fa-star-half star');
    rating.setAttribute('aria-hidden', 'true');
    append.appendChild(rating);
  }
}

function reviewContent(recallReview) {
  for (var j = 0, len = recallReview.reviewer.length; j < len; j++) {

    var bod = document.getElementById('review-row');

    var paragraphDiv = document.createElement('div');
    paragraphDiv.setAttribute('id', 'first');
    paragraphDiv.setAttribute('class', 'col-xs-8 col-xs-offset-2');
    bod.appendChild(paragraphDiv);

    var individualReview = document.createElement('div');
    individualReview.setAttribute('class', 'panel panel-primary');
    paragraphDiv.appendChild(individualReview);

    var individualHeading = document.createElement('div');
    individualHeading.setAttribute('class', 'panel-heading');
    individualReview.appendChild(individualHeading);

    var individualTitle = document.createElement('h4');
    individualTitle.textContent = recallReview.reviewer[j];
    individualHeading.appendChild(individualTitle);

    var individualBody = document.createElement('div');
    individualBody.setAttribute('class', 'panel-body pre-scrollable');
    individualReview.appendChild(individualBody);

    var reviewParagraph = document.createElement('p');
    reviewParagraph.setAttribute('id', 'review');
    var userIcon = document.createElement('i');
    userIcon.setAttribute('class', 'fa fa-user');
    userIcon.setAttribute('aria-hidden', 'true');
    individualBody.appendChild(userIcon);
    individualBody.appendChild(reviewParagraph);
    reviewParagraph.textContent = recallReview.review[j].text + " ";

    var reviewFooter = document.createElement('div');
    reviewFooter.setAttribute('class', 'panel-footer well clearfix');
    individualReview.appendChild(reviewFooter);

    //review tag buttons
    buttons(reviewFooter, recallReview);
  }
}

//hidden
function reviewArea(recallReview) {
  var rowTwo = document.createElement('div');
  rowTwo.setAttribute('class', 'row hidden');
  rowTwo.setAttribute('id', 'unhide');
  document.getElementById('contained').appendChild(rowTwo)

  var divFix = document.createElement('div');
  divFix.setAttribute('class', 'col-xs-10 col-xs-offset-1');
  rowTwo.appendChild(divFix);

  var reviewPanel = document.createElement('div');
  reviewPanel.setAttribute('class', 'panel panel-primary');
  divFix.appendChild(reviewPanel)

  var reviewHeading = document.createElement('div');
  reviewHeading.setAttribute('class', 'panel-heading well text-center');
  reviewHeading.setAttribute('id', 'review-top');
  reviewPanel.appendChild(reviewHeading);

  var topText = document.createElement('h4');
  topText.textContent = "Your review of " + recallReview.name;
  reviewHeading.appendChild(topText);

  var reviewBody = document.createElement('div');
  reviewBody.setAttribute('class', 'panel-body hidden');
  reviewBody.setAttribute('id', 'review-bod');
  reviewPanel.appendChild(reviewBody);

  var form = document.createElement('form');
  form.setAttribute('role', 'form');
  reviewBody.appendChild(form);

  var reviewForm = document.createElement('div');
  reviewForm.setAttribute('class', 'col-xs-8 col-xs-offset-2 form-horizontal well');
  reviewForm.setAttribute('id', 'review-type');
  form.appendChild(reviewForm);

  //stars
  createStars(reviewHeading);

  var textArea = document.createElement('textarea');
  textArea.setAttribute('class', 'form-control');
  textArea.setAttribute('id', 'complete-review');
  textArea.setAttribute('rows', '7');
  textArea.setAttribute('style', 'resize: none');
  textArea.setAttribute('placeholder', 'Your review...');
  reviewForm.appendChild(textArea);

  var inputReview = document.createElement('input');
  inputReview.setAttribute('id', 'review-name');
  inputReview.setAttribute('type', 'text');
  inputReview.setAttribute('class', 'form-control');
  inputReview.setAttribute('name', 'name');
  inputReview.setAttribute('placeholder', 'Name');
  reviewForm.appendChild(inputReview);

  var reviewSpan = document.createElement('span');
  reviewSpan.setAttribute('class', 'input-group-btn');
  reviewForm.appendChild(reviewSpan);

  var reviewButton = document.createElement('button');
  reviewButton.setAttribute('id', 'submit-review');
  reviewButton.setAttribute('class', 'btn btn-primary pull-right');
  reviewButton.setAttribute('type', 'reset');
  reviewButton.setAttribute('name', 'button');
  reviewButton.setAttribute('value', 'send');
  reviewButton.textContent = "Submit";
  reviewSpan.appendChild(reviewButton);
}

//funny button
function buttons(append, revPerson) {
  var buttonForm = document.createElement('form');
  append.appendChild(buttonForm);

  var funny = document.createElement('button');
  funny.setAttribute('class', 'btn btn-primary fun-count');
  funny.setAttribute('type', 'button');
  funny.setAttribute('id', j);
  funny.textContent = "funny: " + revPerson.review[j].funny;

  buttonForm.appendChild(funny);

  var useful = document.createElement('button');
  useful.setAttribute('class', 'btn btn-primary useful-count');
  useful.setAttribute('type', 'button');
  useful.setAttribute('id', ('useful' + j));
  useful.textContent = "useful: " + revPerson.review[j].useful;

  buttonForm.appendChild(useful);
}

//stars
function createStars(reviewHeading) {
  var showStars = document.createElement('div');
  showStars.setAttribute('class', 'hover-class row');
  showStars.setAttribute('id', 'star-menu');
  reviewHeading.appendChild(showStars);

  var starOne = document.createElement('i');
  starOne.setAttribute('id', '1');
  starOne.setAttribute('class', 'fa fa-star-o star');
  starOne.setAttribute('aria-hidden', 'true');
  showStars.appendChild(starOne);

  var starTwo = document.createElement('i');
  starTwo.setAttribute('id', '2');
  starTwo.setAttribute('class', 'fa fa-star-o star');
  starTwo.setAttribute('aria-hidden', 'true');
  showStars.appendChild(starTwo);

  var starThree = document.createElement('i');
  starThree.setAttribute('id', '3');
  starThree.setAttribute('class', 'fa fa-star-o star');
  starThree.setAttribute('aria-hidden', 'true');
  showStars.appendChild(starThree);

  var starFour = document.createElement('i');
  starFour.setAttribute('id', '4');
  starFour.setAttribute('class', 'fa fa-star-o star');
  starFour.setAttribute('aria-hidden', 'true');
  showStars.appendChild(starFour);

  var starFive = document.createElement('i');
  starFive.setAttribute('id', '5');
  starFive.setAttribute('class', 'fa fa-star-o star');
  starFive.setAttribute('aria-hidden', 'true');
  showStars.appendChild(starFive);
}

// review tag function
function tagCounter(id, comment) {
  for (var j = 0, len = comment.review.length; j < len; j++) {

    if (id == ('useful' + j)) {
      var num = 'useful' + j.toString(),
          updateUseful = document.getElementById(num);

      if (comment.review[j].useful < 1) {
        comment.review[j].useful += 1;
        updateUseful.textContent = "useful: " + comment.review[j].useful;

        funnyCount(comment);
      }
    } else if (id == j) {
      var num = j.toString(),
          updateFunny = document.getElementById(num);

      if (comment.review[j].funny < 1) {
        comment.review[j].funny += 1;
        updateFunny.textContent = "funny: " + comment.review[j].funny;

        funnyCount(comment);
      }
    }
  }
}

function funnyCount(update) {
  for (var i = 0, len = reviews.length; i < len; i++) {

    if (reviews[i].name == update.name) {
      reviews[i] = update;
    }
  }
}

//removes hidden class from review text div
function write(review) {
  review.classList.remove('hidden');
}

//function to write and submit a review
function writeReview(recReview, numStar) {
  var written = document.getElementById('complete-review').value,
      named = document.getElementById('review-name').value,
      countScore = parseInt(numStar),
      reviewObj = { text: written, funny: 0, useful: 0};

  for (var i = 0, len = reviews.length; i < len; i++) {
    if (reviews[i].id.indexOf(recReview) !== -1) {
      reviews[i].review.push(reviewObj);
      reviews[i].reviewer.push(named);
      reviews[i].score += countScore;
      remove('top');
      updatedReviews(reviews[i].name);
      return reviews[i];
    }
  }
}


function updatedReviews(newReview) {

  upperDiv('single');

  for (var i = 0, len = reviews.length; i < len; i++) {
    if (reviews[i].name == newReview) {

      var container = document.createElement('div');
      container.setAttribute('class', 'container-fluid');
      container.setAttribute('id', 'contained');
      document.getElementById('single').appendChild(container);

      //big element creation
      createDiv('second', reviews[i]);
      //end element creation
      var bod = document.getElementById('review-body');
      var paragraphDiv = document.createElement('div');
      paragraphDiv.setAttribute('class', 'col-xs-10');
      bod.appendChild(paragraphDiv);

      var reviewParagraph = document.createElement('p');
      reviewParagraph.setAttribute('id', 'review');

      //stars
      averageStars(reviews[i], paragraphDiv);

      paragraphDiv.appendChild(reviewParagraph);
      reviewParagraph.textContent = reviews[i].description;

      var prime = document.getElementById('primed');

      var panelFooter = document.createElement('div');
      panelFooter.setAttribute('class', 'panel-footer well clearfix');
      prime.appendChild(panelFooter);

      var addReview = document.createElement('button');
      addReview.setAttribute('class', 'btn btn-primary pull-right');
      addReview.setAttribute('id', reviews[i].id)
      addReview.textContent = "View reviews"; //add review button
      panelFooter.appendChild(addReview);

      //removeTop();
      remove('location-div');
    }
  }
}

//creation function

function createDiv(label, arr) {

  var container = document.getElementById('contained');

  var row = document.createElement('div');
  row.setAttribute('id', label);
  row.setAttribute('class', 'row');
  container.appendChild(row);

  var helpDiv = document.createElement('div');
  helpDiv.setAttribute('class', 'col-xs-8 col-xs-offset-2');
  row.appendChild(helpDiv);

  var panelPrimary = document.createElement('div');
  panelPrimary.setAttribute('class', 'panel panel-primary');
  panelPrimary.setAttribute('id', 'primed');
  helpDiv.appendChild(panelPrimary);

  var panelHeading = document.createElement('div');
  panelHeading.setAttribute('class', 'panel-heading well');
  panelPrimary.appendChild(panelHeading);

  var headingText = document.createElement('h4');
  headingText.setAttribute('class', 'text-center');
  panelHeading.appendChild(headingText);

  var headingLink = document.createElement('a');
  headingLink.setAttribute('class', 'linked');
  headingLink.textContent = arr.name;
  headingText.appendChild(headingLink);

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body pre-scrollable panel-height');
  panelBody.setAttribute('id', 'review-body')
  panelPrimary.appendChild(panelBody);

  var pictureDiv = document.createElement('div');
  pictureDiv.setAttribute('class', 'col-xs-2');
  panelBody.appendChild(pictureDiv);

  //gives image of searched place
  var image = document.createElement('img');
  image.setAttribute('class', 'img-responsive');
  image.setAttribute('src', arr.image);
  pictureDiv.appendChild(image);
}

function createLocation() {
  var locationDiv = document.createElement('div');
  locationDiv.setAttribute('class', 'container-fluid');
  locationDiv.setAttribute('id', 'location-div');
  body.appendChild(locationDiv);

  var locationRow = document.createElement('div');
  locationRow.setAttribute('class', 'row loc-row');
  locationDiv.appendChild(locationRow);

  var divHelp = document.createElement('div');
  divHelp.setAttribute('class', 'col-xs-8 col-xs-offset-2');
  locationRow.appendChild(divHelp);

  var locationPanel = document.createElement('div');
  locationPanel.setAttribute('class', 'panel panel-primary');
  divHelp.appendChild(locationPanel);

  var locationHeading = document.createElement('div');
  locationHeading.setAttribute('class', 'panel-heading well text-center');
  var locationHeader = document.createElement('h4');
  locationHeader.textContent = "Add a location";
  locationHeading.appendChild(locationHeader);
  locationPanel.appendChild(locationHeading);

  var locationBody = document.createElement('div');
  locationBody.setAttribute('class', 'panel-body');
  locationPanel.appendChild(locationBody);

  var locationForm = document.createElement('form')
  locationBody.appendChild(locationForm);

  var formDiv = document.createElement('div');
  formDiv.setAttribute('class', 'col-xs-10 col-xs-offset-1 form-horizontal well');
  locationForm.appendChild(formDiv);

  var locationName = document.createElement('input');
  locationName.setAttribute('type', 'text');
  locationName.setAttribute('id', 'location-name');
  locationName.setAttribute('class', 'form-control');
  locationName.setAttribute('placeholder', 'Name');
  formDiv.appendChild(locationName);

  var locationCategory = document.createElement('input');
  locationCategory.setAttribute('type', 'text');
  locationCategory.setAttribute('id', 'location-category');
  locationCategory.setAttribute('class', 'form-control');
  locationCategory.setAttribute('placeholder', 'Input up to two categories');
  formDiv.appendChild(locationCategory);

  var locationDescription = document.createElement('textarea');
  locationDescription.setAttribute('class', 'form-control');
  locationDescription.setAttribute('id', 'location-description');
  locationDescription.setAttribute('rows', '7');
  locationDescription.setAttribute('style', 'resize: none');
  locationDescription.setAttribute('placeholder', 'Description...');
  formDiv.appendChild(locationDescription);

  var locationSpan = document.createElement('span');
  locationSpan.setAttribute('class', 'input-group-btn');
  formDiv.appendChild(locationSpan);

  var locationButton = document.createElement('button');
  locationButton.setAttribute('class', 'btn btn-primary pull-right');
  locationButton.setAttribute('id', 'submit-location');
  locationButton.setAttribute('type', 'reset');
  locationButton.setAttribute('name', 'button');
  locationButton.setAttribute('value', 'send');
  locationButton.textContent = "Submit";
  formDiv.appendChild(locationButton);
}

function newLocation(click, id) {
  if (click == id) {
    var newName = document.getElementById('location-name'),
        newCategory = document.getElementById('location-category'),
        newDescription = document.getElementById('location-description'),
        newId = newName.value.split(' ', 1) + Math.floor(Math.random() * 1000),
        categoryArray = newCategory.value.split(' ', 2);

    var newRestaurant = {
      category: categoryArray,
      name: newName.value,
      type: "restaurant",
      description: newDescription.value,
      id: newId.toString(),
      image: "",
      reviewer: [],
      review: [],
      score: 0
    };
    var sameRestaurant = newRestaurant;
    reviews.push(newRestaurant);

    var locationNew = document.getElementById('location-div');
    locationNew.classList.add('hidden');

    updatedReviews(sameRestaurant.name);
  }
  else {
    return false;
  }
}
