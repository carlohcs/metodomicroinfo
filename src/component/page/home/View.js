(function(app) {

  var
    BaseView = Backbone.View;

  app.homeView = BaseView.extend({
    template: app.TPL.component.page.home.view,
    el: '.context-region',
    options: {
      data: {}
    },
    /**
     * Construtor
     *
     * @return {void}
     */
    constructor: function() {
      BaseView.apply(this, arguments);

      this
        .on('render', this._setupProcessLine)
        .render();
    },
    /**
     * Adiciona remove classe para os itens de linha
     * de processos
     *
     * @return {void}
     */
    _setupProcessLine: function() {
      var
        $elements = $('.process-node');

      function processLine() {
        var
          method = 'addClass',
          $window = $(window),
          $element,
          inViewPort;
        
       $elements.each(function() {
          $element = $(this);

          if(!(inViewPort = $element.offset().top < $window.scrollTop() + $window.height() - 300)) {
            method = 'removeClass';
          }

           $element
            [method]("active")
            .closest("li")
            [method]("active")
            .find(".line")
            [method]("active");
        });
      }

      // Bind
      $(window).scroll(function() {
        processLine();
      });
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  });

  new app.homeView();

})(window.app);

