// //  Store a reference to all Student Profiles
// var $studentProfilesList = document.getElementsByClassName('student-item');
// //  Store a reference to the div that contains the Page Content <div>
// //  Note: I like to name variables that contain an instance of a DOM Element with a '$'
// var $page = document.getElementsByClassName('page')[0];
// //  Store a reference to the <div> that contains the Student Profiles
// var $studentList = document.getElementsByClassName('student-list')[0];
// //  Store the number of Student Profiles per Page
// var profilesPerPage = 10;
// //  Calculates how many pages will be needed by dividing the total number of Student Profiles in  `studentProfilesList` and dividing it by the `profilesPerPage`. I then use Math.ceil() to round up the result.
// var totalNumberOfPages = (Math.ceil($studentProfilesList.length / profilesPerPage));
// //  Create a number of arrays that equals `totalNumberOfPages` where each array will hold the corresponding student profiles.
// for (var index = 1; index <= totalNumberOfPages; index++) {
//   window["page"+(index)] = [];
// }
//
// // function profilePackager(array) {
// //   var counter = 1;
// //   for (var index = 0; index < array.length; index++) {
// //     if (counter < profilesPerPage) {
// //
// //     }
// //   }
// // }
//
// var counter = 1;
// var pageCounter = 1;
// for (var index = 0; index < $studentProfilesList.length; index++) {
//   if (counter <= profilesPerPage) {
//     console.log($studentProfilesList[index]);
//     counter++;
//   } else {
//     counter = 1;
//     console.log("We are on page " + pageCounter);
//     pageCounter++;
//   }
// }

var totalPages = 5;
for (var j = 1; j <= totalPages; j++) {
  eval('var array' + j + '=[]');
}

var counter = 0;
var limit = 2;
var pageIndex = 1;
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var index = 0; index < list.length; index++) {

  if (counter == limit) {
    pageIndex++;
    counter = 0;
  }

  eval('array' + pageIndex + '.push(' + list[index] + ')');

  if (counter < 2) {
    counter++;
  }

}
