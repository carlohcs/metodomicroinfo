(function($, Backbone, Handlebars, _) {
  var
    app = {
      TPL: Handlebars.templates
    };

    // Control app routes
    app.start = function() {
      Backbone.history.start({
        pushState: true,
        trigger: true
      });
    };

  window.app = app;


})(window.jQuery, window.Backbone, Handlebars, window._);

