function genderClick(input) {
    localStorage.setItem('gender', input);
}

function seasonClick(input) {
    localStorage.setItem('season', input);
}

function figureUpload() {
    const currentGender=localStorage.getItem('gender');
    const currentSeason=localStorage.getItem('season');

    var imageElement = window.document.getElementById("myFigure")
    if(currentGender!=null && currentSeason!=null)
    {
        imageElement.setAttribute("src", "images/figure/"+ currentGender +"-"+ currentSeason + ".png");
    }
}