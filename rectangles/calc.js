function Calculator() {
    this.getData = function () {
        this.x = Number(prompt("x = ", 0));
        this.y = +prompt("y = ", 0); // и + и number раьотют аналогично
    }
    this.sum = function () {
        return this.x + this.y;
    }

    this.mult = function () {
        return this.x * this.y;
    }
}

let myCalc = new Calculator();
document.getElementById("qq").onclick = function () {
    myCalc.getData();
    alert("Сумма равна " + myCalc.sum() + "; Произведение " + myCalc.mult());
}