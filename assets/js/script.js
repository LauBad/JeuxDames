var board = document.querySelector('#board');
var numbers = ['one','two','three','four','five','six','seven','eight'];
var letters = ['a','b','c','d','e','f','g','h'];
var colors = ['red2','black2'];
var activePiece = "";
var activePieceList = "";
var activeColor = "";
var restart = true;
damier();
addListeners();
var currentColor = 'red2';

var canMove = false;

addActiveGroup('black2');

function addActiveGroup(color){
	var elements = document.querySelectorAll('.'+color+'.piece');
	for(var i = 0; i < elements.length; i++){
		elements[i].classList += ' active_group';
	}
}


function removeActiveGroup(color){
	var elements = document.querySelectorAll('.'+color+'.piece');
	for(var i = 0; i < elements.length; i++){
		elements[i].classList.remove('active_group');
	}
}


// document.getElementById("reprendre").onclick = function() {
// 	document.getElementById("slide-out").style.display = "none";
// }

function toggleSidebar(){
	document.getElementById("slide-out").classList.toggle("is-active");
}

function addListeners(){

	const burger = document.getElementById("menuh");
	const close = document.getElementById("close");
	const reprendre = document.getElementById("reprendre");
	const quitter = document.getElementById("quitter");
	close.onclick = toggleSidebar;
	burger.onclick = toggleSidebar;
	reprendre.onclick = toggleSidebar;
	quitter.onclick = toggleSidebar;

	for(var i = 0; i < document.querySelectorAll('.square').length; i++){
    (function () {
      var square = document.querySelectorAll('.square')[i];
			if(square.classList[2] == 'black2'){
				square.addEventListener("click", function(){
					var squareList = square.parentElement.classList + " " + square.classList;
					var squareRow = squareList.split(" ")[1];
					var squareColumn = squareList.split(" ")[3];

					if(this.children.length > 0 && findColor(this) == currentColor && (activePiece == '' || canMove == false)){
				    setActivePiece(square);
				  }
				  else{
				  	var activePieceRow = activePieceList.split(" ")[1];
				  	var activePieceColumn = activePieceList.split(" ")[3];
				  	if(isValidMove(square)){
				  		movePiece(activePiece, square, activePieceRow, activePieceColumn, squareRow, squareColumn);

				  	}
				  }
				});
			}
    }());
	}
}

function movePiece(old, n, activePieceRow, activePieceColumn, squareRow, squareColumn){
	n.innerHTML = old.innerHTML;
	old.innerHTML = "";
	if(Math.abs(numbers.indexOf(activePieceRow) - numbers.indexOf(squareRow)) == 2 &&
		 Math.abs(letters.indexOf(activePieceColumn) - letters.indexOf(squareColumn)) == 2){

	}
	if(canMove == false){
		resetActivePiece();
	}
	else{
		setActivePiece(n);
	}
}

function findColor(s){

	return s.children[0].classList[0];

}

function isValidMove(square, active = activePiece){
	var activePieceRow = findRow(active);
	var squareRow = findRow(square);
	var activePieceColumn = findColumn(active);
	var squareColumn = findColumn(square);
	var oppositeColor = '';
	activeColor == 'black2' ? oppositeColor = 'red2' : oppositeColor = 'black2';

	if(activeColor == 'black2'){
		var rowDifference = -1;

	}
	else{

		rowDifference = 1;

	}
	if(canMove == false && testOne(square, rowDifference)){

		canMove = false;
		return true;
	}

	return false;
}

function testOne(square, rowDifference){
	if((numbers.indexOf(findRow(activePiece)) - numbers.indexOf(findRow(square)) == rowDifference && Math.abs(numbers.indexOf(findRow(activePiece)) - numbers.indexOf(findRow(square))) == 1) &&
		 Math.abs(letters.indexOf(findColumn(activePiece)) - letters.indexOf(findColumn(square))) == 1 && square.children.length == 0 &&
		 canMove == false){
		return true;

	}
}

