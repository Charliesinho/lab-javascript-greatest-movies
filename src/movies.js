// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArr = moviesArray
    .map((moviesArray) =>  {
    //if (!newArr.includes(movie.director)) {
        return moviesArray.director
    })
    //});   
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArr = moviesArray.filter(function(moviesArray) {
        if (moviesArray.genre.includes('Drama')) {
            if (moviesArray.director === 'Steven Spielberg') {
                return moviesArray;
            }            
        }
    })
    return newArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {
    
    if (arrMovies.length === 0) {
        return 0;
    }

    let newArr = arrMovies
    .filter((movie) => "score" in movie)        
    .map((movie) => movie.score)
    .reduce((accumulator, currentElement) => accumulator + currentElement, 0)
    newArr = newArr / arrMovies.length;
    newArr = Math.round(newArr * 100) / 100;
    return newArr;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {     
    
    
    let newArr = moviesArray
    .filter((moviesArray) => moviesArray.genre.includes('Drama'));

    if (newArr.length === 0) {
        return 0;
    }
          
    newArr2 = newArr
    .map((moviesArray) => moviesArray.score)
    .reduce((accumulator, currentElement) => accumulator + currentElement, 0)
    newArr2 = newArr2/newArr.length;
    newArr2 = Math.round(newArr2 * 100) / 100;
    return newArr2
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const newArr = moviesArray  
    .map((movie) => movie)  
    .sort((a, b) => { 
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1
      } return 0
        } return a.year - b.year;
    });
    

    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newArr = moviesArray      
    .map((movie) => movie)  
    .sort((a, b) => { 
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1
      } return 0
        } return a.year - b.year;
    })
    .map((movie) => movie.title) 
    
    newArr2 = [];
    
    for (let i = 0; i < newArr.length && i < 20; i++) {
        newArr2.push(newArr[i]);
    }    

    return newArr2;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let newArr = JSON.parse(JSON.stringify(moviesArray)).map((movie) => { 
    const splitTime = movie.duration.split(" ");   
        let durationInMinutes;
        let mins;
        durationInMinutes = parseInt(splitTime[0].split("h")) * 60;
        if (splitTime.length > 1) {
            mins = parseInt(splitTime[1].split("min"));
            durationInMinutes += mins;
        }
        movie.duration = durationInMinutes;
        return movie;
      }) 
return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }    
    
    //let sorted = JSON.parse(JSON.stringify(moviesArray))

    let sorted = JSON.parse(JSON.stringify(moviesArray))   
    .sort((a, b) => { 
        if (a.year === b.year) {
          if (a.title < b.title) {
            return -1
          } return 0
            } return a.year - b.year;
        });

    //console.log(sorted);

    let simpArray = [];
    let finalArr = [];
    
    sorted.forEach(function(movie) {
       const year = movie.year;
       let newList = [];
       let sameYear = sorted
       .map((currentElement) => currentElement)
       .filter((movie) => movie.year === year) 

       simpArray.push([sameYear[0].year, sameYear[0].score])
       //console.log(simpArray)
})

for (let i = 0; i < simpArray.length; i++) {
    if (i < simpArray.length -1) {
    if (simpArray[i][0].indexOf !== simpArray[i][0].lastIndexOf) {
        finalArr.push([simpArray[i][0], (simpArray[i][1] + simpArray[i][1])])
    } else {
        finalArr.push([simpArray[i][0], simpArray[i][1]])
    }
  }
}

return console.log(finalArr)
}

