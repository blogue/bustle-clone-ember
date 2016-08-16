import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  picture: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  category: DS.attr()
});
