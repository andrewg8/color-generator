function colorChange() {
    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    var newColor = "#";
    var newColor2 = "#";
  
    for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        newColor += y;
    }

    for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        newColor2 += y;
    }

    let one = document.querySelector(".one");
    let two = document.querySelector(".two")

    one.style.backgroundColor = newColor;
    one.setAttribute('data-color', newColor);
    two.style.backgroundColor = newColor2;
    two.setAttribute('data-color', newColor2);


    document.querySelector(".oneP").innerHTML  = newColor;


    document.querySelector(".twoP").innerHTML  = newColor2;
}

function hoverOver(a) {
    if (document.querySelector("." + a + "P").innerHTML == "") {
        document.querySelector("." + a + "P").innerHTML = "click 'submit'"
    } else {
    document.querySelector("." + a + "P").innerHTML = "Copy?"
    }
}

function hoverOff(a) {
    x = document.querySelector("." + a + "P");
    y = document.querySelector("." + a);

    x.innerHTML = y.getAttribute('data-color');
}

function onClick(a) {
    x = document.querySelector("." + a + "P");
    y = document.querySelector("." + a);
    color = y.getAttribute('data-color')

    x.innerHTML = color;

    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(x);

    
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");

    x.innerHTML = "copied!"
}