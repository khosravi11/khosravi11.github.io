$( document ).ready(function() {
    console.log( "ready!" );


var goal = Math.floor((Math.random() * 101) + 19);
console.log(goal);
var gem1 = Math.floor((Math.random() * 12) + 1);
console.log(gem1);
var gem2 = Math.floor((Math.random() * 12) + 1);
console.log(gem2);
var gem3 = Math.floor((Math.random() * 12) + 1);
console.log(gem3);
var gem4 = Math.floor((Math.random() * 12) + 1);
console.log(gem4);
var counter = 0;
var wins = 0;
var losses = 0;

function reset() {

	goal = Math.floor((Math.random() * 101) + 19);
	console.log(goal);
	gem1 = Math.floor((Math.random() * 12) + 1);
	console.log(gem1);
	gem2 = Math.floor((Math.random() * 12) + 1);
	console.log(gem2);
	gem3 = Math.floor((Math.random() * 12) + 1);
	console.log(gem3);
	gem4 = Math.floor((Math.random() * 12) + 1);
	console.log(gem4);
	counter = 0;
	$("#goal").html(goal);
	$("#gem1Val").html("Val:");
	$("#gem2Val").html("Val:");
	$("#gem3Val").html("Val:");
	$("#gem4Val").html("Val:");
   	$("#counter").html("Score:" + counter);
	

};

function check() {

    if (counter > goal) {
        losses++;
        $("#goal").html("you suck");
        $("#losses").html("Losses: " + losses);
        console.log(losses);
        reset();

    } else if (counter === goal) {
        wins++;
        $("#goal").html("you rock");
        $("#wins").html("Wins: " + wins);
        reset();
    }

};


$("#goal").html(goal);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

$("#gem1").on("click", function() {
    counter = counter + gem1;
    $("#gem1Val").html("Val:" + gem1);
    $("#counter").html("Score:" + counter);
    check();

});

$("#gem2").on("click", function() {
    counter = counter + gem2;
    $("#gem2Val").html("Val:" + gem2);
    $("#counter").html("Score:" + counter);
    check();

});

$("#gem3").on("click", function() {
    counter = counter + gem3;
    $("#gem3Val").html("Val:" + gem3);
    $("#counter").html("Score:" + counter);
    check();
});

$("#gem4").on("click", function() {
    counter = counter + gem4;
    $("#gem4Val").html("Val:" + gem4);
    $("#counter").html("Score:" + counter);
    check();
});
	
});
