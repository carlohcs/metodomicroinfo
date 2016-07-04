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
      var
        $promise;

      console.log('Curso -> ', name);

      $promise = app.service.getCourse(name);
      $promise
        .then(function(data) {

          console.log("data: ", data);
        });
    }
  });

  var appRouter = new app.HomeRouter();
  app.start();

// Just for test
// Backbone.history.navigate('curso/operador-de-computador-master', {trigger: true});
})(app, jQuery);
