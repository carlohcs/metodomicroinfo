!function(n,w,a,o){var d={TPL:a.templates};window.app=d}(window.jQuery,window.Backbone,Handlebars,window._);


var FooterView=Backbone.View.extend({template:app.TPL.component.layout.footer.view,el:".footer-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),footerView=new FooterView;footerView.render();
!function(e){var t=Backbone.View;e.headerView=t.extend({template:e.TPL.component.layout.header.view,el:".header-region",options:{data:{}},constructor:function(){t.apply(this,arguments),this.on("render",this._setupScroll).on("render",this._setupScrollSpy).render()},_setupScroll:function(){this.$el.find("a.page-scroll").on("click",function(e){var t=$(e.currentTarget),o=t.attr("href"),n=$(o);e.preventDefault(),console.log(e),$("html, body").stop().animate({scrollTop:n.offset().top-50},500)}.bind(this))},_setupScrollSpy:function(){$("body").scrollspy({target:".navbar-fixed-top",offset:70})},render:function(){return this.$el.html(this.template(this.options.data)),this.trigger("render"),this}}),new e.headerView}(window.app);

!function(e){var t=Backbone.View;e.homeView=t.extend({template:e.TPL.component.page.home.view,el:".context-region",options:{data:{}},constructor:function(){t.apply(this,arguments),this.on("render",this._setupProcessLine).render()},_setupProcessLine:function(){function e(){var e,n,i="addClass",o=$(window);t.each(function(){e=$(this),(n=e.offset().top<o.scrollTop()+o.height()-300)||(i="removeClass"),e[i]("active").closest("li")[i]("active").find(".line")[i]("active")})}var t=$(".process-node");$(window).scroll(function(){e()})},render:function(){return this.$el.html(this.template(this.options.data)),this.trigger("render"),this}}),new e.homeView}(window.app);

//# sourceMappingURL=src/maps/application.js.map
