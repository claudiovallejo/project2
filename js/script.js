//  Paginate `index.html`
//    1. Search through `.student-list` and capture total amount of children.
//    2. Hide (or remove from DOM?) children[11] -> children[n - 1], where n = total amount of children.
//    3. Add m buttons where m = n/l and l = profiles per page limit.
//    4. Add search input field and search button

//  Add Pagination - - - - - - - - - - - -
var $page = document.getElementsByClassName('page')[0];
var $studentList = document.getElementsByClassName('student-list')[0];
var numberOfProfiles = $studentList.children.length;
var profilePageLimit = 10;
var totalPagesNeeded = Math.ceil(numberOfProfiles / profilePageLimit);

var testArray = [];
for (var index = 0; index < numberOfProfiles; index++) {
  testArray.push($studentList.children[index]);
}

$studentList.innerHTML = "";

// Update Student List - - - - - - - - - - - - -
for (var index = 0; index < profilePageLimit; index++) {
  $studentList.appendChild(testArray[index]);
  console.log("Student Profile #" + index + " has been added to the DOM.");
}

//  Add Pagination - - - - - - - - - - - - -
var $pagination = document.createElement('div');
$pagination.className = "pagination";
var $paginationList = document.createElement('ul');
$pagination.appendChild($paginationList);

for (var index = 1; index <= totalPagesNeeded; index++) {
  var $paginationItem = document.createElement('li');
  var $paginationLink = document.createElement('a');

  $paginationItem.appendChild($paginationLink);

  if (index == 1) {
    $paginationLink.className = 'active';
  }

  $paginationLink.setAttribute('href', '#');
  $paginationLink.innerHTML = index;

  //  Add Event Listener to Link
  $paginationLink.addEventListener('click', function(){
    updateList(this);
  });

  $paginationList.appendChild($paginationItem);
}

$page.appendChild($pagination);

//  Reset Buttons
function removeActiveClass() {
  var $activeButton = document.getElementsByClassName('active')[0];
  $activeButton.classList = "";
}

//  Update List Function
function updateList($button) {
  var pageIndex = Number($button.innerHTML);
  removeActiveClass();
  $button.classList = "active";
  //  THIS IS WHERE I LEFT OFF!
}

//  Add Search Field - - - - - - - - - - - -
var $pageHeader = document.getElementsByClassName('page-header')[0];
//  Create Student Search Div; Set Class to `student-search`
var $studentSearch = document.createElement('div');
$studentSearch.className = 'student-search';
$pageHeader.appendChild($studentSearch);

//  Create Input Field; set placeholder attribute to 'Search for students...'
var $input = document.createElement('input');
$input.setAttribute('placeholder', 'Search for students...');

//  Create pseudo div; Set pseudo attribute; Set style attribute; append pseudo div to input
var $pseudo = document.createElement('div');
$pseudo.setAttribute('pseudo', '-webkit-input-placeholder');
$pseudo.setAttribute('style', 'display: block !important; text-overflow: clip;');
$pseudo.innerHTML = 'Search for students...';
$input.appendChild($pseudo);

//  Create contenteditable div; set contenteditable attribute; append contentEditable div to input
var $contentEditable = document.createElement('div');
$contentEditable.setAttribute('contenteditable', 'plaintext-only');
$input.appendChild($contentEditable);

//  Create Button Element
var $button = document.createElement('button');
$button.innerHTML = 'Search';

//  Append Input Field and Button to Student Search Div
$studentSearch.appendChild($input);
$studentSearch.appendChild($button);
