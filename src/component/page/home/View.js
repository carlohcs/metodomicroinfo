var
  HomeView = Backbone.View.extend({
    template: app.TPL.component.page.home.view,
    el: '.context-region',
    options: {
      data: {
      }
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
    }
  }),
  homeView = new HomeView();

homeView.render();

