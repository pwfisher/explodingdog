import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  date: attr('string'),
  key: attr('string'),
  title: attr('string'),
  ext: attr('string'),

  href: Ember.computed('key', function src() {
    const key = this.get('key');
    return `http://explodingdog.com/title/${key}.html`;
  }),

  src: Ember.computed('key', function src() {
    const key = this.get('key');
    const ext = this.get('ext') || 'png';
    return `http://explodingdog.com/drawing/${key}.${ext}`;
  }),

});
