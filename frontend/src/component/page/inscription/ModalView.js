(function(namespace, app, FormValidator) {
  'use strict';

  var
    BaseView = app.core.BaseView;

  namespace.inscription = namespace.inscription || {};

  namespace.inscription.ModalView = BaseView.extend({
    template: app.TPL.component.page.inscription.modal,

    /**
     * Constructor
     *
     * @return {void}
     */
    constructor: function() {
      // Super
      BaseView.apply(this, arguments);

      this
        .on('render', this._setup)
        .on('render', this._setupForm)
        .on('render', this._setupHandleForm);
    },

    _setup: function() {
      this.$form = this.$el.find('#inscription-frm');
    },

    /**
     * Set configurations for form
     *
     * @return {void}
     */
    _setupForm: function() {
      var
        $form = this.$form,
        validations = {
          rules: {
            name: {
              required: true
            },
            email: {
              required: true,
              email: true
            }/*,
            phone: {
              required: false,
              number: true
            },
            comment: {
              required: true
            }*/
          }
        },
        options = {
          defaultMessages: {
            required: 'Este campo é requerido.',
            email: 'Informe e-mail no formato "usuario@servidor.com".',
            number: 'Informe apenas números.'
          }
        },
        validation;

        // validation = new FormValidator($form.get(0), validations, options);

      $form.get(0).submit = function() {
        //if (validation.valid()) {
        //  var
        //    ContactFactory = app.component.contact.ContactFactory();

        //  ContactFactory.sendContact(form);
        //}

$form.find('[name="name"]').addClass('error');
console.log('form -> ', $form);
      };
    },
    _setupHandleForm: function() {
      $('body').on('click', '.contact-send', function(e) {
        e.preventDefault();

        this.$form.trigger('submit');
      }.bind(this));
    }
  });

})(app.page = app.page || {}, app, FormValidator);

