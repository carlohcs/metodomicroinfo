(function(app, $) {
  'use strict';

  app.ContactService = (function() {

    /**
     * Do a request to server
     *
     * @param {Object} data
     */
    function doRequest(data) {
      var
        $defer = $.Deferred();

      $.ajax(data)
        .then($defer.resolve)
        .fail($defer.reject);

      return $defer.promise();
      // return $defer.reject();
    }

    function testDoRequest() {
      var
        data,
        promise;

      data = {
        url: 'http://dev.metodomicroinfo.com.br/index.html'
      };

      promise = doRequest(data);
      promise
        .then(function(message) {
          console.log('message -> ', message);
        });
    }

    return {
      doRequest: doRequest,
      testDoRequest: testDoRequest
    };
  });

})(app, jQuery);