var reviews = [
  {
    category: ['food', 'fast'],
    name: "Wendys",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "wendys",
    image: 'images/Wendys-logo.png',
    reviewer: ['Karen', 'Megin', 'Parker', 'Kelly' ],
    review: [{ text: 'Kind of greasy but you know what you are getting', funny: 0}, { text: 'Truly the most savory burger you will ever taste!!!', funny: 0}, { text: 'The Frostys are truly to die for.', funny: 0}, { text: 'Service was terrible!!!!!! THIS FAMILY WILL NOT BE RETURNING!', funny: 0}],
    score: 15
  },
  {
    category: ['food', 'fish'],
    name: "Rubios",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "rubios",
    image: 'images/rubios-logo.png',
    reviewer: ['Bill'],
    review: [{ text: 'Pretty good tacos, the fish was a little dry though.', funny: 0}],
    score: 3
  },
  {
    category: ['food', 'pizza'],
    name: "Flippin Pizza",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "flippin",
    image: 'images/fpizza-logo.jpg',
    reviewer: ['Karly'],
    review: [{ text: 'Great pizza but the service left a bad taste in my mouth (unlike the pizza).', funny: 0}],
    score: 3
  },
  {
    category: ['food', 'fast'],
    name: "Dunkin' Donuts",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "dunkin",
    image: 'images/dunkindonuts-logo.gif',
    reviewer: ['Bill'],
    review: [{ text: 'Not the best but it is great when I am in a hurry on my way in to work.', funny: 0}],
    score: 2
  },
  {
    category: ['food', 'fish'],
    name: "Harbor Grill",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "harbor",
    image: 'images/harborgrill-logo.jpg',
    reviewer: ['Ryan'],
    review: [{ text: 'A bit pricy but the food was absolutely delicious', funny: 0}],
    score: 4
  },
  {
    category: ['food', 'sandwiches'],
    name: "Board 'n Brew'",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "board",
    image: 'images/boardbrew-logo.jpg',
    reviewer: ['Karen'],
    review: [{ text: 'Great beer selection, the sandwiches are just okay but the sweet and sour sauce is to die for!', funny: 0}],
    score:4
  },
  {
    category: ['food', 'mexican'],
    name: "Taco Mesa",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "taco",
    image: 'images/tacomesa-logo.jpg',
    reviewer: ['Erica'],
    review: [{ text: 'Great tacos, the cashier was rude and it was definitely not easy on my wallet', funny: 0}],
    score: 3
  },
  {
    category: ['food', 'sandwiches'],
    name: "Checkers",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "checkers",
    image: 'images/checkers-logo.jpg',
    reviewer: ['Karen'],
    review: [{ text: 'Will be back for more!', funny: 0}],
    score: 5
  },
  {
    category: ['food', 'mexican'],
    name: "La Salsa",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "la",
    image: 'images/lasalsa-logo.png',
    reviewer: ['Alex'],
    review: [{ text: 'Quality salsa, subpar chicken', funny: 0}],
    score: 3
  },
  {
    category: ['food', 'chicken'],
    name: "Wing Stop",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "wing",
    image: 'images/wingstop-logo.png',
    reviewer: ['Jeremy'],
    review: [{ text: 'Great wings!', funny: 0}],
    score: 4
  },
  {
    category: ['food', 'mexican'],
    name: "Chipotle",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "chipotle",
    image: 'images/chipotle-logo.png',
    reviewer: ['Bill'],
    review: [{ text: 'The food was pretty good but they did not have carnitas!', funny: 0}],
    score: 3
  },
  {
    category: ['food', 'chinese'],
    name: "Panda Express",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "panda",
    image: 'images/pandaexpress-logo.svg',
    reviewer: ['Jay'],
    review: [{ text: 'You know what you are getting here.', funny: 0}],
    score: 3
  },
  {
    category: ['food', 'sandwiches'],
    name: "Subway",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "subway",
    image: 'images/subwayreal-logo.gif',
    reviewer: ['Lisa'],
    review: [{ text: 'Fast but flavorless.', funny: 0}],
    score: 2
  },
  {
    category: ['food', 'sandwiches'],
    name: "Panera Bread",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "panera",
    image: 'images/panera-logo.png',
    reviewer: ['Amy'],
    review: [{ text: 'Great soup, good sandwiches, will return!', funny: 0}],
    score: 4
  },
  {
    category: ['food', 'mexican'],
    name: "Oscars",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "oscars",
    image: 'images/oscars-logo.jpeg',
    reviewer: ['Eric'],
    review: [{ text: 'Best fish tacos I have ever had!', funny: 0}],
    score: 5
  },

  //List of places with reviews
];

