!function(n,w,a,o){var d={TPL:a.templates};window.app=d}(window.jQuery,window.Backbone,Handlebars,window._);


var FooterView=Backbone.View.extend({template:app.TPL.component.layout.footer.view,el:".footer-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),footerView=new FooterView;footerView.render();
var BaseView=Backbone.View;HeaderView=BaseView.extend({template:app.TPL.component.layout.header.view,el:".header-region",options:{data:{}},constructor:function(){BaseView.apply(this,arguments),this.on("render",this._setupScroll).render()},_setupScroll:function(){this.$el.find("a.page-scroll").on("click",function(e){var t=$(e.currentTarget),i=t.attr("href"),n=$(i);e.preventDefault(),console.log(e),$("html, body").stop().animate({scrollTop:n.offset().top-50},500),this._setActiveItemMenu(i)}.bind(this))},_setActiveItemMenu:function(e){this.$el.find(".active").removeClass("active").end().find("[data-href='"+e+"']").addClass("active")},render:function(){return this.$el.html(this.template(this.options.data)),this.trigger("render"),this}}),headerView=new HeaderView;

var HomeView=Backbone.View.extend({template:app.TPL.component.page.home.view,el:".context-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),homeView=new HomeView;homeView.render();

//# sourceMappingURL=src/maps/application.js.map
