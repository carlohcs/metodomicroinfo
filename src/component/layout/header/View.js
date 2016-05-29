var
  HeaderView = Backbone.View.extend({
    template: app.TPL.component.layout.header.view,
    el: '.header-region',
    options: {
      data: {
      }
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
    }
  }),
  headerView = new HeaderView();

headerView.render();

