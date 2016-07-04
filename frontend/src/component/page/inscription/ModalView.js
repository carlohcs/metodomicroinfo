(function(namespace, app) {
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

      this.listenTo(this, 'all', function(a, b){ console.log(a, b); });
      console.log('this -> ', this);
      this
        .on('render', this._setupForm);
    },

    /**
     * Set configurations for form
     *
     * @return {void}
     */
    _setupForm: function() {
      var
        $form = $('#inscription-frm'),
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
        validation = new FormValidator($form.get(0), validations, options),
        ContactFactory = app.component.contact.ContactFactory();
      alert("OI");
console.log("Form -> ", form);
      $form.get(0).submit = function(e) {
        e.preventDefault();

        if (validation.valid()) {
          ContactFactory.sendContact(form);
        }
      };
    }
  });

})(app.page = app.page || {}, app);