function findRow(s){
	if(s){
		return s.parentElement.classList[1];
	}
}

function findColumn(s){
	if(s){
		return s.classList[1];
	}
}

function findSquare(row, column){
	return document.querySelector('.row.' + row + ' div.square.' + column);
}


function reload() {
    location.reload();
 //   alert("Nouvelle Partie !");
}

function setActivePiece(s){
	if(s.children.length > 0){
		if(activePiece && activePiece.children[0]){
			activePiece.children[0].classList.remove('active');
		}
		activePiece = s;
		activePieceList = activePiece.parentElement.classList + " " + activePiece.classList;
		activeColor = s.querySelector('div').classList[0];
		activePiece.children[0].classList = activePiece.children[0].classList + " active";
	}
}

function resetActivePiece(){
	document.querySelector('.active').classList.remove('active');
	activePiece = "";
	activePieceList = "";
	activeColor = "";
	changeColor();
}

function changeColor(){
	removeActiveGroup(currentColor);
	currentColor == 'black2' ? currentColor = 'red2' : currentColor = 'black2';
	addActiveGroup(currentColor);
}

function damier(){
	addRows();
	addColumns();
	addPions();

}

function addRows(){
	for(var i = 0; i < 8; i++){
		board.innerHTML += "<div class='row "+numbers[i]+"'></div>";
	}
}

function addColumns(){
	for(var i = 0; i < 8; i++){
		for(var j = 0; j < 8; j++){
			var color = "black2";
			if(i%2 == 0 && j%2 == 0 || i%2 == 1 && j%2 == 1){
				color = 'red2';
			}
			document.querySelector('.row.'+numbers[i]+'').innerHTML += '<div class="square '+letters[j]+' '+color+'"></div>';
		}
	}
}

function addPions(){
	for(var i = 0; i < document.querySelectorAll('.square').length; i++){
		var square = document.querySelectorAll('.square')[i];
		var color = 'black2';
		if(numbers.indexOf(square.parentElement.classList[1]) > 4){
			color = 'red2';
		}
		if(square.parentElement.classList[1] != 'four' && square.parentElement.classList[1] != 'five' && square.classList[2] == 'black2'){
			square.innerHTML = '<div class="'+color+' piece"></div>';
		}
	}
}

function addSPions(){}

function save(){

	var tab = [];

for(var i = 0; i < document.querySelectorAll('.piece').length; i++){
      var SPions = document.querySelectorAll('.piece')[i];
			if(SPions.classList[0] == 'black2'){

					var SPionsBlackList = SPions.parentElement.parentElement.classList + " " + SPions.parentElement.classList;
					var SPionsBlackRow = SPionsBlackList.split(" ")[1];
					var SPionsBlackColumn = SPionsBlackList.split(" ")[3];
					var SPionsBlack = SPionsBlackRow + SPionsBlackColumn;

					tab.push(SPionsBlack);

					// console.log(SPionsBlack);
				}

					if(SPions.classList[0] == 'red2'){

						var SPionsRedList = SPions.parentElement.parentElement.classList + " " + SPions.parentElement.classList;
						var SPionsRedRow = SPionsRedList.split(" ")[1];
						var SPionsRedColumn = SPionsRedList.split(" ")[3];
						var SPionsRed = SPionsRedRow + " " + SPionsRedColumn;

						tab.push(SPionsRed);

						// console.log(SPionsRed);
					}


}
//document.getElementById("reprendre").
//console.log(tab);

// sessionStorage.setItem('pions', tab);
// sessionStorage.setItem("colorS", currentColor);
// monStockage = sessionStorage;
// console.log(sessionStorage);
monStockage = localStorage;
localStorage.setItem('pions', tab);
localStorage.setItem('colorS', currentColor);
alert("Mémorisation effectuée");

if(!localStorage.getItem('pions', tab) && ('colorS', currentColor)){
    $window.localStorage.setItem('pions', tab) && ('colorS', currentColor);
}

console.log(localStorage);
}
