(function(namespace, app) {
  'use strict';

  var
    BaseView = app.core.BaseView;

  namespace.courses = namespace.courses || {};

  namespace.courses.ModalView = BaseView.extend({
    template: app.TPL.component.page.courses.modal
  });

})(app.page = app.page || {}, app);
