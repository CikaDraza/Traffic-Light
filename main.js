var signal = document.getElementsByClassName('semaphor');
function trafficLight() {	
	
	function changeToRed() {
		signal[0].style.zIndex = '1';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '0';
	}		
	function changeToRedYellow() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '1';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '0';
	}
	function changeToGreen() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '1';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '0';
	}
	function changeToBlink() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '1';
		signal[4].style.zIndex = '0';
	}
	function changeToYellow() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '1';
	}

	 redYellow = setTimeout(changeToRedYellow, 4000);
	 green = setTimeout(changeToGreen, 7000);
	 off = setTimeout(changeToBlink, 11000);
	 green = setTimeout(changeToGreen, 11750);
	 off = setTimeout(changeToBlink, 12500);
	 green = setTimeout(changeToGreen, 13250);
	 off = setTimeout(changeToBlink, 14000);
	 green = setTimeout(changeToGreen, 14750);
	 off = setTimeout(changeToBlink, 15500);
	 green = setTimeout(changeToGreen, 16250);
	 yellow = setTimeout(changeToYellow, 17000);
     red = setTimeout(changeToRed, 20000);
}

setInterval (function semaphor() {	
	
	// To red
		signal[0].style.zIndex = '1';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '0';

	function changeToRedYellow() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '1';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '0';
	}
	function changeToGreen() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '1';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '0';
	}
	function changeToBlink() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '1';
		signal[4].style.zIndex = '0';
	}
	function changeToYellow() {
		signal[0].style.zIndex = '0';
		signal[1].style.zIndex = '0';
		signal[2].style.zIndex = '0';
		signal[3].style.zIndex = '0';
		signal[4].style.zIndex = '1';
	}

	 redYellow = setTimeout(changeToRedYellow, 4000);
	 green = setTimeout(changeToGreen, 7000);
	 off = setTimeout(changeToBlink, 11000);
	 green = setTimeout(changeToGreen, 11750);
	 off = setTimeout(changeToBlink, 12500);
	 green = setTimeout(changeToGreen, 13250);
	 off = setTimeout(changeToBlink, 14000);
	 green = setTimeout(changeToGreen, 14750);
	 off = setTimeout(changeToBlink, 15500);
	 green = setTimeout(changeToGreen, 16250);
	 yellow = setTimeout(changeToYellow, 17000);	
	
}, 20000);

function start() {
		trafficLight();
		semaphor();
}

start();