(function(app, $) {
    'use strict';

    var
      BaseRouter = Backbone.Router;

    app.HomeRouter = BaseRouter.extend({
      routes: {
        'curso/:name': 'getCourse'
      },

      /**
       * Return the course by name
       *
       * @param  {String} name
       * @return {void}
       */
      getCourse: function(name) {
        console.log('Curso -> ', name);
      }
    });

  var appRouter = new app.HomeRouter();
  app.start();

})(window.app, jQuery);