/*stars need to be updated immediately after review is sent*/

var home = document.getElementById('home');

home.addEventListener('click', removeTop, removeSingle, removeLocation);

//Search variables
var searchButton = document.getElementById('search-button');
var searchItem = document.getElementById('search-reviews');

var body = document.getElementsByTagName('body')[0];

//function to create review boxes
function reviewBox(reviewed) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'top');
  body.appendChild(mainDiv);

  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].name.toLowerCase().indexOf(reviewed.value.toLowerCase()) !== -1) {

      var container = document.createElement('div');
      container.setAttribute('class', 'container-fluid');
      mainDiv.appendChild(container);

      var row = document.createElement('div');
      row.setAttribute('class', 'row');
      container.appendChild(row);

      var panelPrimary = document.createElement('div');
      panelPrimary.setAttribute('class', 'panel panel-primary col-xs-8 col-xs-offset-2');
      row.appendChild(panelPrimary);

      var panelHeading = document.createElement('div');
      panelHeading.setAttribute('class', 'panel-heading well');
      panelPrimary.appendChild(panelHeading);

      var headingText = document.createElement('h4');
      headingText.setAttribute('class', 'text-center');
      panelHeading.appendChild(headingText);

      var headingLink = document.createElement('a');
      headingLink.setAttribute('href', 'http://www.google.com');
      headingLink.setAttribute('class', 'linked');
      headingLink.textContent = reviews[i].name;
      headingText.appendChild(headingLink);

      var panelBody = document.createElement('div');
      panelBody.setAttribute('class', 'panel-body pre-scrollable panel-height');
      panelPrimary.appendChild(panelBody);

      var pictureDiv = document.createElement('div');
      pictureDiv.setAttribute('class', 'col-xs-2');
      panelBody.appendChild(pictureDiv);

      //gives image of searched place
      var image = document.createElement('img');
      image.setAttribute('class', 'img-responsive');
      image.setAttribute('src', reviews[i].image);
      pictureDiv.appendChild(image);

      var paragraphDiv = document.createElement('div');
      paragraphDiv.setAttribute('class', 'col-xs-10');
      panelBody.appendChild(paragraphDiv);

      var reviewParagraph = document.createElement('p');
      reviewParagraph.setAttribute('id', 'review');

      //stars
      var averageScore = Math.floor(reviews[i].score / reviews[i].reviewer.length);
      for (j = 0; j < averageScore; j++) {
        var rating = document.createElement('i');
        rating.setAttribute('class', 'fa fa-star-o');
        rating.setAttribute('aria-hidden', 'true');
        paragraphDiv.appendChild(rating);
      }

      paragraphDiv.appendChild(reviewParagraph);
      reviewParagraph.textContent = reviews[i].description;

      var panelFooter = document.createElement('div');
      panelFooter.setAttribute('class', 'panel-footer well clearfix');
      panelPrimary.appendChild(panelFooter);

      var addReview = document.createElement('button');
      addReview.setAttribute('class', 'btn btn-primary pull-right');
      addReview.setAttribute('id', reviews[i].id)
      addReview.textContent = "View reviews"; //add review button
      panelFooter.appendChild(addReview);
    }
  }
}


//Search button even listener
searchButton.addEventListener('click', function(theEvent) {
  removeTop();
  removeSingle();
  removeLocation();

  //Run search Fx
  reviewBox(searchItem);
});

function removeTop() {
  var element = document.getElementById('top');

  //Check to ensure the existence of div before clearing previous reviews
  if (typeof(element) != 'undefined' && element != null) {
    element.parentNode.removeChild(element);
  }
}

