(function(namespace, app, $) {

  var
    FormHelper     = app.helpers.Form,
    ContactService = app.service.ContactService;

  namespace.contact = namespace.contact || {};

  namespace.contact.ContactFactory = (function() {
    return {
      sendContact: function(form) {
        var
          $form = $(form),
          data  = FormHelper.toNamedObject($form),
          $contactSendButton = $('#contact-send'),
          $message = $('#contact-message');

        function scheduleHideSuccessMessage() {
          setTimeout(function() {
            $message
              .addClass('hidden')
              .removeClass('alert-success');
          }, 5e3);
        }

        FormHelper.disableForm($form);

        ContactService.send(data)
          .then(function(response) {
            $message
              .addClass('alert-success')
              .find('.message')
              .html('<i class="fa fa-check"></i> Contato enviado com sucesso! Em breve retornaremos.')
              .end()
              .removeClass('hidden');

            FormHelper.enableForm($form);
            scheduleHideSuccessMessage();
          })
          .fail(function() {
            $message
              .addClass('alert-danger')
              .find('.message')
              .html('<i class="fa fa-remove"></i> Ops! Problema ao enviar dados. Tente novamente mais tarde.')
              .end()
              .removeClass('hidden');

            FormHelper.enableForm($form);
          });
      }
    };
  });

})(app.component = app.component || {}, app, jQuery);
