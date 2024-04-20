"use strict";


let myAudio = new Audio();
myAudio.src = 'audio/Fragile.mp3';
let goto80 = new Audio()
goto80.src = 'audio/Goto80.mp3'
let Pony = new Audio();
Pony.src = 'audio/pony.mp3';
let kola = new Audio();
kola.src = 'audio/Kola Kid.mp3';
let xenon = new Audio();
xenon.src = 'audio/Xinon.mp3';
let fairy = new Audio();
fairy.src = 'audio/fairy.mp3';
let disko = new Audio();
disko.src = 'audio/disko.mp3';
let train = new Audio();
train.src = 'audio/train.mp3';
let skater = new Audio();
skater.src = 'audio/skater.mp3';
let char = new Audio();
char.src = 'audio/char.mp3';

// Изменение цвета в голове

	function changeColor(){
		 // Определяем строку, меняющую цвет
		let color = "#FF0000|#FF8000|#FFFF00|#00FF00|#00FFFF|#0000FF";
		color = color.split("|");
		let wen = document.getElementsByTagName("h1");

		for(let i=0;i<wen.length;i++){
			 // Устанавливаем стиль
			wen[i].style.color=color[parseInt(Math.random() * color.length)];
		}
	}
	setInterval("changeColor()",500);

//Изменение цвета на кнопке при клике
document.querySelector('#menu').onmousedown = function(event) {
        let target = event.target; // где был клик?

      if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует

      target.style.color = 'yellow';
    }

document.querySelector('#menu').onmouseup = function(event) {
        let target = event.target; // где был клик?

      if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует

      target.style.color = 'white';
    }

//Звучание музыки
class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    ode_play() {
      if (myAudio.paused) {
        myAudio.play();
        }
      else {
        myAudio.pause();
        }
    }

    ode_stop() {
      myAudio.pause();
      myAudio.currentTime = 0.0;
    }

    goto80_play() {
      if (goto80.paused) {
        goto80.play();
        }
      else {
        goto80.pause();
        }
    }

    goto80_stop() {
      goto80.pause();
      goto80.currentTime = 0.0;
    }

    kola_play() {
      if (kola.paused) {
        kola.play();
        }
      else {
        kola.pause();
        }
    }

    kola_stop() {
      kola.pause();
      kola.currentTime = 0.0;
    }

    xenon_play() {
      if (xenon.paused) {
        xenon.play();
        }
      else {
        xenon.pause();
        }
    }

    xenon_stop() {
      xenon.pause();
      xenon.currentTime = 0.0;
    }

    fairy_play() {
      if (fairy.paused) {
        fairy.play();
        }
      else {
        fairy.pause();
        }
    }

    fairy_stop() {
      fairy.pause();
      fairy.currentTime = 0.0;
    }

    train_play() {
      if (train.paused) {
        train.play();
        }
      else {
       train.pause();
        }
    }

    train_stop() {
      train.pause();
      train.currentTime = 0.0;
    }

    disko_play() {
      if (disko.paused) {
        disko.play();
        }
      else {
        disko.pause();
        }
    }

    disko_stop() {
      disko.pause();
      disko.currentTime = 0.0;
    }

    skater_play() {
      if (skater.paused) {
        skater.play();
        }
      else {
        skater.pause();
        }
    }

    skater_stop() {
      skater.pause();
      skater.currentTime = 0.0;
    }

    char_play() {
      if (char.paused) {
        char.play();
        }
      else {
        char.pause();
        }
    }

    char_stop() {
      char.pause();
      char.currentTime = 0.0;
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }

  new Menu(menu);



