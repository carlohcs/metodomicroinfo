(function(namespace, $) {
  var
    baseUrl = 'http://api.metodomicroinfo.com.br/',
    Courses;

  Courses = (function() {
    return {
      /**
       * Return a course object
       *
       * @param {String} name
       */
      getCourse: function(name) {
        var
          $defer = $.Deferred(),
          then = function(data) {
            var
              parse = JSON.parse(data);

            return $defer.resolve(parse[name]).promise();
          },
          fail = function(error) {
            return $defer.reject(error).promise();
          };

        $.ajax({
            url: baseUrl + 'data/courses',
            crossDomain: true
          })
          .then(then)
          .fail(fail);

        return $defer.promise();
      }
    };
  })();

  namespace.Courses = Courses;

})(app.service = app.service || {}, jQuery);