function removeLocation() {
  var element = document.getElementById('location-div');

  //Check to ensure the existence of div before clearing previous reviews
  if (typeof(element) != 'undefined' && element != null) {
    element.parentNode.removeChild(element);
  }
}

function removeSingle() {
  var element = document.getElementById('single');

  //Check to ensure the existence of div before clearing previous reviews
  if (typeof(element) != 'undefined' && element != null) {
    element.parentNode.removeChild(element);
  }
}

body.addEventListener('click', function(theEvent) {
  var readReviews = theEvent.target;
  var textId = theEvent.target.getAttribute('id');
  var recallReview = [];

  //decides where to show review text box
  for (i = 0; i < reviews.length; i++) {
    if (textId === reviews[i].id) {
      recallReview = reviews[i];

      removeTop();
      removeSingle();
    }
  }

  if (textId === recallReview.id) {

    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'top');
    body.appendChild(mainDiv);

    var container = document.createElement('div');
    container.setAttribute('id', 'contained');
    container.setAttribute('class', 'container-fluid');
    mainDiv.appendChild(container);

    var row = document.createElement('div');
    row.setAttribute('id', 'first');
    row.setAttribute('class', 'row');
    container.appendChild(row);

    var panelPrimary = document.createElement('div');
    panelPrimary.setAttribute('class', 'panel panel-primary col-xs-8 col-xs-offset-2');
    row.appendChild(panelPrimary);

    var panelHeading = document.createElement('div');
    panelHeading.setAttribute('class', 'panel-heading well');
    panelPrimary.appendChild(panelHeading);

    var headingText = document.createElement('h4');
    headingText.setAttribute('class', 'text-center');
    panelHeading.appendChild(headingText);

    var headingLink = document.createElement('a');
    headingLink.setAttribute('href', 'http://www.google.com');
    headingLink.setAttribute('class', 'linked');
    headingLink.textContent = recallReview.name;
    headingText.appendChild(headingLink);

    var panelBody = document.createElement('div');
    panelBody.setAttribute('class', 'panel-body pre-scrollable panel-height');
    panelPrimary.appendChild(panelBody);

    var pictureDiv = document.createElement('div');
    pictureDiv.setAttribute('class', 'col-xs-2');
    panelBody.appendChild(pictureDiv);

    //gives image of searched place
    var image = document.createElement('img');
    image.setAttribute('class', 'img-responsive');
    image.setAttribute('src', recallReview.image);
    pictureDiv.appendChild(image);

    //check for multiple reviews/reviewers
    if (recallReview.reviewer.length > 1) {

      //loop for multiple reviews
      for (j = 0; j < recallReview.reviewer.length; j++) {

        var paragraphDiv = document.createElement('div');
        paragraphDiv.setAttribute('class', 'col-xs-10');
        panelBody.appendChild(paragraphDiv);

        var reviewParagraph = document.createElement('p');
        reviewParagraph.setAttribute('id', 'review');
        var userIcon = document.createElement('i');
        userIcon.setAttribute('class', 'fa fa-user');
        userIcon.setAttribute('aria-hidden', 'true');
        paragraphDiv.appendChild(userIcon);
        paragraphDiv.appendChild(reviewParagraph);
        reviewParagraph.textContent = recallReview.reviewer[j] + ": " + recallReview.review[j].text + " ";
      }
    } else if (recallReview.reviewer.length == 1) {

      //if there is only a single review
      var paragraphDiv = document.createElement('div');
      paragraphDiv.setAttribute('class', 'col-xs-10');
      panelBody.appendChild(paragraphDiv);


      var reviewParagraph = document.createElement('p');
      reviewParagraph.setAttribute('id', 'review');
      var userIcon = document.createElement('i');
      userIcon.setAttribute('class', 'fa fa-user');
      userIcon.setAttribute('aria-hidden', 'true');
      paragraphDiv.appendChild(userIcon);
      paragraphDiv.appendChild(reviewParagraph);
      reviewParagraph.textContent = recallReview.reviewer + ": " + recallReview.review[0].text + " ";
    }

    var panelFooter = document.createElement('div');
    panelFooter.setAttribute('class', 'panel-footer well clearfix');
    panelPrimary.appendChild(panelFooter);

    var addReview = document.createElement('button');
    addReview.setAttribute('class', 'btn btn-primary pull-right');
    addReview.setAttribute('id', 'add-review');
    addReview.textContent = "Add review"; //add review button
    panelFooter.appendChild(addReview);

    //hidden
    var rowTwo = document.createElement('div');
    rowTwo.setAttribute('class', 'row hidden');
    container.appendChild(rowTwo)

    var reviewPanel = document.createElement('div');
    reviewPanel.setAttribute('class', 'panel panel-primary col-xs-8 col-xs-offset-2');
    rowTwo.appendChild(reviewPanel)

    var reviewHeading = document.createElement('div');
    reviewHeading.setAttribute('class', 'panel-heading well text-center');
    reviewPanel.appendChild(reviewHeading);

    var topText = document.createElement('h4');
    topText.textContent = "Your review of " + recallReview.name;
    reviewHeading.appendChild(topText);

    var reviewBody = document.createElement('div');
    reviewBody.setAttribute('class', 'panel-body hidden');
    reviewPanel.appendChild(reviewBody);

    var form = document.createElement('form');
    form.setAttribute('role', 'form');
    reviewBody.appendChild(form);

    var reviewForm = document.createElement('div');
    reviewForm.setAttribute('class', 'col-xs-8 col-xs-offset-2 form-horizontal well');
    reviewForm.setAttribute('id', 'review-type');
    form.appendChild(reviewForm);


//stars
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


//
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

    //makes review area visible
    document.getElementById('add-review').addEventListener('click', function(theEvent) {

      var openText = theEvent.target;

      var clear = document.getElementById('first');
      clear.classList.add('hidden');

      var numberedStar = 0;

      write(openText);

      document.getElementById('submit-review').addEventListener('click', function (nextEvent) {

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

        writeReview(recallReview.name, numberedStar);
      });
      //add
      var starScore = document.getElementById('star-menu');

      reviewHeading.addEventListener('mouseover', function(theEvent) {

        var whichStar = theEvent.target.getAttribute('id');
        var theStars = starScore.getElementsByTagName('i');

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

      reviewHeading.addEventListener('click', function(newEvent) {
        numberedStar = newEvent.target.getAttribute('id');
        var hideStar = document.getElementById('star-menu');
        hideStar.classList.add('hidden');
        reviewBody.classList.remove('hidden');
        // var page = document.createElement('p');
        // page.textContent = numberedStar;
        // starScore.appendChild(page);
        console.log(numberedStar);
      });

    });
  }
});

//removes hidden class from review text div
function write(review) {
  var targetFooter = review.parentElement;
  var targetPrimary = targetFooter.parentElement;
  var targetRow = targetPrimary.parentElement;
  var targetHidden = targetRow.nextSibling;
  targetHidden.classList.remove('hidden');
}

//function to write and submit a review
function writeReview(recReview, numStar) {
  var written = document.getElementById('complete-review').value;
  var named = document.getElementById('review-name').value;
  var countScore = parseInt(numStar);
  var reviewObj = { text: written, funny: 0};

  for (i = 0; i < reviews.length; i++) {
    if (reviews[i].name.indexOf(recReview) !== -1) {
      reviews[i].review.push(reviewObj);
      reviews[i].reviewer.push(named);
      console.log(reviews[i].review);
      console.log(reviews[i].reviewer);
      reviews[i].score += countScore;
      console.log(reviews[i].score);
      updatedReviews(reviews[i].name);
      return reviews[i];
    }
  }
}


function updatedReviews(newReview) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'single');
  body.appendChild(mainDiv);

  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].name == newReview) {

      var container = document.createElement('div');
      container.setAttribute('class', 'container-fluid');
      mainDiv.appendChild(container);

      var row = document.createElement('div');
      row.setAttribute('class', 'row');
      container.appendChild(row);

      var panelPrimary = document.createElement('div');
      panelPrimary.setAttribute('class', 'panel panel-primary col-xs-8 col-xs-offset-2');
      row.appendChild(panelPrimary);

      var panelHeading = document.createElement('div');
      panelHeading.setAttribute('class', 'panel-heading well');
      panelPrimary.appendChild(panelHeading);

      var headingText = document.createElement('h4');
      headingText.setAttribute('class', 'text-center');
      panelHeading.appendChild(headingText);

      var headingLink = document.createElement('a');
      headingLink.setAttribute('href', 'http://www.google.com');
      headingLink.setAttribute('class', 'linked');
      headingLink.textContent = reviews[i].name;
      headingText.appendChild(headingLink);

      var panelBody = document.createElement('div');
      panelBody.setAttribute('class', 'panel-body pre-scrollable panel-height');
      panelPrimary.appendChild(panelBody);

      var pictureDiv = document.createElement('div');
      pictureDiv.setAttribute('class', 'col-xs-2');
      panelBody.appendChild(pictureDiv);

      //gives image of searched place
      var image = document.createElement('img');
      image.setAttribute('class', 'img-responsive');
      image.setAttribute('src', reviews[i].image);
      pictureDiv.appendChild(image);

      var paragraphDiv = document.createElement('div');
      paragraphDiv.setAttribute('class', 'col-xs-10');
      panelBody.appendChild(paragraphDiv);

      var reviewParagraph = document.createElement('p');
      reviewParagraph.setAttribute('id', 'review');

      //stars
      var averageScore = Math.floor(reviews[i].score / reviews[i].reviewer.length);
      for (j = 0; j < averageScore; j++) {
        var rating = document.createElement('i');
        rating.setAttribute('class', 'fa fa-star-o');
        rating.setAttribute('aria-hidden', 'true');
        paragraphDiv.appendChild(rating);
      }

      paragraphDiv.appendChild(reviewParagraph);
      reviewParagraph.textContent = reviews[i].description;

      var panelFooter = document.createElement('div');
      panelFooter.setAttribute('class', 'panel-footer well clearfix');
      panelPrimary.appendChild(panelFooter);

      var addReview = document.createElement('button');
      addReview.setAttribute('class', 'btn btn-primary pull-right');
      addReview.setAttribute('id', reviews[i].id)
      addReview.textContent = "View reviews"; //add review button
      panelFooter.appendChild(addReview);

      removeTop();
      removeLocation();
    }
  }
}


