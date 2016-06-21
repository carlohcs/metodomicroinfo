(function(app, $) {
  var
    baseUrl = 'http://api.metodomicroinfo.com.br/';

  function getCourse(name) {
    var
      $defer = $.Deferred(),
      then = function(data) {
        data = JSON.parse(data);

        return $defer.resolve(data[name]).promise();
      },
      fail = function(error) {

      };

    $.ajax({
        url: baseUrl + 'data/courses'
      })
      .then(then)
      .fail(fail);

    return $defer.promise();
  }

  app.service = app.service || {};
  app.service.getCourse = getCourse;
})(window.app, jQuery);

