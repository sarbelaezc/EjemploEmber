import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    if(localStorage.getItem('username') == null & localStorage.getItem('password') == null){
      console.log('no se ha iniciado sesion');
    }else{
      this.replaceWith('calculadora');
    }
  }
});
