import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

  caption: attr('string'),
  date: attr('string'),
  img: attr('string'),
  key: attr('string'),
  title: attr('string'),

  href: Ember.computed('key', function src() {
    const key = this.get('key');
    return `http://explodingdog.com/title/${key}.html`;
  }),

  src: Ember.computed('key', function src() {
    const img = this.get('img');
    return `http://explodingdog.com/drawing/${img}`;
  }),

});
