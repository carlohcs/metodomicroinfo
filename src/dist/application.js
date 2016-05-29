!function(n,w,a,o){var d={TPL:a.templates};window.app=d}(window.jQuery,window.Backbone,Handlebars,window._);
var Item=Backbone.View.extend({template:app.TPL.component.page.header.view,el:".app-main",options:{data:{name:"Carlos Henriquedo"}},render:function(){this.$el.html(this.template(this.options.data))}}),item=new Item;item.render();
//# sourceMappingURL=src/maps/application.js.map
