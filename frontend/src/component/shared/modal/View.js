(function(namespace, $) {
  'use strict';

  var
    BaseView = Backbone.View;

  if (!namespace.modal) {
    namespace.modal = {};
  }

  namespace.modal.View = BaseView.extend({
    // TODO: Deixar modal padrão nesta view - Mover .hbs de cursos para outro
    // namespace
    template: app.TPL.component.shared.modal.view,
    initialize: function(options) {
      this.options = options;
    },

    /**
     * Construtor
     *
     * @return {void}
     */
    constructor: function() {
      BaseView.apply(this, arguments);

      // Events
      this
        .render();
    },

    render: function() {
      this.$el.html(this.template(this.options.data));
      this.trigger('render');
      return this;
    }
  });

})(app.shared = app.shared || {}, jQuery);
