var
  Item = Backbone.View.extend({
    template: app.TPL.component.page.header.view,
    el: '.app-main',
    options: {
      data: {
        name: 'Carlos Henriquedo'
      }
    },
    render: function() {
      // >console.log("AASDAS");
      this.$el.html(this.template(this.options.data));
    }
  }),
  item = new Item();

item.render();

