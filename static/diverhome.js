let lineNum = 0;
let buttons = document.getElementsByClassName('line-button');

const ClickButton = (n) => {
    // body...
    buttons[lineNum].classList.remove("active-button");
    lineNum = n;
    buttons[n].classList.add("active-button");
}

let toggle = 0;
let on;			

const start = () => {
	if (!toggle) {
		toggle = 1;
		startBtn.innerHTML = "暂停";
		startBtn.className = "start-button-red start-button"
		on = setInterval(setLocation, 300);
	}
	else{
		toggle = 0;
		startBtn.innerHTML = "继续";
		startBtn.className = "start-button-green start-button"
		clearInterval(on);
	}
}

const setLocation = () => {
	console.log('set');
}