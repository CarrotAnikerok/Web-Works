function Calculator() {
    this.getData = function () {
        this.x = Number(prompt("x = ", 0));
        this.y = +prompt("y = ", 0); // � + � number ������� ����������
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
    alert("����� ����� " + myCalc.sum() + "; ������������ " + myCalc.mult());
}