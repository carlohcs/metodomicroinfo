(function(namespace, app, $) {
  'use strict';

  var
    BaseRouter = Backbone.Router;

  namespace.HomeRouter = BaseRouter.extend({
    routes: {
      // 'curso/:name': 'getCourse',
      // '*page': 'showPage',
      '': 'route:found',
      'inicio': 'route:found',
      'metodologia': 'route:found',
      'cursos': 'route:found',
      'contato': 'route:found'
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
  namespace.routes.HomeRouter = new namespace.HomeRouter();

  // Just for test
  // Backbone.history.navigate('curso/operador-de-computador-master', {trigger: true});
})(app.router = app.router || {}, app, jQuery);

