// var colors=[
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// 	]
//the spacing should be handled with care in rgb , as during comarison ,it can cause problems
// var pickColor=colors[3];
//make random functions
var colors=generateRandomColor(6);
var pickColor=pickColorFunction();
var nSquares=6;//to ensure that no extra colors are produced on changing difficulty levels
var reset=document.querySelector("#reset");
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var colorDisplay=document.querySelector("#colordp");
var messageDisplay=document.querySelector("#message");
// var easyBtn=document.querySelector("#easy");
// var hardBtn=document.querySelector("#hard");
var modeButton=document.querySelectorAll(".mode");

colorDisplay.textContent=pickColor;

for(var i=0;i<modeButton.length;i++){
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("active");
		modeButton[1].classList.remove("active");
		this.classList.add("active");
		this.textContent==="Easy" ? nSquares=3: nSquares=6;
		resetIt();
		//how many squares to show
		//pick color
		//update changes
	})
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

// easyBtn.addEventListener("click",function(){
// 		h1.style.background='steelblue';
// 		nSquares=3;
// 		messageDisplay.textContent=""
// 		easyBtn.classList.add("active");
// 		hardBtn.classList.remove("active");
// 		colors=generateRandomColor(nSquares);
// 		pickColor=pickColorFunction();
// 		colorDisplay.textContent=pickColor;
// 		for(var i=0;i<squares.length;i++){
// 			if(colors[i]){
// 				squares[i].style.background=colors[i];
// 			}
// 			else{
// 				squares[i].style.display='none';
// 			}
// 		}
// });

// hardBtn.addEventListener("click",function(){
// 		h1.style.background='steelblue';
// 		nSquares=6;		
// 		messageDisplay.textContent=""
// 		easyBtn.classList.remove("active");
// 		hardBtn.classList.add("active");
// 		colors=generateRandomColor(nSquares);
// 		pickColor=pickColorFunction();
// 		colorDisplay.textContent=pickColor;
// 		for(var i=0;i<squares.length;i++){
// 			squares[i].style.background=colors[i];
// 			squares[i].style.display='block';
// 		}
// });

//gen all new col,pick new color,change color of square
//change square colors
//add initial colors
//add initial colors

reset.addEventListener("click",function(){
	resetIt();
	// colors=generateRandomColor(nSquares);
	// pickColor=pickColorFunction();
	// colorDisplay.textContent=pickColor;
	// reset.textContent="New Colors"
	// messageDisplay.textContent="";
	// h1.style.background='steelblue';
	// for(var i=0;i<squares.length;i++){
	// 	squares[i].style.background=colors[i];	
	// }	

});

	//add initial colors
	//add listeners
	//get the color
	//compare with pickColor
for(var i=0;i<squares.length;i++){
	
	squares[i].style.background=colors[i];	
	
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

function changeAllColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}


//Math.random() gives 0-1(including decimal)
//Math.floor(Math.random()*6+1) gives 1-7 (only integers)
//Math.random(MAth.random()*colors.length)

function pickColorFunction(){
	var randomIndex=Math.floor(Math.random()*colors.length);
	return colors[randomIndex];
}


//call randomColorFunction to get random color
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