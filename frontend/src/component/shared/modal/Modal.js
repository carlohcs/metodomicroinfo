(function(namespace, app, $) {
  'use strict';

  var
    BaseView = app.core.BaseView,
    RENDER   = 'core:modal:render',
    SHOW     = 'core:modal:show',
    HIDE     = 'core:modal:hide';

  namespace.Modal = BaseView.extend({
    template: app.TPL.component.shared.modal.view,

    /**
     * Construtor
     *
     * @return {void}
     */
    constructor: function() {
      BaseView.apply(this, arguments);

      this.$modalElement = this.$el.find('.modal');

      // Listeners
      this
        .listenTo(this, RENDER, this._append);

      this.$modalElement
        .on('hidden.bs.modal', this._destroy.bind(this));

      // Events
      this
        ._render();
    },

    /**
     * Initialize options before defined
     *
     * @return {void}
     */
    initialize: function(options) {
      BaseView.prototype.initialize.apply(this, options);

      this.options = options || {};

      // Children view
      this.view    = options.view.render();
    },

    // API

    /**
     * Show modal
     *
     * @return {Object}
     */
    show: function() {
      this._show();
      return this;
    },

    /**
     * Hide modal
     *
     * @return {Object}
     */
    hide: function() {
      this._hide();
      return this;
    },

    /**
     * Destroy modal
     *
     * @return {void}
     */
    destroy: function() {
      this._destroy();
    },

    // Private Methods

    _show: function() {
      this.$modalElement
        .modal('show');

      // Trigger a event
      this.trigger(namespace.Modal.constants.SHOW);
    },

    _hide: function() {
      this.$modalElement
        .modal('hide');

      // Trigger a event
      this.trigger(namespace.Modal.constants.HIDE);
    },

    /**
     * Append modal to the body
     *
     * @return {void}
     */
    _append: function() {
      this.$el
        .appendTo('body');
    },

    /**
     * Remove modal from DOM
     *
     * @return {void}
     */
    _destroy: function() {
      this.$el
        .remove();
    },

    /**
     * Prepare content to be rendered
     *
     * @return {void}
     */
    _render: function() {
      var
        template,
        view,
        renderedView;

      view = this.view.$el.html();

      // Append the child view to the modal content
      this.$modalElement.find('.modal-content')
        .html(view);

      this.trigger(namespace.Modal.constants.RENDER);
    }
  });

  // Constants
  $.extend(namespace.Modal, {
    constants: {
      RENDER: RENDER,
      SHOW  : SHOW,
      HIDE  : HIDE
    }
  });

})((app.shared = app.shared || {}), app, jQuery);
