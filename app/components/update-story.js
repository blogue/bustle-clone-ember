import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {
      var params = {
        headline: this.get('headline1'),
        content: this.get('content1'),
        author: this.get('author1'),
        category: this.get('category1'),
        picture: this.get('picture1'),
        };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
