var reviews = [
  {name: "Wendys", stars: 3},
  {name: "Rubios", stars: 4}
  /*list of items to sell*/
];

var searchButton = document.getElementById('search-button');
var searchItem = document.getElementById('search-reviews');

//search function
function search(thing) {

  var reviewList = [];
  for (var i = 0; i < items.length; i++) {
    if (reviews[i].name.toLowerCase().indexOf(thing.value.toLowerCase()) !== -1) {
      reviewList += reviews[i].name;
    }
  }
  console.log(reviewList);
}


//search button even listener
searchButton.addEventListener('click', function(theEvent) {
  search(searchItem);
  console.log(items);
})
