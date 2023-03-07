let y = document.querySelector(".yes");
let n = document.querySelector(".no");
let myUp = document.getElementById("up");

document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);

window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myUp.style.display = "block";
  } else {
    myUp.style.display = "none";
  }
}

function myError() {
  alert("Sorry a problem occured when loading feature");
}

function myYes() {
  alert("Thank you for your feedback!");
  y.style.background = "white";
  y.style.color = "black";
  n.style.color = "white";
  n.style.background = "#979AA4";
}
function myNo() {
  alert("Oh no... please give us a feedback in our facebook page on how we can improve.");
  n.style.background = "white";
  n.style.color = "black";
  y.style.color = "white";
  y.style.background = "#979AA4";
}