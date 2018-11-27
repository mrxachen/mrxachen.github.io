const PI = 3.14159;

function startGenerator() {
    generateBody();
    generateAge();
    generateHair();
	generatefujinum();
	//generateStaytime();
    generateEyes();
    generateAttribute();
    generateCharacter();
   // generateCup();
   //generateHairData();
    generateSuperPower();
    generateSkin();
}

/*
function generateCup() {
    randomData("cupsize",Cupsize_data);
}

function generateHairData() {
    randomData("Hairdata",Haircolor_data);
}
*/


function generateStaytime(){
	randomData("staytime",staytime_data);
}


function generatefujinum(){
	randomData("fujinum",fujinum_data);
}

function generateSuperPower(){
	randomData("superpowerdata",Superpower_data);
}

function generateSkin() {
    randomData("skin",Skin_data);
}

function generateBody() {
    var height = normalDistribution(173, 0);
    height = Math.round(height);
    var text1 = document.getElementById("height");
    text1.innerHTML=height;
	
    var bmi = normalDistribution(23, 0);
    var weight = Math.round(bmi*(height/100)*(height/100));
    var text2 = document.getElementById("weight");
	text2.innerHTML = weight;
		
	var jier = normalDistribution(18, 2)
	jier = Math.round(jier);
	var text3 = document.getElementById("jierlength");
	text3.innerHTML = jier;

}
function generateAge() {
    var gH = Math.round(normalDistribution(24, 0));
    var text1 = document.getElementById("age");
    text1.innerHTML = gH;    
}
function generateHair() {
    randomData("hairstyle",Hair_data);
    var newColor = randomRGB();
    var text2 = document.getElementById("hairColor");
    text2.innerHTML = newColor;
    text2.style.backgroundColor = newColor;
}
function generateEyes() {
    var text1 = document.getElementById("eyeColor");
    var newColor = randomRGB();
    text1.innerHTML = newColor;
    text1.style.backgroundColor = newColor;
}
function generateAttribute() {
    randomData("attribute",Attribute_data);
}
function generateCharacter() {  
    randomData("character",Character_data);
}

function normalDistribution(u, v) {
    // Box-Muller
    var x1 = Math.random();
    var x2 = Math.random();
    var nD = Math.sqrt(-2*Math.log(x1))*Math.sin(2*PI*x2)*v+u;
    return nD;
}
function randomRGB() {
    var rValue = Math.round(Math.random()*255).toString(16);
    var gValue = Math.round(Math.random()*255).toString(16);
    var bValue = Math.round(Math.random()*255).toString(16);
    if(rValue.length <2)
        rValue = "0" + rValue;
    if(gValue.length <2)
        gValue = "0" + gValue;
    if(bValue.length <2)
        bValue = "0" + bValue;                
    return "#"+rValue+gValue+bValue;
}
function randomData(elementId,dataName) {
    var t1Num = Math.floor(Math.random()*dataName.length);
    var text1 = document.getElementById(elementId);
    text1.innerHTML = dataName[t1Num];    
}
