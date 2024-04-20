"use strict";

function Rectangle(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.draw = function() {
        $("<span class = 'rect'></span>").appendTo($("#area"))
            .css("left", this.x + "px")
            .css("top", this.y + "px")
            .css("width", this.width + "px")
            .css("height", this.height + "px")
            .css("background-color", this.color)
    }
}

function RandomTo(min, max) {
    return Math.random() * (max - min) + min;
}


$(document).ready(function () {

    let areaWidth = $("#area").width() * 0.7;
    let areaHeight = $("#area").height() * 0.7;
    let maxRectWidth = areaWidth * 0.3;
    let maxRectHeight = areaHeight * 0.6;
    let minRectWidth = 30;
    let minRectHeight = 30;

    $("#cc").click(function () {
        // let myRect = new Rectangle(50, 30, 300, 200, "pink");

        for (let i = 0; i < 1; i++) {
            let rect = new Rectangle(
                RandomTo(0, areaWidth),
                RandomTo(0, areaHeight),
                RandomTo(minRectHeight, maxRectHeight),
                RandomTo(minRectWidth, maxRectWidth),
                "rgb(" + RandomTo(30, 122) + "," + RandomTo(122, 255) + "," + RandomTo(0, 10) + ")"
            );
            rect.draw();
        }
    })

    $("#ww").click(function () {
       // let myRect = new Rectangle(50, 30, 300, 200, "pink");

        for (let i = 0; i < 10; i++) {
            let rect = new Rectangle(
                RandomTo(0, areaWidth),
                RandomTo(0, areaHeight),
                RandomTo(minRectHeight, maxRectHeight),
                RandomTo(minRectWidth, maxRectWidth),
                "rgb(" + RandomTo(122, 255) + "," + RandomTo(0, 80) + "," + RandomTo(122, 255) + ")"
            );
            rect.draw();
        }
    })

})
