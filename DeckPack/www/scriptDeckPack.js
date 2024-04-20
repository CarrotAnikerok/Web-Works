// JavaScript source code
"use strict";


$(document).ready(function () {
    $('input[type="text"]').val('');
    $('textarea').val('');// очистка формы после перезагруки
    start();
    $("#title").focus();

    let title = document.querySelector('#title');
    title.oninput = function () {
        this.value = this.value.substr(0, 35);
    }
 
    $("#title").keyup(function () {
        insertText("#title", "#cardTitle", 30, 19, "top", 11, 19, 19, 4);
    });

    // Тип существа (написать и выбрать)
    let type = document.querySelector('#typeText');
    type.oninput = function () {
        this.value = this.value.substr(0, 60);
    }

   $("#menu").click(function (event) { 
       let target = event.target;
       if (target.tagName != 'BUTTON') return;
       $("#menu button").css("color", "brown");
       $("#menu button").css("box-shadow", "3px 4px 0px 0px brown");
       $("#menu button").removeClass("transf");
       target.style.color = "#d27c7c";
       target.style.boxShadow = "0px 0px 0px 0px";
       $(target).addClass('transf');
    });

    class Menu {
        constructor(elem) {
            this._elem = elem;
            elem.onclick = this.onClick.bind(this);
        }

        Creature() {
            $('#cardTypeText').text("*Существо");
            $("#typeText").css("display", "none");
        }

        Action() {
            $('#cardTypeText').text("*Действие");
            $("#typeText").css("display", "none");
        }

        Reaction() {
            $('#cardTypeText').text("*Реакция");
            $("#typeText").css("display", "none");
        }

        BonusAction() {
            $('#cardTypeText').text("*Бонусное действие");
            $("#typeText").css("display", "none");
        }

        Weapon() {
            $('#cardTypeText').text("*Снаряжение");
            $("#typeText").css("display", "none");
        }

        Custom() {
            $("#typeText").toggle();
            $("#typeText").val("*");
            $('#cardTypeText').text($("#typeText").val());
            $("#typeText").focus();
        }

        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        }
    };

    new Menu(menu);

    $("#typeText").keyup(function () {
        let titleValue = $(this).val();
        $('#cardTypeText').text(titleValue);
    });

    // Вид карты
    document.querySelector("#cardSpec").oninput = function () {
        this.value = this.value.substr(0, 25);
    }
    $("#cardSpec").keyup(function () {
        insertText("#cardSpec", "#cardSpecText", 30, 14, "top", 647, 656, 19, 4);
    });

    // Активный Эффект

    document.querySelector("#activeInput").oninput = function () {
        this.value = this.value.substr(0, 200);
    }

    $("#activeButton").click(function () { //при нажатии на кнопку АКТИВ?
        let color = $("#activeButton").css("color");
        if (color == "rgb(165, 42, 42)") {
            this.style.color = "#d27c7c";
            this.style.boxShadow = "0px 0px 0px 0px";
            $(this).addClass('transf');
        } else {
            this.style.color = "rgb(165, 42, 42)";
            this.style.boxShadow = "3px 4px 0px 0px brown";
            $(this).removeClass('transf');
        }
        $("#activeEffect").toggle();
        $("#activeInput").toggle();
        $("#activeInput").focus();
    });

    $("#activeInput").keyup(function () {
        insertText("#activeInput", "#activeEffectText", 16, 85, "top", 8, 10, 10, 2);
    });

    // Пассивный Эффект

    document.querySelector("#passiveInput").oninput = function () {
        this.value = this.value.substr(0, 400);
    }

    $("#passiveInput").keyup(function () {
        if ($("#passiveInput").val().length == 0) {
            $("#star2").hide();
        } else {
            $("#star2").show();
        }
        insertText("#passiveInput", "#passiveEffectText", 16, 300, "top", 1, 2, 10, 2);
    });

    // Текст описания
    document.querySelector("#descriptionInput").oninput = function () {
        this.value = this.value.substr(0, 120);
    }

    $("#descriptionInput").keyup(function () {
        if ($("#descriptionInput").val().length == 0) {
            $("#star3").hide();
        } else {
            $("#star3").show();
        }
        insertText("#descriptionInput", "#descriptionText", 14, 100, "top", 0, 2, 8, 2);
    });

    // Вставка масти

/*    $("#suit").click(function (event) { // доделать изменение цвета кружка
        let target = event.target;
        if (target.tagName != "INPUT") return;
        alert(target.tagName);
        target.style.border = "7px double rgba(64, 29, 6, 1);";
        $(target).css("border", "7px double rgba(64, 29, 6, 1);");
    });*/

    class Suit {
        constructor(elem) {
            this._elem = elem;
            elem.onclick = this.onClick.bind(this);
        }

        Chaos() {
            $("#suitImg").attr("src", "img/Suit/Suit_Chaos.png");
        }

        Ambitions() {
            $("#suitImg").attr("src", "img/Suit/Suit_Ambitions.png");
        }

        Knowledge() {
            $("#suitImg").attr("src", "img/Suit/Suit_Knowledge.png");
        }

        Order() {
            $("#suitImg").attr("src", "img/Suit/Suit_Order.png");
        }

        Life() {
            $("#suitImg").attr("src", "img/Suit/Suit_Life.png");
        }

        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        }
    };

    new Suit(suit);

    // Вставка уровня

    class Level {
        constructor(elem) {
            this._elem = elem;
            elem.onclick = this.onClick.bind(this);
        }

        None() {
            $("#levelImg").attr("src", "img/Level/Level_none.png");
        }

        One() {
            $("#levelImg").attr("src", "img/Level/Card_Type.png");
        }

        Two() {
            $("#levelImg").attr("src", "img/Level/Level_2.png");
        }

        Three() {
            $("#levelImg").attr("src", "img/Level/Level_3.png");
        }

        Four() {
            $("#levelImg").attr("src", "img/Level/Level_4.png");
        }

        Five() {
            $("#levelImg").attr("src", "img/Level/Level_5.png");
        }

        Six() {
            $("#levelImg").attr("src", "img/Level/Level_6.png");
        }

        Seven() {
            $("#levelImg").attr("src", "img/Level/Level_7.png");
        }


        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        }
    };

    new Level(level);

    // Включение и набор статов


    let x = document.querySelectorAll("#statsInput input[type=text]");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].oninput = function () {
            this.value = this.value.substr(0, 12);
        }
    }

    $("#statsButton").click(function () { //при нажатии на кнопку СТАТЫ?
        let color = $("#statsButton").css("color");
        if (color == "rgb(165, 42, 42)") {
            this.style.color = "#d27c7c";
            this.style.boxShadow = "0px 0px 0px 0px";
            $(this).addClass('transf');
        } else {
            this.style.color = "rgb(165, 42, 42)";
            this.style.boxShadow = "3px 4px 0px 0px brown";
            $(this).removeClass('transf');
        }
        $("#stats").toggle();
        $("#statsInput").toggle();
        $("#atkInput").focus();
    });

    $("#atkButton").css("color", "#d27c7c");
    $("#atkButton").css("box-shadow", "0px 0px 0px 0px");
    $("#atkButton").addClass('transf');

    $("#atkButton").click(function () { //при нажатии на кнопку АТК
        let color = $("#atkButton").css("color");
        if (color == "rgb(165, 42, 42)") {
            this.style.color = "#d27c7c";
            this.style.boxShadow = "0px 0px 0px 0px";
            $(this).addClass('transf');
        } else {
            this.style.color = "rgb(165, 42, 42)";
            this.style.boxShadow = "3px 4px 0px 0px brown";
            $(this).removeClass('transf');
        }
        changeStats("#atkButtom", "#atkInput", "#atkText", "#atkImg");
        $("#atkInput").focus();
    });

    $("#kdButton").click(function () { //при нажатии на кнопку КД
        let color = $("#kdButton").css("color");
        if (color == "rgb(165, 42, 42)") {
            this.style.color = "#d27c7c";
            this.style.boxShadow = "0px 0px 0px 0px";
            $(this).addClass('transf');
        } else {
            this.style.color = "rgb(165, 42, 42)";
            this.style.boxShadow = "3px 4px 0px 0px brown";
            $(this).removeClass('transf');
        }
        changeStats("#kdButtom", "#kdInput", "#kdText", "#kdImg");
        $("#kdInput").focus();
    });

    $("#hpButton").click(function () { //при нажатии на кнопку ХП
        let color = $("#hpButton").css("color");
        if (color == "rgb(165, 42, 42)") {
            this.style.color = "#d27c7c";
            this.style.boxShadow = "0px 0px 0px 0px";
            $(this).addClass('transf');
        } else {
            this.style.color = "rgb(165, 42, 42)";
            this.style.boxShadow = "3px 4px 0px 0px brown";
            $(this).removeClass('transf');
        }
        changeStats("#hpButtom", "#hpInput", "#hpText", "#hpImg");
        $("#hpInput").focus();
    });

    $("#atkInput").keyup(function () {
        let titleValue = $(this).val();
        $('#atkText').text(titleValue);
    });

    $("#kdInput").keyup(function () {
        let titleValue = $(this).val();
        $('#kdText').text(titleValue);
    });

    $("#hpInput").keyup(function () {
        let titleValue = $(this).val();
        $('#hpText').text(titleValue);
    });

    // Вставка картинки
    function readImageFile() {
        let reader = new FileReader();
        reader.readAsDataURL(document.getElementById('imgFile').files[0]);

        reader.onload = function (event) {
            document.getElementById('mainImg').src = reader.result;
        };

        reader.onerror = function (event) {
            console.error("ошибка... " + reader.error);
        };
    };

    document.getElementById('imgFile').onchange = function () { readImageFile() };

    // Отчистка карты

    $("#cleanButton").click(function () { //при нажатии на кнопку ОТЧИСТКИ
        let color = $("#cleanButton").css("color");
        if (color == "rgb(165, 42, 42)") {
            this.style.color = "#d27c7c";
            this.style.boxShadow = "0px 0px 0px 0px";
            $(this).addClass('transf');
        } else {
            this.style.color = "rgb(165, 42, 42)";
            this.style.boxShadow = "3px 4px 0px 0px brown";
            $(this).removeClass('transf');
        }
        $('input[type="text"]').val('');
        $('textarea').val('');
        insertText("#title", "#cardTitle", 30, 19, "top", 11, 19, 19, 4);
        insertText("#cardSpec", "#cardSpecText", 30, 14, "top", 647, 656, 19, 4);
        insertText("#activeInput", "#activeEffectText", 16, 75, "top", 8, 10, 10, 2);
        insertText("#passiveInput", "#passiveEffectText", 16, 200, "top", 0, 2, 10, 2);
        insertText("#descriptionInput", "#descriptionText", 14, 100, "top", 0, 2, 8, 2);
        $('#cardTypeText').text("");
        $('#atkText').text("");
        $('#kdText').text("");
        $('#hpText').text("");
        $("#mainImg").attr("src", "");
        $("#levelImg").attr("src", "img/Level/Level_none.png");
        $("#suitImg").attr("src", "img/Suit/Suit_Chaos.png");
        $("#title").focus();
    });

    //Функция вставки и уменьшения текста insertText("#passiveInput", "#passiveEffectText", 16, 250, "top", 0, 2, 10, 2);

    function insertText(insertId, textId, font, numberOfChar, bottomOrTop, bNumber1, bNumber2, fon2, procentNumb) {
        let titleValue = $(insertId).val();
        let textLength = $(textId).text().length;
        let fontSize = Math.min(font, (numberOfChar / textLength) * font);
        $(textId).css('font-size', fontSize + 'px');
        if (fontSize < font && fontSize > fon2) {
            $(textId).css(bottomOrTop, bNumber1 + font * procentNumb / fontSize + 'px'); // замудренный способ менять bottom через разме шрифта
        } else if (fontSize <= fon2) {
            $(textId).css(bottomOrTop, bNumber2 + 'px');
        } else {
            $(textId).css(bottomOrTop, bNumber1 + 'px');
        }
        $(textId).text(titleValue);
    }

    function changeStats(Button, Input, Text, Img) {
        $(Button).css("color", "yellow");
        $(Input).toggle();
        $(Text).toggle();
        $(Img).toggle();
    }

    function start() {
        // название
        $("#title").val('Пугало'); 
        insertText("#title", "#cardTitle", 30, 19, "top", 11, 19, 19, 4);
        // Тип карты
        $('#cardTypeText').text("*Существо");
        $("#typeText").css("display", "none");
        onButton("#butt")
        // Вид карты
        $("#cardSpec").val('Mexaнизм'); 
        insertText("#cardSpec", "#cardSpecText", 30, 14, "top", 647, 656, 19, 4);
        // Масть
        $("#suitImg").attr("src", "img/Suit/Suit_Ambitions.png");
        // Уровень
        $("#levelImg").attr("src", "img/Level/Card_Type.png");
        // Изображение
        $("#mainImg").attr("src", "img/pugalo.jpg");
        // Активная абилка карты
/*        $("#activeInput").val("Возьмите существо 1 уровня из кладбища в руку."); 
        insertText("#activeInput", "#activeEffectText", 16, 75, "top", 8, 10, 10, 2);
        $("#activeInput").css("display", "inline");
        $("#activeEffect").css("display", "block");
        onButton("#activeButton")*/
        // Пассивная абилка
        $("#passiveInput").val("Противник должен выбрать целью атаки эту карту. Вы не получаете остаточного урона от этой карты."); 
        insertText("#passiveInput", "#passiveEffectText", 16, 200, "top", 0, 2, 10, 2);
        // Описание
        $("#descriptionInput").val("Непримечательное пугало, которому нечего скрывать"); 
        insertText("#descriptionInput", "#descriptionText", 14, 100, "top", 0, 2, 8, 2);

    }

    function onButton(butt) {
        let color = $(butt).css("color");
        if (color == "rgb(165, 42, 42)") {
            $(butt).css("color", "#d27c7c");
            $(butt).css("box-shadow", "0px 0px 0px 0px");
            $(this).addClass('transf');
        } else {
            $(butt).css("color", "rgb(165, 42, 42)");
            $(butt).css("box-shadow",);
            $(this).removeClass('transf');
        }
    }

}); // The end