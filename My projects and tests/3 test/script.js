"use strict"
let personalMovieDB = {
    count  : prompt("Сколько фильмов вы уже посмотрели?",9),
    movies : {},
    actors : {},
    genret : [],
    privat : confirm("Будет ли приватен ли ваш аккаунт?")
};
let a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt("На сколько оцените его?"),
    c = prompt("Один из последних просмотренных фильмов?"),
    d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;




function showMyDB(x) {
    alert( x == false ? personalMovieDB : "Отказоно в доступе")
}

showMyDB(personalMovieDB.privat)
