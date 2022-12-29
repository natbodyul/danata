/*
var gender;//0 - female , 1 - male
var season;//0 - winter , 1 - summer, 2 - autumn/spring
*/

// function saveGlobalVar(name, value) {
//     localStorage.setItem(name, value); // сохраняем в localStorage значение
// }


function genderClick(input) {
    if (input == 'man') {
        alert("Hello! I am " + input);
    } else if (input == 'woman') {
        alert("Hello! I am " + input);
    }

    localStorage.setItem('gender', input);


    // saveGlobalVar('gender', 0);
    // gender = input;//gender is a global variable
}

function seasonClick(input) {
    if (input == 'winter') {
        alert("Hello! I am " + input);
    } else if (input == 'summer') {
        alert("Hello! I am " + input);
    } else if (input == 'autumn/spring') {
        alert("Hello! I am autumn/spring" + input);
    }
    localStorage.setItem('season', input);
    //saveGlobalVar('season', input);
    // season = input;
    //Calling the function which will let us upload a certain figure
    //figureUpload()
}

function figureUpload() {
    const currentGender = localStorage.getItem('gender');
    const currentSeason = localStorage.getItem('season');

    // alert("Hello! I am gender " + currentGender);
    // alert("Hello! I am season " + currentSeason);


    var imageElement = window.document.getElementById("myFigure")
    if (currentGender != null && currentSeason != null) {
        imageElement.setAttribute("src", "images/" + currentGender + "-" + currentSeason + ".png");
    }
    // var imageElement = document.getElementById('myFigure');
    // if(gender==0 && season==0)
    // {
    //     imageElement.setAttribute('src','images/woman3.PNG');
    // }
}

function detailsUpload(input) {
    const currentGender = localStorage.getItem('gender');
    const currentSeason = localStorage.getItem('season');
    var bodyPart = input;
    alert("Hello! I am gender " + bodyPart);
    var imageElement = window.document.getElementById("myDetailedFigure")
    if (currentGender != null && currentSeason != null && bodyPart != null) {
        imageElement.setAttribute("usemap", "#detailed_part_head");
        imageElement.setAttribute("src", "images/figure-parts/" + currentGender + "-" + currentSeason + "-" + bodyPart + ".png");
        localStorage.setItem('bodyPart', bodyPart);
    }

}

function mouseOnClothing(input) {
    const currentGender = localStorage.getItem('gender');
    const currentSeason = localStorage.getItem('season');
    const currentBodyPart = localStorage.getItem('bodyPart');
    var clothing = input;

    var imageElement = window.document.getElementById("myDetailedFigure")
    imageElement.setAttribute("src", "images/figure-parts/figure-parts-red/" + currentGender + "-" + currentSeason + "-" + currentBodyPart + "-" + clothing + ".png");
}

function mouseOutClothing() {
    const currentGender = localStorage.getItem('gender');
    const currentSeason = localStorage.getItem('season');
    const currentBodyPart = localStorage.getItem('bodyPart');

    var imageElement = window.document.getElementById("myDetailedFigure")
    if (currentGender != null && currentSeason != null && currentBodyPart != null) {
        //TODO: ошибка
        //imageElement.setAttribute("src", "images/figure-parts/"+ currentGender +"-"+ currentSeason +"-"+currentBodyPart+ ".png");
    }
}


function itemSelected(input) {

    const currentGender = localStorage.getItem('gender');
    const currentSeason = localStorage.getItem('season');
    const currentBodyPart = localStorage.getItem('bodyPart');
    var clothing = input;
    var imageElement = window.document.getElementById("myDetailedFigure");

    alert("Hello! I am clicked and " + currentGender + "-" + currentSeason + "-" + currentBodyPart + "-" + clothing);
    if (currentGender != null && currentSeason != null && currentBodyPart != null) {


        //ОЧЕНЬ ВАЖНО УКАЗАТЬ NULL , а не любой другой символ
        imageElement.setAttribute("usemap", "null");
        imageElement.setAttribute("src", "images/figure-parts/figure-parts-red/" + currentGender + "-" + currentSeason + "-" + currentBodyPart + "-" + clothing + ".png");
    }


}
