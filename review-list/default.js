var reviews = [
  {
    category: ['food', 'fast'],
    name: "Wendys",
    type: "restaurant",
    image: 'images/Wendys-logo.png',
    reviewer: 'Karen',
    review: 'Kind of greasy but you know what you are getting',
    score: 2
  },
  {
    category: ['food', 'fish'],
    name: "Rubios",
    type: "restaurant",
    reviewer: 'Bill',
    review: 'Pretty good tacos, the fish was a little dry though.',
    score: 3
  },
  {
    category: ['food', 'pizza'],
    name: "Flippin Pizza",
    type: "restaurant",
    reviewer: 'Karly',
    review: 'Great pizza but the service left a bad taste in my mouth (unlike the pizza).',
    score: 3
  },
  {
    category: ['food', 'fast'],
    name: "Dunkin' Donuts",
    type: "restaurant",
    reviewer: 'Bill',
    review: 'Not the best but it is great when I am in a hurry on my way in to work.',
    score: 3
  },
  {
    category: ['food', 'fish'],
    name: "Harbor Grill",
    type: "restaurant",
    reviewer: 'Ryan',
    review: 'A bit pricy but the food was absolutely delicious',
    score: 4
  },
  {
    category: ['food', 'sandwiches'],
    name: "Board 'n Brew'",
    type: "restaurant",
    reviewer: 'Karen',
    review: 'Great beer selection, the sandwiches are just okay but the sweet and sour sauce is to die for!',
    score:4
  },
  {
    category: ['food', 'mexican'],
    name: "Taco Mesa",
    type: "restaurant",
    reviewer: 'Erica',
    review: 'Great tacos, the cashier was rude and it was definitely not easy on my wallet',
    score: 3
  },
  {
    category: ['food', 'sandwiches'],
    name: "Checkers",
    type: "restaurant",
    reviewer: 'Karen',
    review: 'Will be back for more!',
    score: 5
  },
  {
    category: ['food', 'mexican'],
    name: "La Salsa",
    type: "restaurant",
    reviewer: 'Alex',
    review: 'Quality salsa, subpar chicken',
    score: 3
  },
  {
    category: ['food', 'chicken'],
    name: "Wing Stop",
    type: "restaurant",
    reviewer: 'Jeremy',
    review: 'Great wings!',
    score: 4
  },
  {
    category: ['food', 'mexican'],
    name: "Chipotle",
    type: "restaurant",
    reviewer: 'Bill',
    review: 'The food was pretty good but they did not have carnitas!',
    score: 3
  },
  {
    category: ['food', 'chinese'],
    name: "Panda Express",
    type: "restaurant",
    reviewer: 'Jay',
    review: 'You know what you are getting here.',
    score: 3
  },
  {
    category: ['food', 'sandwiches'],
    name: "Subway",
    type: "restaurant",
    reviewer: 'Lisa',
    review: 'Fast but flavorless.',
    score: 2
  },
  {
    category: ['food', 'sandwiches'],
    name: "Panera Bread",
    type: "restaurant",
    reviewer: 'Amy',
    review: 'Great soup, good sandwiches, will return!',
    score: 4
  },
  {
    category: ['food', 'mexican'],
    name: "Oscars",
    type: "restaurant",
    reviewer: 'Eric',
    review: 'Best fish tacos I have ever had!',
    score: 5
  },

  //List of places with reviews
];

//Search variables
var searchButton = document.getElementById('search-button');
var searchItem = document.getElementById('search-reviews');

var body = document.getElementsByTagName('body')[0];

//Search function
/*
function search(thing) {
  var topDiv = document.createElement('div');
  topDiv.setAttribute('id', 'top');
  body.appendChild(topDiv);


//append loop to use split and || to reference reviews categories in search
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].name.toLowerCase().indexOf(thing.value.toLowerCase()) !== -1) {
      var paragraph = document.createElement('p');
      var div = document.createElement('div');
      var header = document.createElement('h4');

      div.setAttribute('class', 'myclass col-xs-8 col-xs-offset-2 text-center');
      paragraph.setAttribute('class', 'reset');

      header.textContent = reviews[i].name;
      paragraph.textContent = reviews[i].reviewer + ": " + reviews[i].review + " ";
      topDiv.appendChild(div);
      div.appendChild(header);
      div.appendChild(paragraph);
    }
  }
}*/

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
      panelHeading.setAttribute('class', 'panel-heading');
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

      var paragraphDiv = document.createElement('div');
      paragraphDiv.setAttribute('class', 'col-xs-10');
      panelBody.appendChild(paragraphDiv);

      var reviewParagraph = document.createElement('p');
      reviewParagraph.textContent = reviews[i].reviewer + ": " + reviews[i].review + " ";
      paragraphDiv.appendChild(reviewParagraph);
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
