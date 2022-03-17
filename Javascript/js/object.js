function movie(name, year, genre){
	this.name = name;
	this.year = year;
	this.genre = genre;
}

var movie1 = new movie("인셉션","2010","액션/SF");
var movie2 = new movie("어벤져스:엔드게임","2019","액션/SF");
var movie3 = new movie("타짜","2006","범죄물");

function btn1(){
display.innerHTML=movie1.name;
list1.innerHTML=movie1.year;
list2.innerHTML=movie1.genre;
}

function btn2(){
display.innerHTML=movie2.name;
list1.innerHTML=movie2.year;
list2.innerHTML=movie2.genre;
}

function btn3(){
display.innerHTML=movie3.name;
list1.innerHTML=movie3.year;
list2.innerHTML=movie3.genre;
}
