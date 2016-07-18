(function($, Backbone, Handlebars, _) {
  var
    app = {
      TPL: Handlebars.templates
    };

  // Extend Events from Backbone Events
  $.extend(app, Backbone.Events);

  // Control app routes
  app.start = function() {
    if (!Backbone.history.start({
      pushState: true,
      trigger: true
    })) {
      return app.trigger('route:notFound');
    }

    return app.trigger('route:found');
  };

  window.app = app;

})(jQuery, Backbone, Handlebars, _);

