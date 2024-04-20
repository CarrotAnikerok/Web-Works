 "use strict";


	function changeColor(){
		let color = "#FF0000|#FF8000|#FFFF00|#00FF00|#00FFFF|#0000FF";
		color = color.split("|");
		let wen = document.getElementsByTagName("h1");

		for(let i=0;i<wen.length;i++){
			 // Устанавливаем стиль
			wen[i].style.color=color[parseInt(Math.random() * color.length)];
		}
	}
	setInterval("changeColor()",500);

// Карусель

   let i = 1;
   let pictureBlock = document.querySelector(".pictureBlock");
    for(let li of pictureBlock.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* конфигурация */
    let width = 500; // ширина картинки
    let count = 1; // видимое количество изображений

    let list = pictureBlock.querySelector('ul');
    let listElems = pictureBlock.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    pictureBlock.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    pictureBlock.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };


//Кит

let ballCoords = {
    top: 0,
       left: 0
};
 field.onclick = function(event) {

      // координаты поля относительно окна браузера
      let fieldCoords = this.getBoundingClientRect();

      if (event.clientX - fieldCoords.left < ballCoords.left) {
        let pic = document.querySelector("#field > img");
        pic.src = "www/img/kit_scater.gif"
      }

      if (event.clientX - fieldCoords.left > ballCoords.left) {
        let pic = document.querySelector("#field > img");
        pic.src = "www/img/Sprite-kiSCATEt.gif"
      }

      ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      };


      // запрещаем пересекать верхнюю границу поля
      if (ballCoords.top < 0) ballCoords.top = 0;

      // запрещаем пересекать левую границу поля
      if (ballCoords.left < 0) ballCoords.left = 0;


      // // запрещаем пересекать правую границу поля
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      // запрещаем пересекать нижнюю границу поля
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }