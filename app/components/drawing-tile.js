import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['drawing-tile'],

  attributeBindings: ['style'],

  style: Ember.computed('width', function style() {
    const w = this.get('width').toString().replace(/\D/g, '');
    return Ember.String.htmlSafe(`width: ${w}px`);
  }),

});
