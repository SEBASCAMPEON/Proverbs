"use strict";
let title = document.querySelector('.titulo');
let paragraph = document.querySelector('.parrafo');
let forms = document.getElementById('formul');
let bodyall = document.querySelector('.body');


const colorsbody = [
    "background: #DCE35B; background: -webkit-linear-gradient(to right, #45B649, #DCE35B); background: linear-gradient(to right, #45B649, #DCE35B);",
    "background: #2c3e50; background: -webkit-linear-gradient(to right, #3498db, #2c3e50);background: linear-gradient(to right, #3498db, #2c3e50); ",
    "background: #ee0979; background: -webkit-linear-gradient(to right, #ff6a00, #ee0979); background: linear-gradient(to right, #ff6a00, #ee0979);",
    "background: #b92b27; background: -webkit-linear-gradient(to right, #1565C0, #b92b27); background: linear-gradient(to right, #1565C0, #b92b27);"
];

let colorsparrafo = [
    "color:rgba(212, 22, 22, 0.86);",
    "color:rgb(150 65 150);",
    "color:rgba(173, 49, 78, 1);",
    "color:rgb(35 95 123 / 93%);"
];
let colorstitulo = [
    "color:rgba(121, 85, 72, 1);",
    "color:rgba(197, 118, 0, 0.93);",
    "color:rgba(125, 59, 125, 1);",
    "color:rgba(207, 92, 24, 0.75);"
];
/*set color in items*/
let last = colorsbody.length - 1;
bodyall.setAttribute('style', colorsbody[last]);
title.setAttribute('style', colorstitulo[last]);
paragraph.setAttribute('style', colorsparrafo[last]);

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

function changeTheme() {
    let init = localStorage.getItem("position");
    //console.log(init);
    bodyall.setAttribute('style', colorsbody[init]);
    title.setAttribute('style', colorstitulo[init]);
    paragraph.setAttribute('style', colorsparrafo[init]);
    //console.log(colorsbody[init]);
    //console.log(colorstitulo[init]);
    //console.log(colorsparrafo[init]);
    init++
    if (init >= colorsbody.length) {
        init = 0;
    }
    localStorage.setItem("position", init);
}