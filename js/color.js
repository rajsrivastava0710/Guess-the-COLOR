var colors=[];
var pickColor;
var nSquares=6;
var reset=document.querySelector("#reset");
var colorDisplay=document.querySelector("#colordp");
var messageDisplay=document.querySelector("#message");
var squares=document.querySelectorAll(".square");
var modeButton=document.querySelectorAll(".mode");
var h1=document.querySelector("h1");

startGame();

function startGame(){

	resetIt();
	difficultyLevel();
	squareEvent();
	 
}

function squareEvent(){
	for(var i=0;i<squares.length;i++){	
	squares[i].addEventListener("click",function(){
		var clickColor=this.style.background;
		if(clickColor===pickColor){
			messageDisplay.textContent="Correct!";
			changeAllColor(pickColor);
			h1.style.background=clickColor;
			reset.textContent="Play Again"
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again!!";
		}
	});
}
}

function difficultyLevel(){
	for(var i=0;i<modeButton.length;i++){
			modeButton[i].addEventListener("click",function(){
				modeButton[0].classList.remove("active");
				modeButton[1].classList.remove("active");
				this.classList.add("active");
				this.textContent==="Easy" ? nSquares=3: nSquares=6;
				resetIt();
			})
		}
}

function resetIt(){
	colors=generateRandomColor(nSquares);
	pickColor=pickColorFunction();
	colorDisplay.textContent=pickColor;
	reset.textContent="New Colors"
	messageDisplay.textContent="";
	h1.style.background='steelblue';
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.display='block';
		squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display='none';
		}	
	}
}


reset.addEventListener("click",function(){
	resetIt();
});	

function changeAllColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColorFunction(){
	var randomIndex=Math.floor(Math.random()*colors.length);
	return colors[randomIndex];
}

function generateRandomColor(n){
	var arr=[]
	for(var i=0;i<n;i++){
	arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}