import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', function() {
    this.route('user');
  });
  this.route('registrar-persona');
  this.route('calculadora');
  this.route('listar-personas');
});

export default Router;
