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
        $defer = $.Deferred(),
        dataSend;

      dataSend = {
        data: data,
        url: 'http://api.metodomicroinfo.com.br/contact',
        method: 'POST',
        dataType: 'json'
      };

      $.ajax(dataSend)
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
        $promise;

      $promise = $.when(doRequest(data));
      $promise
        .then($defer.resolve)
        .fail($defer.reject);

      return $defer.promise();
    }

    return {
      doRequest: doRequest,
      send: send
    };
  });

})(app, jQuery);
