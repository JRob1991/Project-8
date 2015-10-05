(function () {

  //Answer 1

  // Create an array of just the prices
  var prices = items.map( function (item) {
    return item.price;
  });

  // Add all of the prices together
  var sum = prices.reduce( function (prev, next) {
    return prev + next;
  });

  //Divide by total number of items
  var avg = sum /items.length;

  //Conver to 2 decimal placest
  var converted = avg.toFixed(2);

  //Make it a string
  var str = 'The average price is $' + converted;

  //Make it show up on the page
  var answer1 = document.querySelector('#answer1')
  var textNode = document.createTextNode(str);

  answer1.appendChild(textNode);

  // Create a pargraph and add to document(HTML) at given selector
  function addParagraph(selector, text) {
    var container = document.querySelector(selector);
    var p = document.createElement('p');
    var node = document.createTextNode(text);
    p.appendChild(node);
    container.appendChild(p);
  }

  // Create a list & add to document(HTML) at given selector
  function addList(selector, list) {
    var container = document.querySelector(selector);
    var ul = document.createElement('ul');

    list.forEach(function(item){
      var li = document.createElement('li');
      var node = document.createTextNode(item);

      li.appendChild(node);
      ul.appendChild(li);
    }); 

    container.appendChild(ul);
  }

  // Filtered items takes query selector & filter function
  // and adds items to the page
  function listFilteredItems(selector, filterFunc) {
    var avgprice = items
      .filter(filterFunc)
      .map(function(item){
        return item.title;
      });

    avgprice.forEach(function(item){
      addParagraph(selector, item);
    });
  }

// -----------------------------------------------

  // Answer 2
  listFilteredItems('#answer2', function(item){
    return (item.price > 14 && item.price < 18);
  });

// -----------------------------------------------
  // Answer 3
  listFilteredItems('#answer3', function(item){
    return item['currency_code'] ===  'GBP';
  });
// -----------------------------------------------

  // Answer 4
  listFilteredItems('#answer4', function(item){
    return item.materials.indexOf('wood') !== -1;
  });

// --------------------------------------------------------------------------------------------
  // Answer 5
  items
    .filter(function(item){
      return item.materials.length >= 8;
    })
    .forEach(function(item){
      addParagraph('#answer5', item.title + ' has ' + item.materials.length + ' materials:');
      addList('#answer5', item.materials);
    });
 
// --------------------------------------------------------------------------------------------
    // Answer 6 - "who_made": "i_did" were made by their sellers
  var sellerMadeItems = items.filter(function(item){
    return item['who_made'] === 'i_did';
  });
  addParagraph('#answer6', sellerMadeItems.length + ' were made by their sellers');
}());
