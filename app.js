function init() {
  $('body').append($('<h1>Todo App</h1>'));
  $('body').append($('<input></input>'));
  $('input').attr('placeholder', 'what do you want to learn?');
  $('body').append($('<ul></ul>'));
  $('body').append($("<img id='my_image'>"));
  // $('ul').append($('<li>Walk Dog</li>'));
  // $('ul').append($('<li>Buy Milk</li>'));
  // $('ul').append($("<li class='completed'>Step on Snails</li>"));

  $('li').append($('<span class="delete">Delete</span>'));
  $('body').append($('<p id="itemsLeft"></p>'));
  $('body').append($('<button id="deleteAll">Delete Completed</button>'));
  $("#my_image").attr("src","haybales.jpg");
}

// ADD NEW ITEM
function addNewitem() {
$('input').keypress(function(event){
  if(event.keyCode == '13') {
    event.preventDefault();
    var newItem = $('input').val();  // store input
    $('input').val('');  // clear input field
    $('ul').append($('<li>' + newItem + '<span class="delete">Delete</span>' +'</li>')); // add a new element to the list
    updateCount();  // update count
  }
});
}


//Clicking li item should put a line through; EVENT DELEGATION
function completed(){
  $('ul').on('click', 'li', function() {
    $(this).toggleClass("completed");
    updateCount()  // update count
  })
}


//Clicking this Delete Button will remove the completed li items
function completedDelete() {
  $("button").on("click", function(){
    $("li.completed").remove();
  });
}

// Update Count
function updateCount() {
  var incompleteItems = $('li:not(.completed)').length; // get incomplete items(without "complete")
  var string = incompleteItems + " item(s) left";
  $('#itemsLeft').text(string);
}


init();
addNewitem();
completed();
completedDelete();
updateCount();
