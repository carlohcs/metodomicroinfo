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
        $form = $('#contact-frm'),
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
        validation = new FormValidator($form.get(0), validations, options);

      // form.addEventListener('submit', function(e){
      $form.get(0).submit = function() {
        var
          serializeData = $form.serializeArray(),
          data = {};

        // event.preventDefault();

        serializeData.forEach(function(field) {
          data[field.name] = field.value;
        });

        if (validation.valid()) {
          this.sendContact(data);
        }
      }.bind(this);
    },
    sendContact: function(data) {
      var
        $contactSendButton = $('#contact-send'),
        $form = $('#contact-frm'),
        fields = '[name="name"], [name="email"], [name="phone"], [name="message"]',
        $message = $('#contact-message'),
        ContactService = app.ContactService();

      data = $.extend(data, {
        url: 'http://dev.metodomicroinfo.com.br/index.html'
      });

      function disableForm() {
        // Enviando
        $contactSendButton
          .button('loading');

        // Desabilita os campos do form
        $form
          .find(fields)
          .prop('disabled', true);
      }

      function enableForm() {
        $contactSendButton
          .button('reset');

        $form
          .find(fields)
          .removeAttr('disabled');
      }

      function scheduleHideSuccessMessage() {
        setTimeout(function() {
          $message
            .addClass('hidden')
            .removeClass('alert-success');
        }, 5e3);
      }

      disableForm();

      ContactService.doRequest(data)
        .then(function(response) {
          console.log('response -> ', response);
          $message
            .addClass('alert-success')
            .find('.message')
            .html('<i class="fa fa-check"></i> Contato enviado com sucesso! Em breve retornaremos.')
            .end()
            .removeClass('hidden');

          enableForm();
          scheduleHideSuccessMessage();
        })
        .fail(function() {
          $message
            .addClass('alert-danger')
            .find('.message')
            .html('<i class="fa fa-remove"></i> Ops! Problema ao enviar dados. Tente novamente mais tarde.')
            .end()
            .removeClass('hidden');

          enableForm();
        });
    },
    render: function() {
      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  });

  new app.homeView();

})(window.app, jQuery, window.FormValidator);