(function(namespace, Backbone) {

  var
    BaseView = Backbone.View;

  namespace.BaseView = BaseView.extend({

    /**
     * Constructor
     *
     * @return {void}
     */
    constructor: function() {
      BaseView.apply(this, arguments);
    },

    /**
     * Set data to the view
     *
     * @param  {Array} options
     * @return {void}
     */
    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, options);

      this.options = options || {};

      // Events
      this
        .render();
    },

    /**
     * Render a view with your template and data
     *
     * @return {void}
     */
    render: function() {

      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  });

})(app.core = app.core || {}, Backbone);

