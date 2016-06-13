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
    }

    /**
     * Send the contact to server
     *
     * @param  {Object} data
     * @return {jQuery.Deferred}
     */
    function send(data) {
      var
        $defer = $.Deferred(),
        promise;

      data = $.extend(data, {
        url: 'http://dev.metodomicroinfo.com.br/index.html'
      });

      promise = doRequest(data);
      promise
        .then($defer.resolve)
        .fail($defer.reject);

      return $defer.promise;
    }

    return {
      doRequest: doRequest,
      send: send
    };
  });

})(app, jQuery);
