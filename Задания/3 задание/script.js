"use strict"
var i = +prompt("Сколько фильмов вы смотрели?");

let personalMovieDB = {
        count  : i,
        movies : {},
        actors : {},
        genret : [],
        privat : confirm("Будет ли приватен ли ваш аккаунт?")
};
for (let x; i !== x; x++) {
        let a = prompt(`Введите название одного из просмотренных вами, фильмов, который вы, можете оценить`),
            b = prompt("На сколько вы его оценили бы?");
        
            if( a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else{
            console.log("error")
            x--;
        }
    };
function writeYourGenres(i) {
    for (let x, y; i != x; x++, y++) {
        personalMovieDB.genret = (`Назовите жанры фильма ${personalMovieDB.movies[y-1]}`)
            
    }
};



function showMyDB(x) {
    console.log( x == false ? personalMovieDB : "Отказоно в доступе")
}


    showMyDB(personalMovieDB.privat)