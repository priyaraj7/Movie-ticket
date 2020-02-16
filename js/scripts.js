// construction- class
function MovieTicket(morning, afternoon, evening) {
this.morning = morning;
this.afternoon = afternoon;
this.evening = evening;
}
//
MovieTicket.prototype.getMorningPrice = function(){
    return this.morning;
}
MovieTicket.prototype.getAfternoonPrice = function(){
    return this.afternoon;
}
MovieTicket.prototype.getEveningPrice = function(){
    return this.evening;
}

//

function BoxOffice() {
    this.movies = {};
}

BoxOffice.prototype.addMovie = function(name, age, morningPrice, eveningPrice, afterNoonPrice) {
    var movie = this.movies[name] || {};
    movie[age] = new MovieTicket(morningPrice, afterNoonPrice, eveningPrice);
    this.movies[name] = movie;
}


BoxOffice.prototype.getPrice = function(name, age, time) {
    var movie = this.movies[name];
    if(!movie) {
        throw new Error('Movie ' + name + ' not found');
    }
    var age = movie[age];
    if(!age) {
        throw new Error('Age group' + age + ' not found');
    }
    switch(time) {
        case 'morning':
            return age.getMorningPrice();
        case 'afternoon':
            return age.getAfternoonPrice();
        case 'evening': 
            return age.getEveningPrice();
        default:
            throw new Error('Time ' + time + 'not found');
    }
}




