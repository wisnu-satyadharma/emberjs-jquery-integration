import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jquery-wow', 'Integration | Component | jquery wow', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jquery-wow}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jquery-wow}}
      template block text
    {{/jquery-wow}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
