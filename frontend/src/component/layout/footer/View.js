var
  FooterView = Backbone.View.extend({
    template: app.TPL.component.layout.footer.view,
    el: '.footer-region',
    options: {
      data: {
      }
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
    }
  }),
  footerView = new FooterView();

footerView.render();