//add location

var addLocation = document.getElementById('addLocation');

addLocation.addEventListener('click', function() {
  removeTop();
  removeSingle();
  removeLocation();

  var locationDiv = document.createElement('div');
  locationDiv.setAttribute('class', 'container-fluid');
  locationDiv.setAttribute('id', 'location-div');
  body.appendChild(locationDiv);

  var locationRow = document.createElement('div');
  locationRow.setAttribute('class', 'row');
  locationDiv.appendChild(locationRow);

  var locationPanel = document.createElement('div');
  locationPanel.setAttribute('class', 'panel panel-primary col-xs-8 col-xs-offset-2');
  locationRow.appendChild(locationPanel);

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
  locationCategory.setAttribute('placeholder', 'Category');
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


  //submit new location to array
  //will cause issue if two restaurants with the same first word in their name
  //are added
  var submitLocation = document.getElementById('submit-location');

  submitLocation.addEventListener('click', function() {

    var newName = document.getElementById('location-name');
    var newCategory = document.getElementById('location-category');
    var newDescription = document.getElementById('location-description');
    var newId = newName.value.split(' ', 1);

    var newRestaurant = {
    category: [newCategory.value],
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

  console.log(reviews);

  });
});
//review-tag testing below


var testReview = reviews[0];

var funny = document.createElement('button');
funny.setAttribute('class', 'btn btn-primary');
funny.setAttribute('id', 'funCount');
funny.textContent = "funny: " + testReview.review[1].funny;

var funBox = document.getElementById('fun');
funBox.appendChild(funny);

funny.addEventListener('click', function() {
  testReview.review[1].funny += 1;
  funny.textContent = "funny: " + testReview.review[1].funny;

  console.log(testReview.review[1].funny);
});
