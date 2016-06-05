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
  var oldPageIndex = Number(document.getElementsByClassName('active')[0].innerHTML);
  var requestedPageIndex = Number($button.innerHTML);
  //  Update Button Class List
  buttonManager($button);
  //  Update Student Profile Listing
  profileManager(oldPageIndex, requestedPageIndex);
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
function profileManager(oldPageIndex, requestedPageIndex) {
  if (oldPageIndex == requestedPageIndex) {
    taskManager("Initializing List", indexManager(requestedPageIndex));
  } else {
    taskManager("Update List", indexManager(requestedPageIndex), indexManager(oldPageIndex));
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
function taskManager(action, requestedProfileIndices, oldProfileIndices) {
  switch (action) {

    case "Initializing List":
      console.log("Initializing list...");
      for (var index = requestedProfileIndices[0]; index < requestedProfileIndices[1]; index++) {
        var $profile = testArray[index];
        $profile.classList.add("fade-in");
        $studentList.appendChild($profile);
      }
      console.log("List has been successfully initialized!");
      classCleaner("Fade in", requestedProfileIndices);
      break;

    case "Update List":
      classCleaner("Fade in", oldProfileIndices);
      console.log("Removing old Profiles...");
      for (var index = oldProfileIndices[0]; index < oldProfileIndices[1]; index++) {
        var $profile = testArray[index];
        $profile.classList.add("fade-out");
      }
      $studentList.innerHTML = "";
      console.log("Adding requested Profiles...");
      classCleaner("Fade out", oldProfileIndices);

      setTimeout(function(){

        for (var index = requestedProfileIndices[0]; index < requestedProfileIndices[1]; index++) {
          var $profile = testArray[index];
          $profile.classList.add("fade-in");
          $studentList.appendChild($profile);
        }

      },100);
      console.log("List has been successfully updated!")
      classCleaner("Fade in", requestedProfileIndices);
      break;

    default:
      console.log("How may I help you?");
  }
}
//  Class Cleaner
function classCleaner(className, indices) {
  switch(className) {

    case "Fade out":
      for (var index = indices[0]; index < indices[1]; index++) {
        var $profile = testArray[index];
        $profile.classList.remove("fade-out");
      }
      break;

    case "Fade in":
      for (var index = indices[0]; index < indices[1]; index++) {
        var $profile = testArray[index];
        $profile.classList.remove("fade-in");
      }
      break;
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
