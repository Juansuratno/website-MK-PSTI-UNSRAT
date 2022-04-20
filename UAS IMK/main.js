const myslide = document.querySelectorAll('.content'),
	dot = document.querySelectorAll('.dot');
	
let counter=1;
slidefun(counter);

let timer= setInterval(autoslide, 8000);
function autoslide(){
	counter += 1;
	slidefun(counter);
}
function plusSlides(n){
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n){
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer(){
	clearInterval(timer);
	timer = setInterval(autoslide, 8000);
}

function slidefun(n){
	let i;
	for(i =0;<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i =0;<dt.length;i++){
		dot[i].classList.remove('active');
	}
	if (n > myslide.length){
		counter=1;
	}
	if (n < 1){
		counter = myslide.length;
	}
	myslide[counter -1].style.display ="block";
	dot[counter -1].classList.add('active');
	
}	