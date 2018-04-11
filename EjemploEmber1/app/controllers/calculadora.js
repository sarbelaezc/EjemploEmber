import Controller from '@ember/controller';
import{computed, set, get} from '@ember/object';

var msgError = 'Los números deben estar entre -1000 y 1000';

export default Controller.extend({
  actions:{
    calculate(num1,num2,result){
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      if(num1<(-1000) | num1>(1000) | num2<(-1000) | num2>(1000)){
        alert(msgError);
      }else{
        result = num1 + num2;
        console.log(result);
        return(result);
      }
    }
  }
});
// -----------------------------------------------------------------------------
if(document.getElementById) {
  window.alert = function(txt) {
    createCustomAlert(txt);
  }
}
//PopUp Error
function createCustomAlert(txt) {
  var ALERT_TITLE = "Error!";
  var ALERT_BUTTON_TEXT = "Ok";
  var mObj,alertObj,h1,msg,btn;

  if(document.getElementById("modalContainer")) return;

  mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = document.documentElement.scrollHeight + "px";

  alertObj = mObj.appendChild(document.createElement("div"));
  alertObj.id = "alertBox";
  if(document.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left = (document.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
  alertObj.style.visiblity="visible";

  h1 = alertObj.appendChild(document.createElement("h1"));
  h1.appendChild(document.createTextNode(ALERT_TITLE));

  msg = alertObj.appendChild(document.createElement("p"));
  //msg.appendChild(document.createTextNode(txt));
  msg.innerHTML = txt;

  btn = alertObj.appendChild(document.createElement("a"));
  btn.id = "errorBtn";
  btn.appendChild(document.createTextNode(ALERT_BUTTON_TEXT));
  btn.href = "#";
  btn.focus();
  btn.onclick = function() {
    removeCustomAlert();
    return false;
  }
  alertObj.style.display = "block";
}

function removeCustomAlert() {
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
