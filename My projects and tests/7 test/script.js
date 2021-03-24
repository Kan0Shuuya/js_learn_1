"use strict";
var assignedRank;
let countFilms = 49;

function checkRank(count){
    if (count < 10){assignedRank = "Просмотрено довольно мало фильмов"}
    if (10 < count < 50){ assignedRank = "Вы классический зритель"}
    if (count > 50){ assignedRank = "Вы киноман"}
    console.log(assignedRank)
}

checkRank(countFilms)