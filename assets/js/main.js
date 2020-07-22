"use strict";
let title = document.querySelector('.titulo');
let paragraph = document.querySelector('.parrafo');
let forms = document.getElementById('formul');
//console.log(forms);

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