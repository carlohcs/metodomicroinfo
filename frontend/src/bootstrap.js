(function(app, $) {

  var
    routeNotFound,
    routeFound;

  routeNotFound = function() {
    var
      View = app.errors.PageNotFoundView,
      view = new View();

    view.render();
  };

  routeFound = function() {
    var
      View = app.HomeView,
      view = new View();

    view.render();
  };

  // Pages access directly
  app.on('route:notFound', routeNotFound);
  app.on('route:found', routeFound);

  app.start();

  app.router.routes.HomeRouter.on('all', routeFound); //route:found

})(app, jQuery);

