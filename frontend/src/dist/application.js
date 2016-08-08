!function(t,r,e,n){var o={TPL:e.templates};t.extend(o,r.Events),o.start=function(){return r.history.start({pushState:!0,trigger:!0})?o.trigger("route:found"):o.trigger("route:notFound")},window.app=o}(jQuery,Backbone,Handlebars,_);
!function(e,r){"use strict";e.ContactService=function(){function e(e){var t,n=r.Deferred();return t={data:e,url:"http://api.metodomicroinfo.com.br/contact",method:"POST",dataType:"json"},r.ajax(t).then(n.resolve).fail(n.reject),n.promise()}function t(t){var n,o=r.Deferred();return n=r.when(e(t)),n.then(o.resolve).fail(o.reject),o.promise()}return{doRequest:e,send:t}}}(app.service=app.service||{},jQuery);
!function(r,e){var o,n="http://api.metodomicroinfo.com.br/";o=function(){return{getCourse:function(r){var o=e.Deferred(),t=function(e){var n=JSON.parse(e);return o.resolve(n[r]).promise()},i=function(r){return o.reject(r).promise()};return e.ajax({url:n+"data/courses",crossDomain:!0}).then(t).fail(i),o.promise()}}}(),r.Courses=o}(app.service=app.service||{},jQuery);
!function(t,i){var e=i.View;t.BaseView=e.extend({constructor:function(){e.apply(this,arguments)},initialize:function(t){e.prototype.initialize.apply(this,t),this.options=t||{},this.render()},render:function(){return this.$el.html(this.template(this.options.data)),this.trigger("render"),this}})}(app.core=app.core||{},Backbone);
!function(e,t){e.Form=function(){return{toNamedObject:function(e){var n=t(e).serializeArray(),a={};return n.forEach(function(e){a[e.name]=e.value}),a},enableForm:function(e){var n=t(e);n.find("input, select, textearea").removeAttr("disabled"),n.find(".loading-state").button("reset")},disableForm:function(e){var n=t(e);n.find("input, select, textearea").prop("disabled",!0),n.find(".loading-state").button("loading")}}}()}(app.helpers=app.helpers||{},jQuery);
!function(e,r){function a(e,r){var a;return r=r||"-",a=e.toLowerCase(),a=a.replace(/\-/g,""),a=a.replace(/\s/g,r),a=a.replace(/[áàã]/g,"a"),a=a.replace(/é/g,"e"),a=a.replace(/í/g,"i"),a=a.replace(/ó/g,"o"),a=a.replace(/ú/g,"u"),a=a.replace(/ç/g,"c")}e.Slug=a,r.registerHelper("slug",function(e){return a(e,"-")})}(app.helpers=app.helpers||{},Handlebars);
!function(t,e,i){"use strict";var o=e.core.BaseView,n="core:modal:render",s="core:modal:show",d="core:modal:hide";t.Modal=o.extend({template:e.TPL.component.shared.modal.view,constructor:function(){o.apply(this,arguments),this.$modalElement=this.$el.find(".modal"),this.listenTo(this,n,this._append),this.$modalElement.on("hidden.bs.modal",this._destroy.bind(this)),this._render()},initialize:function(t){o.prototype.initialize.apply(this,t),this.options=t||{},this.view=t.view.render()},show:function(){return this._show(),this},hide:function(){return this._hide(),this},destroy:function(){this._destroy()},_show:function(){this.$modalElement.modal("show"),this.trigger(t.Modal.constants.SHOW)},_hide:function(){this.$modalElement.modal("hide"),this.trigger(t.Modal.constants.HIDE)},_append:function(){this.$el.appendTo("body")},_destroy:function(){this.$el.remove()},_render:function(){var e;e=this.view.$el.html(),this.$modalElement.find(".modal-content").html(e),this.trigger(t.Modal.constants.RENDER)}}),i.extend(t.Modal,{constants:{RENDER:n,SHOW:s,HIDE:d}})}(app.shared=app.shared||{},app,jQuery);
!function(n){}(jQuery);
var FooterView=Backbone.View.extend({template:app.TPL.component.layout.footer.view,el:".footer-region",options:{data:{}},render:function(){this.$el.html(this.template(this.options.data))}}),footerView=new FooterView;footerView.render();
!function(e){var t=Backbone.View;e.headerView=t.extend({template:e.TPL.component.layout.header.view,el:".header-region",options:{data:{}},constructor:function(){t.apply(this,arguments),this.on("render",this._setupScroll).on("render",this._setupScrollSpy).render()},_setupScroll:function(){this.$el.find("a.page-scroll").on("click",function(e){var t=$(e.currentTarget),r=t.attr("href"),n=$(r),o=$(".landing-page").hasClass("not-found");return e.preventDefault(),o?this._handleUrl(r,!0):(this._handleUrl(r,!1),void $("html, body").stop().animate({scrollTop:n.offset().top-50},500))}.bind(this))},_setupScrollSpy:function(){$("body").scrollspy({target:".navbar-fixed-top",offset:70})},_handleUrl:function(t,r){var n=e.router.routes.HomeRouter;return r?void n.navigate(t,{trigger:!0}):n.navigate(t)},render:function(){return this.$el.html(this.template(this.options.data)),this.trigger("render"),this}}),new e.headerView}(app);
!function(e,a){"use strict";var p=a.core.BaseView;e.courses=e.courses||{},e.courses.ModalView=p.extend({template:a.TPL.component.page.courses.modal})}(app.page=app.page||{},app);
!function(o,e,t){"use strict";var n=e.core.BaseView;o.PageNotFoundView=n.extend({template:e.TPL.component.page.errors.pageNotFound,el:".context-region",constructor:function(){n.apply(this,arguments),this.on("render",this._toggleNotFoundClass)},_toggleNotFoundClass:function(){t(".landing-page").addClass("not-found")}})}(app.errors=app.errors||{},app,jQuery);
!function(o,e,u){"use strict";var t=Backbone.Router;o.HomeRouter=t.extend({routes:{"":"route:found",inicio:"route:found",metodologia:"route:found",cursos:"route:found",contato:"route:found"}}),o.routes=o.routes||{},o.routes.HomeRouter=new o.HomeRouter}(app.router=app.router||{},app,jQuery);
!function(e,n){"use strict";var a=e.core.BaseView;e.HomeView=a.extend({template:app.TPL.component.page.home.view,el:".context-region",constructor:function(){a.apply(this,arguments),this.on("render",this._setupProcessLine).on("render",this._setupCourseModal).on("render",this._handlePage).on("render",this._setupContactForm.bind(this)).render()},initialize:function(e){a.prototype.initialize.apply(this,e)},_handlePage:function(){var e=Backbone.history.fragment,a=this.$el.find("#"+e);a.length&&n("html, body").stop().animate({scrollTop:a.offset().top-50},500)},_setupProcessLine:function(){function e(){var e,o,t="addClass",i=n(window);a.each(function(){e=n(this),(o=e.offset().top<i.scrollTop()+i.height()-300)||(t="removeClass"),e[t]("active").closest("li")[t]("active").find(".line")[t]("active")})}var a=n(".process-node");n(window).scroll(function(){e()})},_setupCourseModal:function(){var e=n('a.course[data-toggle="modal"]');e.on("click",function(e){var a,o=n(this),t=o.attr("href"),i=t.replace("#","");e.preventDefault(),a=app.service.Courses.getCourse(i),a.then(function(e){var n,a,o,t;n=app.shared.Modal,a=app.page.courses.ModalView,t=new a({data:e}),o=new n({view:t}).show()})})},_setupInscriptionModal:function(){var e,a,o,t,i;e=n('a.inscription[data-toggle="modal"]'),e.on("click",function(e){a=app.shared.Modal,o=app.page.inscription.ModalView,i=new o,t=new a({view:i}).show()})},_setupContactForm:function(){var e=n("#contact-frm"),a={rules:{name:{required:!0},email:{required:!0,email:!0},phone:{required:!1,number:!0},comment:{required:!0}}},o={defaultMessages:{required:"Este campo é requerido.",email:'Informe e-mail no formato "usuario@servidor.com".',number:"Informe apenas números."}},t=new FormValidator(e.get(0),a,o);e.get(0).submit=function(){var n=e.serializeArray(),a={};n.forEach(function(e){a[e.name]=e.value}),t.valid()&&this.sendContact(a)}.bind(this)},sendContact:function(e){function a(){i.button("loading"),s.find(r).prop("disabled",!0)}function o(){i.removeClass("disabled").removeAttr("disabled").val("Enviar"),s.find(r).removeAttr("disabled")}function t(){setTimeout(function(){c.addClass("hidden").removeClass("alert-success")},5e3)}var i=n("#contact-send"),s=n("#contact-frm"),r='[name="name"], [name="email"], [name="phone"], [name="comment"]',c=n("#contact-message"),d=app.service.ContactService();a(),d.send(e).then(function(e){c.addClass("alert-success").find(".message").html('<i class="fa fa-check"></i> Contato enviado com sucesso! Em breve retornaremos.').end().removeClass("hidden"),o(),t()}).fail(function(){c.addClass("alert-danger").find(".message").html('<i class="fa fa-remove"></i> Ops! Problema ao enviar dados. Tente novamente mais tarde.').end().removeClass("hidden"),o()})}})}(app,jQuery,FormValidator);
!function(n,t,i){"use strict";var o=t.core.BaseView;n.inscription=n.inscription||{},n.inscription.ModalView=o.extend({template:t.TPL.component.page.inscription.modal,constructor:function(){o.apply(this,arguments),this.on("render",this._setup).on("render",this._setupForm).on("render",this._setupHandleForm)},_setup:function(){this.$form=this.$el.find("#inscription-frm")},_setupForm:function(){var n=this.$form;n.get(0).submit=function(){n.find('[name="name"]').addClass("error"),console.log("form -> ",n)}},_setupHandleForm:function(){$("body").on("click",".contact-send",function(n){n.preventDefault(),this.$form.trigger("submit")}.bind(this))}})}(app.page=app.page||{},app,FormValidator);
!function(e,a,n){var t=a.helpers.Form,s=a.service.ContactService;e.contact=e.contact||{},e.contact.ContactFactory=function(){return{sendContact:function(e){function a(){setTimeout(function(){r.addClass("hidden").removeClass("alert-success")},5e3)}var o=n(e),c=t.toNamedObject(o),r=(n("#contact-send"),n("#contact-message"));t.disableForm(o),s.send(c).then(function(e){r.addClass("alert-success").find(".message").html('<i class="fa fa-check"></i> Contato enviado com sucesso! Em breve retornaremos.').end().removeClass("hidden"),t.enableForm(o),a()}).fail(function(){r.addClass("alert-danger").find(".message").html('<i class="fa fa-remove"></i> Ops! Problema ao enviar dados. Tente novamente mais tarde.').end().removeClass("hidden"),t.enableForm(o)})}}}}(app.component=app.component||{},app,jQuery);

!function(o,e){var r,n;r=function(){var e=o.errors.PageNotFoundView,r=new e;r.render()},n=function(){var e=o.HomeView,r=new e;r.render()},o.on("route:notFound",r),o.on("route:found",n),o.start(),o.router.routes.HomeRouter.on("all",n)}(app,jQuery);
//# sourceMappingURL=src/maps/application.js.map
