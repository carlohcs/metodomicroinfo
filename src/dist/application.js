!function(n,w,a,o){var d={TPL:a.templates};window.app=d}(window.jQuery,window.Backbone,Handlebars,window._);

var FooterView=Backbone.View.extend({template:app.TPL.component.layout.footer.view,el:".footer-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),footerView=new FooterView;footerView.render();
var HeaderView=Backbone.View.extend({template:app.TPL.component.layout.header.view,el:".header-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),headerView=new HeaderView;headerView.render();
var ContactView=Backbone.View.extend({template:app.TPL.component.page.contact.view,el:".context-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),contactView=new ContactView;
var HomeView=Backbone.View.extend({template:app.TPL.component.page.home.view,el:".context-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),homeView=new HomeView;homeView.render();

//# sourceMappingURL=src/maps/application.js.map
