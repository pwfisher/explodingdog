import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({

  buildURL: (modelName, id) => `/data2/${id}.json`,

});
