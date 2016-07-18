(function(namespace, app, $) {
    'use strict';

    var
      BaseView = app.core.BaseView;

    namespace.PageNotFoundView = BaseView.extend({
      template: app.TPL.component.page.errors.pageNotFound,
      el: '.context-region',

      /**
       * Constructor
       *
       * @return {void}
       */
      constructor: function() {
        BaseView.apply(this, arguments);

        this
          .on('render', this._toggleNotFoundClass);
      },

      _toggleNotFoundClass: function() {
        $('.landing-page').addClass('not-found');
      }
    });

})(app.errors = app.errors || {}, app, jQuery);

