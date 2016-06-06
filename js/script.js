//  Add Pagination - - - - - - - - - - - -
//  Capture <div> that contains `index.html` content
var $page = document.getElementsByClassName('page')[0];
//  Capture <div> that contains the Student Profiles
var $studentList = document.getElementsByClassName('student-list')[0];
//  Capture total number of Student Profiles initially present in `index.html`
var numberOfProfiles = $studentList.children.length;
//  Define Student Profile display limit
var profilePageLimit = 10;
//  Calculate the Total Page Buttons needed based on Number of Profiles and Total Pages Needed
var totalPagesNeeded = Math.ceil(numberOfProfiles / profilePageLimit);
//  Create and empty Array to store a reference to every Student Profile in `index.html`
var testArray = [];
//  Loop through every Student Profile in the Student List and add it to the Array declared on line 15
for (var index = 0; index < numberOfProfiles; index++) {
  testArray.push($studentList.children[index]);
}

//  Create Pagination Elements - - - - - - - - - - - - -
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
  // $paginationLink.setAttribute('href', '#');
  $paginationLink.innerHTML = index;
  //  Add Event Listener to Link
  $paginationLink.addEventListener('click', function(){
    listManager(this);
  });
  $paginationList.appendChild($paginationItem);
}
$page.appendChild($pagination);

//  Functions - - - - - - - - - - - -
//  Student Profile List Manager Function
function listManager($button) {
  //  Capture Old and Requested Page Indices
  var currentPageIndex = Number(document.getElementsByClassName('active')[0].innerHTML);
  //  Capture $studenList length
  var currentListLength = $studentList.children.length;
  //  Capture Requested Page Index
  var requestedPageIndex = Number($button.innerHTML);
  //  Update Button Class List
  buttonManager($button);
  //  Update Student Profile Listing
  profileManager(currentListLength, currentPageIndex, requestedPageIndex);
}
//  Button Class Manager Function
function buttonManager($pressedButton) {
  //  Capture Active button; Remove '.active' class
  var $activeButton = document.getElementsByClassName('active')[0];
  $activeButton.classList = "";
  //  Add '.active' to Pressed Button
  $pressedButton.classList = "active";
}
//  Student Profile Manager Function
function profileManager(currentListLength, currentPageIndex, requestedPageIndex) {
  if (currentPageIndex == requestedPageIndex) {
    taskManager("Initialize List", indexManager(requestedPageIndex));
  } else {
    taskManager("Update List", indexManager(requestedPageIndex), currentListLength);
  }
}
//  Index Manager Function
function indexManager(pageIndex) {
  var profileIndexA = ((pageIndex - 1) * profilePageLimit);
  var profileIndexB = pageIndex * profilePageLimit;
  if (testArray.length < profileIndexB) {
    profileIndexB = testArray.length;
  }
  return [profileIndexA, profileIndexB];
}
//  Task Manager Function
function taskManager(action, requestedProfileIndices, currentListLength) {
  switch (action) {
    //  Initializing List on initial Document Load
    case "Initialize List":
      console.log("Initializing list...");
      for (var index = requestedProfileIndices[0]; index < requestedProfileIndices[1]; index++) {
        var $profile = testArray[index];
        $profile.classList.add("fadeIn");
        $studentList.appendChild($profile);
      }
      console.log("List has been successfully initialized!");
      break;
    //  Updating List Based on Active Page + Requested Page
    case "Update List":
      console.log("Removing old Profiles...");
      for (var index = 0; index < currentListLength; index++) {
        var $profile = $studentList.childNodes[index];
        $profile.classList.remove('fadeIn');
        $profile.classList.add("fadeOut");
      }
      setTimeout(function(){
        $studentList.innerHTML = "";
        for (var index = requestedProfileIndices[0]; index < requestedProfileIndices[1]; index++) {
          var $profile = testArray[index];
          $profile.classList.remove('fadeOut');
          $profile.classList.add("fadeIn");
          $studentList.appendChild($profile);
        }
      },1000);
      break;
    //  Default Switch Case
    default:
      console.log("How may I help you?");
  }
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

//  Initialization - - - - - - - - - - - -
//  Clear Student List
$studentList.innerHTML = "";
//  Initial Student Profile Display
var $defaultList = document.getElementsByClassName('active')[0];
listManager($defaultList);
