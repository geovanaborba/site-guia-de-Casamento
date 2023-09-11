// POST 1
var countLove = 0;
var countLike = 0;

var btnLove = document.getElementById('btnLove');
var btnLike = document.getElementById('btnLike');

var displayLove = document.getElementById('displayLove');
var displayLike = document.getElementById('displayLike');

btnLove.onclick = function () {
    countLove++;
    displayLove.textContent = countLove;
    btnLove.style.background = "#FF6B6B";
    btnLove.style.color = "#FFF";
}

btnLike.onclick = function () {
    countLike++;
    displayLike.textContent = countLike;
    btnLike.style.background = "#6bcfff";
    btnLike.style.color = "#FFF";
}

// POST 2
var countLove2 = 0;
var countLike2 = 0;

var btnLove2 = document.getElementById('btnLove2');
var btnLike2 = document.getElementById('btnLike2');

var displayLove2 = document.getElementById('displayLove2');
var displayLike2 = document.getElementById('displayLike2');

btnLove2.onclick = function () {
    countLove2++;
    displayLove2.textContent = countLove2;
    btnLove2.style.background = "#FF6B6B";
    btnLove2.style.color = "#FFF";
}

btnLike2.onclick = function () {
    countLike2++;
    displayLike2.textContent = countLike2;
    btnLike2.style.background = "#6bcfff";
    btnLike2.style.color = "#FFF";
}

