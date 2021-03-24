"use strict"
var x = 0,
    assignedRank;

var personalMovieDB = {
        countFilms  : +prompt("Сколько фильмов вы смотрели?"),
        countRatedFilms : +prompt("Сколько фильмов, вы можете оценить?"),
        movies : {},
        actors : {},
        genret : [],
        privat : confirm("Будет ли приватен ли ваш аккаунт?"),
        countGenres : +prompt("Сколько у вас любимых жанров?"),
        assignedRank: "",

        start  : function() {
            for(; personalMovieDB.countRatedFilms !== x; x++){
                    let a = prompt(`Введите название одного из просмотренных вами, фильмов, который вы, можете оценить`),
                        b = prompt("На сколько вы его оценили бы?");
                    
                    if( a != null && b != null && a != '' && b != '' && a.length <50){
                        personalMovieDB.movies[a] = b;
                    } else{
                        x--;
                    }
            }
        },
        
        ReturnDB: function () {
            return(personalMovieDB.privat == false ? personalMovieDB : "eror 404")    
        },
        
        writeYourGenres : function (){
            for (let x = 0, i = 0; personalMovieDB.countGenres != x; x++) {    
                i = prompt(`Введите жанр под номером ${x+1}`)
                if (i == null || "" || NaN){
                    --x;
                }
                else{personalMovieDB.genret[x]=i}
            }
        },
        returnYourGenres: function(){
            let i;
            for(const temp of personalMovieDB.genret){
                i++;
                console.log(`Любимый жанр #${temp} - это ${i}`)
            }
        },
        checkRank : function(counts){
            if (counts < 10){assignedRank = "Просмотрено довольно мало фильмов"}
            if (10 < counts < 50){assignedRank = "Вы классический зритель"}
            if (counts > 50){assignedRank = "Вы киноман"}
            return(assignedRank)
        },

        reverseVisibleMyDB : function() {
                personalMovieDB.privat = !personalMovieDB.privat
        }
};

personalMovieDB.start()
console.log(personalMovieDB.ReturnDB())
personalMovieDB.writeYourGenres()
console.log(personalMovieDB.checkRank(personalMovieDB.countFilms))
console.log(personalMovieDB.returnYourGenres())