import Controller from '@ember/controller';
import{computed, set, get} from '@ember/object';
import { inject as service } from '@ember/service';

var msgError = 'Nombre de usuario o contraseña incorrectos';
var validation;

export default Controller.extend({
  users: service('users'),
  actions:{
    login(username,password){
      this.get('users.users').forEach((user)=>{
        if(this.username == user.name & this.password == user.password ){
          localStorage.setItem('username',this.username);
          localStorage.setItem('password',this.password);
          validation  = true;
        }
      });
      if(validation == true){
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'));
        validation = false;
      }else{
        errorCustomAlert(msgError);
      }
    }
  }
});
//PopUp Error
function errorCustomAlert(txt) {
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
