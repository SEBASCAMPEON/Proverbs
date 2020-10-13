"use strict";
let title = document.querySelector('.titulo');
let paragraph = document.querySelector('.parrafo');
let forms = document.getElementById('formul');
let bodyall = document.querySelector('.body');
let messagecontainer = document.querySelector('.messagecontainer');
let autochangebutton = document.querySelector('#autochangebutton');
let fontName = document.querySelector('.fontName');
/*set initial position on arrays*/
localStorage.setItem("position", 0);
localStorage.setItem("positionfont", 0);
/*automatic change theme button logic*/
let intervalIsActive = false;

const fontsList = [
    "font-family: 'Caveat Brush', cursive;",
    "font-family: 'Roboto Mono', monospace;",
    "font-family: 'Oswald', sans-serif;",
    "font-family: 'Vast Shadow', cursive;",
    "font-family: 'Nunito', sans-serif;"
];

const nameFontList = [
    'Caveat Brush',
    'Roboto Mono',
    'Oswald',
    'Vast Shadow',
    'Nunito'
];
//console.log(fontsList);

const colorsbodyList = [
    "background: #DCE35B; background: -webkit-linear-gradient(to right, #45B649, #DCE35B); background: linear-gradient(to right, #45B649, #DCE35B);",
    "background: #2c3e50; background: -webkit-linear-gradient(to right, #3498db, #2c3e50);background: linear-gradient(to right, #3498db, #2c3e50); ",
    "background: #ee0979; background: -webkit-linear-gradient(to right, #ff6a00, #ee0979); background: linear-gradient(to right, #ff6a00, #ee0979);",
    "background: #000000; background: -webkit-linear-gradient(to right, #434343, #000000); background: linear-gradient(to right, #434343, #000000);",
    "background: #b92b27; background: -webkit-linear-gradient(to right, #1565C0, #b92b27); background: linear-gradient(to right, #1565C0, #b92b27);"
];
let colorsparrafoList = [
    "color:rgba(212, 22, 22, 93%);",
    "color:rgb(150 65 150, 93%);",
    "color:rgba(173, 49, 78, 93%);",
    "color:rgba(255 255 255 / 93%)",
    "color:rgb(35 95 123 / 93%);"
];
let colorstituloList = [
    "color:rgba(121, 85, 72, 0.93);",
    "color:rgba(197, 118, 0, 0.93);",
    "color:rgba(125, 59, 125, 0.93);",
    "color:rgba(255 255 255 / 93%)",
    "color:rgba(207, 92, 24, 0.75);"
];
/*set color and font in items*/
let last = colorsbodyList.length - 1;
let lastfonts = fontsList.length -1;
//console.log(fontsList[last]);
bodyall.setAttribute('style', colorsbodyList[last]);
title.setAttribute('style', colorstituloList[last]);
paragraph.setAttribute('style', colorsparrafoList[last]);
messagecontainer.setAttribute('style', fontsList[lastfonts]);
fontName.innerHTML = "Font: " + nameFontList[lastfonts];

getData();

function takeData(a, b) {
    //console.log(a.value);
    //console.log(b.value);
    let myObject = { 'proverbio': a.value, 'contenido': b.value };
    localStorage.setItem("versiculo", JSON.stringify(myObject));
    getData();
}

function getData() {

    var datos = localStorage.getItem("versiculo");
    let data = JSON.parse(datos);
    //console.log(data.contenido);
    title.innerHTML = '<p> ' + data.proverbio + '</p>';
    paragraph.innerHTML = '<p>' + data.contenido + '</p>';
    hideForm();
}

function showForm() {
    //console.log('hi');
    forms.setAttribute('style', 'display:block');
}

function hideForm() {
    forms.setAttribute('style', 'display:none');
}


function changeFont() {
    let initfont = localStorage.getItem("positionfont");
    messagecontainer.setAttribute('style', fontsList[initfont]);
    fontName.setAttribute('style', fontsList[initfont]);
    fontName.innerHTML =  "Font: " + nameFontList[initfont];
    initfont++;
    if (initfont >= fontsList.length) {
        initfont = 0;
    }
    localStorage.setItem("positionfont", initfont);
}



function changeTheme() {
    let init = localStorage.getItem("position");
    //console.log(init);
    bodyall.setAttribute('style', colorsbodyList[init]);
    title.setAttribute('style', colorstituloList[init]);
    paragraph.setAttribute('style', colorsparrafoList[init]);
    //console.log(colorsbody[init]);
    //console.log(colorstitulo[init]);
    //console.log(colorsparrafo[init]);
    init++
    if (init >= colorsbodyList.length) {
        init = 0;
    }
    localStorage.setItem("position", init);
}

/*automatic change function*/
/*change estate of interval*/
function changeEstateForAutoTheme() {
    if (intervalIsActive == true) {
        intervalIsActive = false;
        autochangebutton.setAttribute("value", "Activate automatic change theme");
        autochangebutton.setAttribute("style", "background-color:#3d7d28;");
        changeThemeAuto();
    } else {
        intervalIsActive = true;
        autochangebutton.setAttribute("value", "Deactivate automatic change theme");
        autochangebutton.setAttribute("style", "background-color:#b51414;");
        changeThemeAuto();
    }
}
/*active or deactive interval according with the state*/
function changeThemeAuto() {
    var teemer = setInterval(function () {
        if (intervalIsActive == true) {
            changeTheme();
        } else {
            clearInterval(teemer);
        }
    }, 5000);
} 