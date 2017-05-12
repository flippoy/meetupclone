var users = []
var meetUps = []
var userId = 0;
var User = function(id, firstName, lastName, dob, address, city, state, zip, summary, image) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.jobs = [];
  this.education = [];
  this.skills = [];
  this.interests = [];
  this.summary = summary;
  this.image = image; // for images go create a photobucket or imgr account and upload photos there and use the HTTP string they provide
}
var meetUpId = 0;
var MeetUp = function(id, userId, title, description) {
  this.id = id;
  this.organizer = userId;
  this.title = title;
  this.description = description;
  this.attending = []
}
var jobId = 0;
var Job = function(id, title, startDate, endDate, description) {
  this.id = id;
  this.title = title;
  this.startDate = startDate;
  this.endDate = endDate || Date.now()
  this.description = description;
}
var educationId = 0;
var Education = function(id, school, degree, startDate, endDate, description) {
  this.id = id;
  this.school = school;
  this.degree = degree;
  this.startDate = startDate;
  this.endDate = endDate || Date.now()
  this.description = description;
}
var newUser = new User(userId++, "Billy", "Pruden")
users.push(newUser)
newUser.skills.push("JavaScript", "AngularJS", "HTML")
newUser.jobs.push(new Job(jobId++, "Assistant Instructor", new Date("9/1/2016"), Date.now(), "I love it!"))
newUser.education.push(new Education(educationId++, "Vanugard University", "religion", new Date("9/1/2016"), new Date("9/10/2016"), "I hate it!"))
var newMeetUp = new MeetUp(meetUpId++, 0, "JavaScript 101", "Its going to be great!")
meetUps.push(newMeetUp)
newMeetUp.attending.push(8) // these are the user ids of the ppl atttending
newMeetUp.attending.push(2)
newMeetUp.attending.push(4)
console.log(newMeetUp.attending.length);
