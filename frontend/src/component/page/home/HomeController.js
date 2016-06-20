(function(app, $) {
  'use strict';

  var
    BaseRouter = Backbone.Router;

  function getCourse(name) {
    var
      defer = $.Deferred(),
      then = function(data) {
        data = JSON.parse(data);

        return $defer.resolve(data[name]);
      };

    $.ajax({
        url: '/component/page/courses/courses.json'
      })
      .then(then)
      .fail(defer.fail);

    return defer.promise();
  }

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

      $promise = getCourse(name);
      promise
        .then(function() {

          console.log("arguments: ", arguments);
        });
    }
  });

  var appRouter = new app.HomeRouter();
  app.start();

})(window.app, jQuery);