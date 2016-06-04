var
  BaseView   = Backbone.View;
  HeaderView = BaseView.extend({
    template: app.TPL.component.layout.header.view,
    el: '.header-region',
    options: {
      data: {
      }
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
        .on('click', function(event) {
          var
            $target  = $(event.currentTarget),
            selector = $target.attr('href'),
            $item    = $(selector);

          event.preventDefault();

          console.log(event);

          $('html, body')
            .stop().animate({
              scrollTop: $item.offset().top - 50
          }, 500);

          this._setActiveItemMenu(selector);
          // $("#navbar").collapse('hide');
      }.bind(this));
    },
    /**
     * Define o menu ativo
     *
     * @param {Object} item
     * @return {void}
     */
    _setActiveItemMenu: function(item) {
      this.$el
        .find('.active')
        .removeClass('active')
        .end()
        .find("[data-href='" + item + "']")
        .addClass('active');
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  }),
  headerView = new HeaderView();

