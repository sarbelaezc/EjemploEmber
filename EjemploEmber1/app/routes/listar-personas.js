import Route from '@ember/routing/route';
import {computed, set, get} from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  users: service('users'),
  beforeModel(){
    if(localStorage.getItem('username') == null & localStorage.getItem('password') == null){
      this.replaceWith('login');
    }
  },
  model(){
    return {
      userlist: this.get('users.users')
    };
  }
});
