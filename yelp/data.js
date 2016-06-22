var reviews = [
  {
    category: ['food', 'fast'],
    name: "Wendys",
    type: "restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "wendys",
    image: 'images/Wendys-logo.png',
    reviewer: ['Karen', 'Megin', 'Parker', 'Kelly' ],
    review: [{ text: 'Kind of greasy but you know what you are getting', funny: 0, useful: 0}, { text: 'Truly the most savory burger you will ever taste!!!', funny: 0, useful: 0}, { text: 'The Frostys are truly to die for.', funny: 0, useful: 0}, { text: 'Service was terrible!!!!!! THIS FAMILY WILL NOT BE RETURNING!', funny: 0, useful: 0}],
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
    review: [{ text: 'Pretty good tacos, the fish was a little dry though.', funny: 0, useful: 0}],
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
    review: [{ text: 'Great pizza but the service left a bad taste in my mouth (unlike the pizza).', funny: 0, useful: 0}],
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
    review: [{ text: 'Not the best but it is great when I am in a hurry on my way in to work.', funny: 0, useful: 0}],
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
    review: [{ text: 'A bit pricy but the food was absolutely delicious', funny: 0, useful: 0}],
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
    review: [{ text: 'Great beer selection, the sandwiches are just okay but the sweet and sour sauce is to die for!', funny: 0, useful: 0}],
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
    review: [{ text: 'Great tacos, the cashier was rude and it was definitely not easy on my wallet', funny: 0, useful: 0}],
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
    review: [{ text: 'Will be back for more!', funny: 0, useful: 0}],
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
    review: [{ text: 'Quality salsa, subpar chicken', funny: 0, useful: 0}],
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
    review: [{ text: 'Great wings!', funny: 0, useful: 0}],
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
    review: [{ text: 'The food was pretty good but they did not have carnitas!', funny: 0, useful: 0}],
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
    review: [{ text: 'You know what you are getting here.', funny: 0, useful: 0}],
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
    review: [{ text: 'Fast but flavorless.', funny: 0, useful: 0}],
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
    review: [{ text: 'Great soup, good sandwiches, will return!', funny: 0, useful: 0}],
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
    review: [{ text: 'Best fish tacos I have ever had!', funny: 0, useful: 0}],
    score: 5
  },

  //List of places with reviews
];

module.exports = reviews;
