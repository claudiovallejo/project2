//  Store a reference to all Student Profiles
var studentProfilesList = document.getElementsByClassName('student-item');
console.log(studentProfilesList.length);

var studentProfilePageLimit = 10;
var test2 = (Math.round(studentProfilesList.length / studentProfilePageLimit) + 1 ) * studentProfilePageLimit;

console.log(test2);
for (var index = 0; index <= test2; index++) {
  window["page"+(index + 1)] = [];
}
