(function(namespace, $) {

  namespace.Form = function() {
    return {
      /**
       * Return a {'prop': 'value}
       *
       * @param  {HTMLElement} form
       * @return {void}
       */
      toNamedObject: function(form) {
        var
          serializeData = $(form).serializeArray(),
          data = {};

        serializeData.forEach(function(field) {
          data[field.name] = field.value;
        });

        return data;
      },

      /**
       * Enable inputs from a form
       *
       * @param  {HTMLElement} form
       * @return {void}
       */
      enableForm: function(form) {
        var
          $form = $(form);

        $form
          .find('input, select, textearea')
          .removeAttr('disabled');

        $form
          .find('.loading-state')
          .button('reset');
      },

      /**
       * Disable inputs from a form
       *
       * @param  {HTMLElement} form
       * @return {void}
       */
      disableForm: function(form) {
        var
          $form = $(form);

        $form
          .find('input, select, textearea')
          .prop('disabled', true);

        $form
          .find('.loading-state')
          .button('loading');
      }
    };
  }();

})(app.helpers = app.helpers || {}, jQuery);
