import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStory() {
      var params = {
        headline: this.get('headline'),
        content: this.get('content'),
        author: this.get('author'),
        category: this.get('category'),
        picture: this.get('picture'),
      };
      this.sendAction('saveStory', params);
    }
  }
});
