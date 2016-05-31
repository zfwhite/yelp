var reviews = [
  {
    category: ['food', 'fast'],
    name: "Wendys",
    type: "restaurant",
    image: 'images/Wendys-logo.png',
    reviewer: ['Karen', 'Megin', 'Parker', 'Kelly'],
    review: ['Kind of greasy but you know what you are getting', 'Truly the most savory burger you will ever taste!!!', 'The Frostys are truly to die for.', 'Service was terrible!!!!!! THIS FAMILY WILL NOT BE RETURNING!'],
    score: 3
  },
  {
    category: ['food', 'fish'],
    name: "Rubios",
    type: "restaurant",
    image: 'images/rubios-logo.png',
    reviewer: ['Bill'],
    review: ['Pretty good tacos, the fish was a little dry though.'],
    score: 3
  },
  {
    category: ['food', 'pizza'],
    name: "Flippin Pizza",
    type: "restaurant",
    image: 'images/fpizza-logo.jpg',
    reviewer: ['Karly'],
    review: ['Great pizza but the service left a bad taste in my mouth (unlike the pizza).'],
    score: 3
  },
  {
    category: ['food', 'fast'],
    name: "Dunkin' Donuts",
    type: "restaurant",
    image: 'images/dunkindonuts-logo.gif',
    reviewer: ['Bill'],
    review: ['Not the best but it is great when I am in a hurry on my way in to work.'],
    score: 3
  },
  {
    category: ['food', 'fish'],
    name: "Harbor Grill",
    type: "restaurant",
    image: 'images/harborgrill-logo.jpg',
    reviewer: ['Ryan'],
    review: ['A bit pricy but the food was absolutely delicious'],
    score: 4
  },
  {
    category: ['food', 'sandwiches'],
    name: "Board 'n Brew'",
    type: "restaurant",
    image: 'images/boardbrew-logo.jpg',
    reviewer: ['Karen'],
    review: ['Great beer selection, the sandwiches are just okay but the sweet and sour sauce is to die for!'],
    score:4
  },
  {
    category: ['food', 'mexican'],
    name: "Taco Mesa",
    type: "restaurant",
    image: 'images/tacomesa-logo.jpg',
    reviewer: ['Erica'],
    review: ['Great tacos, the cashier was rude and it was definitely not easy on my wallet'],
    score: 3
  },
  {
    category: ['food', 'sandwiches'],
    name: "Checkers",
    type: "restaurant",
    image: 'images/checkers-logo.jpg',
    reviewer: ['Karen'],
    review: ['Will be back for more!'],
    score: 5
  },
  {
    category: ['food', 'mexican'],
    name: "La Salsa",
    type: "restaurant",
    image: 'images/lasalsa-logo.png',
    reviewer: ['Alex'],
    review: ['Quality salsa, subpar chicken'],
    score: 3
  },
  {
    category: ['food', 'chicken'],
    name: "Wing Stop",
    type: "restaurant",
    image: 'images/wingstop-logo.png',
    reviewer: ['Jeremy'],
    review: ['Great wings!'],
    score: 4
  },
  {
    category: ['food', 'mexican'],
    name: "Chipotle",
    type: "restaurant",
    image: 'images/chipotle-logo.png',
    reviewer: ['Bill'],
    review: ['The food was pretty good but they did not have carnitas!'],
    score: 3
  },
  {
    category: ['food', 'chinese'],
    name: "Panda Express",
    type: "restaurant",
    image: 'images/pandaexpress-logo.svg',
    reviewer: ['Jay'],
    review: ['You know what you are getting here.'],
    score: 3
  },
  {
    category: ['food', 'sandwiches'],
    name: "Subway",
    type: "restaurant",
    image: 'images/subwayreal-logo.gif',
    reviewer: ['Lisa'],
    review: ['Fast but flavorless.'],
    score: 2
  },
  {
    category: ['food', 'sandwiches'],
    name: "Panera Bread",
    type: "restaurant",
    image: 'images/panera-logo.png',
    reviewer: ['Amy'],
    review: ['Great soup, good sandwiches, will return!'],
    score: 4
  },
  {
    category: ['food', 'mexican'],
    name: "Oscars",
    type: "restaurant",
    image: 'images/oscars-logo.jpeg',
    reviewer: ['Eric'],
    review: ['Best fish tacos I have ever had!'],
    score: 5
  },

  //List of places with reviews
];

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
      headingText.textContent = reviews[i].name;
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
      image.setAttribute('src', reviews[i].image);
      pictureDiv.appendChild(image);

      if (reviews[i].reviewer.length > 1) {

        for (j = 0; j < reviews[i].reviewer.length; j++) {

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
          reviewParagraph.textContent = reviews[i].reviewer[j] + ": " + reviews[i].review[j] + " ";
        }
      } else {
        var paragraphDiv = document.createElement('div');
        paragraphDiv.setAttribute('class', 'col-xs-10');
        panelBody.appendChild(paragraphDiv);

        //replace below for reviews
        var reviewParagraph = document.createElement('p');
        reviewParagraph.setAttribute('id', 'review');
        var userIcon = document.createElement('i');
        userIcon.setAttribute('class', 'fa fa-user');
        userIcon.setAttribute('aria-hidden', 'true');
        paragraphDiv.appendChild(userIcon);
        paragraphDiv.appendChild(reviewParagraph);
        reviewParagraph.textContent = reviews[i].reviewer + ": " + reviews[i].review + " ";
      }

/*
      var paragraphDiv = document.createElement('div');
      paragraphDiv.setAttribute('class', 'col-xs-10');
      panelBody.appendChild(paragraphDiv);

      //replace below for reviews
      var reviewParagraph = document.createElement('p');
      reviewParagraph.setAttribute('id', 'review');
      var userIcon = document.createElement('i');
      userIcon.setAttribute('class', 'fa fa-user');
      userIcon.setAttribute('aria-hidden', 'true');
      paragraphDiv.appendChild(userIcon);
      paragraphDiv.appendChild(reviewParagraph);
      reviewParagraph.textContent = reviews[i].reviewer + ": " + reviews[i].review + " ";*/

      var panelFooter = document.createElement('div');
      panelFooter.setAttribute('class', 'panel-footer well clearfix');
      panelPrimary.appendChild(panelFooter);

      var addReview = document.createElement('button');
      addReview.setAttribute('class', 'btn btn-primary pull-right');
      addReview.textContent = "Write a review"; //add review button
      panelFooter.appendChild(addReview);
    }
  }
}

//Search button even listener
searchButton.addEventListener('click', function(theEvent) {
  var element = document.getElementById('top');

  //Check to ensure the existence of div before clearing previous reviews
  if (typeof(element) != 'undefined' && element != null) {
    element.parentNode.removeChild(element);
  }

  //Run search Fx
  reviewBox(searchItem);
});
