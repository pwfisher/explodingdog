import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const drawings = payload.map((o, i) => ({
      id: i,
      date: o.date,
      ext: o.ext,
      img: o.img,
      key: o.key,
      title: o.title,
    }));
    const newPayload = {
      drawings,
    };
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

});
