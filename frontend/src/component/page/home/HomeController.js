(function(namespace, app, $) {
  'use strict';

  var
    BaseRouter = Backbone.Router;

  namespace.HomeRouter = BaseRouter.extend({
    routes: {
      // 'curso/:name': 'getCourse',
      '*page': 'showPage'
    },

    /**
     * Return the course by name
     *
     * @param  {String} name
     * @return {void}
     */
    //getCourse: function(name) {
    //  var
    //    $promise;

    //  console.log('Curso -> ', name);

    //  $promise = app.service.Courses.getCourse(name);
    //  $promise
    //    .then(function(data) {

    //      console.log("data: ", data);
    //    });
    //}
  });

  namespace.routes = namespace.routes || {};
  namespace.routes.homeRouter = new namespace.HomeRouter();
  app.start();

  // Just for test
  // Backbone.history.navigate('curso/operador-de-computador-master', {trigger: true});
})(app.router = app.router || {}, app, jQuery);

