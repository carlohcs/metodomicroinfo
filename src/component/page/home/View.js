(function(app, $) {
  'use strict';

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

      // Events
      this
      // .on('render', this._setupUI.bind(this))
        .on('render', this._setupProcessLine)
        .on('render', this._setupContactForm.bind(this))
        .render();
    },
    _setupUI: function() {
      // UI
      this.ui = {
        contactForm: this.$el.find('#contact-frm')
      };
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

          if (!(inViewPort = $element.offset().top < $window.scrollTop() + $window.height() - 300)) {
            method = 'removeClass';
          }

          $element
            [method]("active")
            .closest("li")[method]("active")
            .find(".line")[method]("active");
        });
      }

      // Bind
      $(window).scroll(function() {
        processLine();
      });
    },
    /**
     * Define configurações do form
     *
     * @return {void}
     */
    _setupContactForm: function() {
      var
        form = document.getElementById('contact-frm'),
        validations = {
          rules: {
            name: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            phone: {
              required: false,
              number: true
            },
            message: {
              required: true
            }
          }
        },
        options = {
          defaultMessages: {
            required: 'Este campo é requerido.',
            email: 'Informe e-mail no formato "usuario@servidor.com".',
            number: 'Informe apenas números.'
          }
        },
        validation = new FormValidator(form, validations, options);

      // form.addEventListener('submit', function(e){
      form.submit = function(){
        // e.preventDefault();

        if(validation.valid()) {
          var
            data = {
              url: 'http://dev.metodomicroinfo.com.br/index.html'
            },
            ContactService = app.ContactService();

          ContactService.doRequest(data)
            .then(function(response){
              console.log('response -> ', response);
              debugger;
            });
        }
      };
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  });

  new app.homeView();

})(window.app, jQuery, window.FormValidator);

