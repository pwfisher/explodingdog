import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({

  buildURL: () => '/data/2000.json',

});
