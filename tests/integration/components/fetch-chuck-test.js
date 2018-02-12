import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fetch-chuck', 'Integration | Component | fetch chuck', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fetch-chuck}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fetch-chuck}}
      template block text
    {{/fetch-chuck}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
