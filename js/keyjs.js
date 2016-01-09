var x1 = document.getElementById("d1");
var x2 = document.getElementById("d2");
var x3 = document.getElementById("d3");
var x4 = document.getElementById("d4");
var x5 = document.getElementById("d5");
var x6 = document.getElementById("d6");
var x7 = document.getElementById("d7");
var x8 = document.getElementById("d8");
var x9 = document.getElementById("d9");
var tdiv = document.getElementById("textID");

var y = [x1, x2, x3, x4, x5, x6, x7, x8, x9];

function fnGetFocus() {
    y[0].focus();
}

y[0].setAttribute("onkeydown", "fnPress(event, undefined, '1', undefined, '3', '0')");
y[1].setAttribute("onkeydown", "fnPress(event, '0', '2', undefined, '4', '1')");
y[2].setAttribute("onkeydown", "fnPress(event, '1', undefined, undefined, '5', '2')");
y[3].setAttribute("onkeydown", "fnPress(event, undefined, '4', '0', '6', '3')");
y[4].setAttribute("onkeydown", "fnPress(event, '3', '5', '1', '7', '4')");
y[5].setAttribute("onkeydown", "fnPress(event, '4', undefined, '2', '8', '5')");
y[6].setAttribute("onkeydown", "fnPress(event, undefined, '7', '3', undefined, '6')");
y[7].setAttribute("onkeydown", "fnPress(event, '6', '8', '4', undefined, '7')");
y[8].setAttribute("onkeydown", "fnPress(event, '7', undefined, '5', undefined, '8')");

function fnPress(e, l, r, u, d, s) {

    switch (e.keyCode) {
        case 37: // left
            k = l;
            fnGetContent(k, s);
            return false
            break;
        case 38: // up
            k = u;
            fnGetContent(k, s);
            return false
            break;
        case 39: // right
            k = r;
            fnGetContent(k, s);
            return false
            break;
        case 40: // down
            k = d;
            fnGetContent(k, s);
            return false
            break;
    }
}

function fnGetContent(k, s)

{
    self = Number(s);
    if (k > self) {
        y[k].className = "div1";
        y[self].className = "div2";

        y[k].focus();
        if (k == self + 1) {
            tdiv.innerHTML = tdiv.innerHTML + 'Right--';
        } else {
            tdiv.innerHTML = tdiv.innerHTML + 'Down--';

        }

    } else if (k == self - 1) {

        y[k].className = "div1";
        y[self].className = "div2";
        y[k].focus();
        tdiv.innerHTML = tdiv.innerHTML + 'Left--';

    } else if (k < self) {
        y[k].className = "div1";
        y[self].className = "div2";
        y[k].focus();
        tdiv.innerHTML = tdiv.innerHTML + 'Up--';

    } else {
        tdiv.innerHTML = tdiv.innerHTML + 'Invalid--';
    }
}
