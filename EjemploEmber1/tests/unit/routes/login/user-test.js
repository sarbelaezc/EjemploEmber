import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | login/user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:login/user');
    assert.ok(route);
  });
});
