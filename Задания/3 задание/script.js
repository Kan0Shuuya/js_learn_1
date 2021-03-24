"use strict"
var i = +prompt("Сколько фильмов вы смотрели?"),
    x = 0,
    assignedRank;

var personalMovieDB = {
        count  : i,
        movies : {},
        actors : {},
        genret : [],
        privat : confirm("Будет ли приватен ли ваш аккаунт?")
};
for (; i !== x; x++) {
        let a = prompt(`Введите название одного из просмотренных вами, фильмов, который вы, можете оценить`),
            b = prompt("На сколько вы его оценили бы?");
        
            if( a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else{
            console.log("error");
            x--;
        }
}

function showMyDB(xz) {
    console.log(personalMovieDB.privat == false ? personalMovieDB : "eror 404")    
}

function writeYourGenres(){
    for (let countGenres = +prompt("Сколько у вас любимых жанров?"), x = 0; countGenres != x; x++) {
        personalMovieDB.genret[x]=prompt(`Введите жанр под номером ${x+1}`)
        
    }    
}

function checkRank(count){
    if (count < 10){assignedRank = "Просмотрено довольно мало фильмов"}
    if (10 < count < 50){ assignedRank = "Вы классический зритель"}
    if (count > 50){ assignedRank = "Вы киноман"}
    console.log(assignedRank)
}

writeYourGenres();
showMyDB(personalMovieDB)
