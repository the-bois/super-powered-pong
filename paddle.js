"use strict";

/* Here I create a class called Paddle that creates a Paddle object with integers
x, y, width, height, ychange and a boolean called AI. */
function Paddle(left) {

    /* Size and positon of the paddle is based off the height and width of the
    canvas */
    this.w = width / 50;
    this.h = height / 4;
    this.y = height / 2;
    this.ai = false;

    this.ychange = 0;

    //chooses positon of the paddle based off whether it's the right or the left one.
    if (left) {
        this.x = this.w;
    } else {
        this.x = width - this.w;
    }

    //this moves the paddle based off the ychange, can't go past the canvas
    this.update = function () {
        this.y += this.ychange;
        this.y = constrain(this.y, this.h / 2, height - this.h / 2);
    };

    //steps integer argument is passed through that determines speed then makes the paddles ychange the speed
    this.move = function (steps) {
        this.ychange = steps;
    };

    //creates a rectangle based off the size variables.
    this.show = function () {
        rectMode(CENTER);
        fill(255, 255, 255, 255);
        rect(this.x, this.y, this.w, this.h);
    };

    this.AI = function () {
        this.ai = true;
        if (this.y > puck.y) {
            this.move(-paddleSpeed);
        } else if (this.y < puck.y) {
            this.move(paddleSpeed);
        }
    };

}