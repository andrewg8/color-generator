var i = 0;
var i2 = 0;
var i3 = 0;
var txt = 'hold on';
var txt2 = "another new site coming soon"
var txt3 = "2019✌"
var speed = 100;
var speed2 = 40;

function typing() {

  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed2);
  }

  if (i == txt.length){
  setTimeout(
      function stop() {
        document.getElementById("text").innerHTML = "";
      }, 1500
  )
    }

    function clear() {
        if(i2 == 28) {
            setTimeout(
                function stop() {
                  document.getElementById("text").innerHTML = "";
                }, 1500 )
        }
    }

  setTimeout(
      function typing2() {
        if (i2 < txt2.length) {
            document.getElementById("text").innerHTML += txt2.charAt(i2);
            setTimeout(typing2, speed);
            i2++;
            clear()
          }
      }, 4000
  )

  

  setTimeout(
    function typing3() {
      if (i3 < txt3.length) {
          document.getElementById("text").innerHTML += txt3.charAt(i3);
          i3++;
          setTimeout(typing3, speed);
        }
    }, 8000
)

}

typing()


