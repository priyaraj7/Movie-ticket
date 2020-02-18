// construction- class
function MovieTicket(morning, afternoon, evening) {
  this.morning = morning;
  this.afternoon = afternoon;
  this.evening = evening;
}
//
MovieTicket.prototype.getMorningPrice = function() {
  return this.morning;
};
MovieTicket.prototype.getAfternoonPrice = function() {
  return this.afternoon;
};
MovieTicket.prototype.getEveningPrice = function() {
  return this.evening;
};

//

function BoxOffice() {
  this.movies = {};
}

BoxOffice.prototype.addMovie = function(
  name,
  age,
  morningPrice,
  eveningPrice,
  afterNoonPrice
) {
  var movie = this.movies[name] || {};
  movie[age] = new MovieTicket(morningPrice, afterNoonPrice, eveningPrice);
  this.movies[name] = movie;
};

BoxOffice.prototype.getPrice = function(name, age, time) {
  var movie = this.movies[name];
  if (!movie) {
    throw new Error("Movie " + name + " not found");
  }
  var age = movie[age];
  if (!age) {
    throw new Error("Age group" + age + " not found");
  }
  switch (time) {
    case "morning":
      return age.getMorningPrice();
    case "afternoon":
      return age.getAfternoonPrice();
    case "evening":
      return age.getEveningPrice();
    default:
      throw new Error("Time " + time + " not found");
  }
};

// User Interface
var boxOffice = new BoxOffice();

boxOffice.addMovie("frozen", "adult", "$22", "$22", "$25");
boxOffice.addMovie("frozen", "senior", "$20", "$20", "$23");
boxOffice.addMovie("frozen", "child", "$10", "$10", "$15");

boxOffice.addMovie("jumanji", "adult", "$15", "$15", "$20");
boxOffice.addMovie("jumanji", "senior", "$15", "$15", "$20");
boxOffice.addMovie("jumanji", "child", "$5", "$5", "$9");

boxOffice.addMovie("parasite", "adult", "$25", "$25", "$30");
boxOffice.addMovie("parasite", "senior", "$25", "$25", "$30");
boxOffice.addMovie("parasite", "child", "$10", "$10", "$15");

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var movie = $("#movies option:selected").val();
    var time = $("#time option:selected").val();
    var age = $("#age option:selected").val();

    $("#result").append(boxOffice.getPrice(movie, age, time));
  });
});
