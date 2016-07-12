(function(app) {
  var
    BaseView = Backbone.View;

  app.headerView = BaseView.extend({
    template: app.TPL.component.layout.header.view,
    el: '.header-region',
    options: {
      data: {}
    },
    /**
     * Construtor
     *
     * @return {void}
     */
    constructor: function() {
      // Super
      BaseView.apply(this, arguments);

      this
        .on('render', this._setupScroll)
        .on('render', this._setupScrollSpy)
        .render();
    },
    /**
     * Configura o scroll ao clicar em algum link do header
     *
     * @return {void}
     */
    _setupScroll: function() {
      // Page scrolling feature
      this.$el.find('a.page-scroll')
        .on('click', function(ev) {
          var
            $target = $(ev.currentTarget),
            selector = $target.attr('href'),
            $item = $(selector);

          ev.preventDefault();

          this._handleUrl(selector);

          $('html, body')
            .stop().animate({
              scrollTop: $item.offset().top - 50
            }, 500);

        }.bind(this));
    },
    /**
     * Ativa controle de scroll e marcação de menu
     *
     * @return {void}
     */
    _setupScrollSpy: function() {
      $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 70
      });
    },
    _handleUrl: function(link) {
      app.router.routes.homeRouter
        .navigate(link);
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  });

  new app.headerView();
})(app);

