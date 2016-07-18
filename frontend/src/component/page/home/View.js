(function(namespace, $) {
  'use strict';

  var
    BaseView = namespace.core.BaseView;

  namespace.HomeView = BaseView.extend({
    template: app.TPL.component.page.home.view,
    el: '.context-region',

    /**
     * Construtor
     *
     * @return {void}
     */
    constructor: function() {
      BaseView.apply(this, arguments);

      // Events
      this
        .on('render', this._setupProcessLine)
        .on('render', this._setupCourseModal)
        .on('render', this._handlePage)
        // .on('render', this._setupInscriptionModal)
        .on('render', this._setupContactForm.bind(this))
        .render();
    },

    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, options);

      /*var
        fragment = Backbone.history.fragment,
        router = namespace.router.routes.homeRouter;*/

      // app.on('route:found', this._toggleNotFoundClass.bind(this, false));
      // app.on('route:notFound', this._toggleNotFoundClass.bind(this, true));
    },

    //_toggleNotFoundClass: function(toggle) {
    //  $('.landing').toggleClass('not-found', toggle);
    //},

    _handlePage: function() {
      var
        url = Backbone.history.fragment,
        $element = this.$el.find('#' + url);

      if ($element.length) {
        $('html, body')
          .stop().animate({
            scrollTop: $element.offset().top - 50
          }, 500);
      }
    },

    /**
     * Add remove classes to each itens from a row of processing
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
     * Set configurations for modal courses
     *
     * @return {void}
     */
    _setupCourseModal: function() {
      var
        $toggleModal = $('a.course[data-toggle="modal"]');

      $toggleModal.on('click', function(e) {
        var
          $el = $(this),
          target = $el.attr('href'),
          href = target.replace('#', ''),
          $promise;

        e.preventDefault();

        $promise = app.service.Courses.getCourse(href);
        $promise
          .then(function(data) {
            var
              Modal,
              CoursesModal,
              modal,
              coursesModal;

            Modal = app.shared.Modal;
            CoursesModal = app.page.courses.ModalView;

            coursesModal = new CoursesModal({
              data: data
            });
            modal = new Modal({
                view: coursesModal
              })
              .show();
          });
      });
    },

    /**
     * Set configurations for the inscription modal
     *
     * @return {void}
     */
    _setupInscriptionModal: function() {
      var
        $toggleModal,
        Modal,
        InscriptionModal,
        modal,
        inscriptionModal;

      $toggleModal = $('a.inscription[data-toggle="modal"]');

      $toggleModal.on('click', function(e) {

        Modal = app.shared.Modal;
        InscriptionModal = app.page.inscription.ModalView;

        inscriptionModal = new InscriptionModal();
        modal = new Modal({
            view: inscriptionModal
          })
          .show();
      });
    },

    /**
     * Set configurations for form
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
            comment: {
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

      $form.get(0).submit = function() {
        var
          serializeData = $form.serializeArray(),
          data = {};

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
        fields = '[name="name"], [name="email"], [name="phone"], [name="comment"]',
        $message = $('#contact-message'),
        ContactService = app.ContactService();

      function disableForm() {
        $contactSendButton
          .button('loading');

        $form
          .find(fields)
          .prop('disabled', true);
      }

      function enableForm() {
        $contactSendButton
          .removeClass('disabled')
          .removeAttr('disabled')
          .val('Enviar');

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

      ContactService.send(data)
        .then(function(response) {
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
    }
  });

})(app, jQuery, FormValidator);

