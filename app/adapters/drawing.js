import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({

  buildURL: () => '/data2/2000.json',

});
