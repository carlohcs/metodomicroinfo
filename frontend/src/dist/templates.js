this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["component"] = this["Handlebars"]["templates"]["component"] || {};
this["Handlebars"]["templates"]["component"]["layout"] = this["Handlebars"]["templates"]["component"]["layout"] || {};
this["Handlebars"]["templates"]["component"]["layout"]["footer"] = this["Handlebars"]["templates"]["component"]["layout"]["footer"] || {};
this["Handlebars"]["templates"]["component"]["layout"]["footer"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- <section id=\"contact\" class=\"gray-section contact\">\n    <div class=\"container\">\n        <div class=\"row m-b-lg\">\n            <div class=\"col-lg-12 text-center\">\n                <div class=\"navy-line\"></div>\n                <h1>Contact Us</h1>\n                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>\n            </div>\n        </div>\n        <div class=\"row m-b-lg\">\n            <div class=\"col-lg-3 col-lg-offset-3\">\n                <address>\n                    <strong><span class=\"navy\">MÉTODO MICROINFO</span></strong><br/>\n                    Rua João Gonzaga de Menezes nº223<br/>\n                    Centro, Adustina - BA, 48435-00<br/>\n                    <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n                </address>\n            </div>\n            <div class=\"col-lg-4\">\n                <p class=\"text-color\">\n                    Nossos cursos são 100% narrados por professores,\n                    como se fosse uma aula VIP, o que torna diferente dos\n                    demais sistemas sistemas, que muitas vezes fazem uso\n                    de \"locuções artificiais\" maçantes e com pouca qualidade.\n                </p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <a href=\"mailto:test@email.com\" class=\"btn btn-primary\">Envie-nos um e-mail</a>\n                <p class=\"m-t-sm\">\n                 Ou siga-nos em nossas redes sociais\n                </p>\n                <ul class=\"list-inline social-icon\">\n                    <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                    </li>\n                    <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                    </li>\n                    <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg\">\n                <p><strong>&copy; 2015 Company Name</strong><br/> consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>\n            </div>\n        </div>\n    </div>\n</section>\n-->\n\n    <!--===Fale conosco===-->\n\n";
},"useData":true});
this["Handlebars"]["templates"]["component"]["layout"]["header"] = this["Handlebars"]["templates"]["component"]["layout"]["header"] || {};
this["Handlebars"]["templates"]["component"]["layout"]["header"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"header\">\n    <div class=\"navbar-wrapper\">\n            <nav class=\"navbar navbar-default navbar-fixed-top navbar-scroll\" role=\"navigation\">\n                <div class=\"container\">\n                    <div class=\"navbar-header page-scroll\">\n                        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                        <a class=\"navbar-brand\" href=\"/\">\n                            <img src=\"src/img/logo.jpg\" class=\"brand\" alt=\"Método MicroInfo - Ensino profissionalizante\" />\n                        </a>\n                    </div>\n                    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li class=\"active\"><a class=\"page-scroll\" href=\"#inicio\">Início</a></li>\n                            <li class=\"\"><a class=\"page-scroll\" href=\"#metodologia\">Metodologia</a></li>\n                            <li class=\"\"><a class=\"page-scroll\" href=\"#cursos\">Cursos</a></li>\n                            <li class=\"\"><a class=\"page-scroll\" href=\"#inscricao\">Inscrição</a></li>\n                            <li class=\"\"><a class=\"page-scroll\" href=\"#contato\">Contato</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["component"]["page"] = this["Handlebars"]["templates"]["component"]["page"] || {};
this["Handlebars"]["templates"]["component"]["page"]["courses"] = this["Handlebars"]["templates"]["component"]["page"]["courses"] || {};
this["Handlebars"]["templates"]["component"]["page"]["courses"]["modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "    <div class=\"course-descriptions\" data-toggle=\"collapse\" href=\"#"
    + alias2((helpers.slug || (depth0 && depth0.slug) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"slug","hash":{},"data":data}))
    + "\">\n        <h3>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n        <h4>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h4>\n        <br />\n    </div>\n    <div class=\"modal-body course-content collapse\" id=\""
    + alias2((helpers.slug || (depth0 && depth0.slug) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"slug","hash":{},"data":data}))
    + "\">\n        <p>Conteúdo programático:</p>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.classes : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <hr />\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <p><strong>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</strong></p>\n            <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n            <hr />\n";
},"3":function(depth0,helpers,partials,data) {
    return "                    <li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"about-course-modal animated fadeIn\">\n    <div class=\"modal-header course-modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <i class=\"fa fa-laptop modal-icon\"></i>\n        <h3 class=\"modal-title\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n    </div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Fechar</button>\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["component"]["page"]["home"] = this["Handlebars"]["templates"]["component"]["page"]["home"] || {};
this["Handlebars"]["templates"]["component"]["page"]["home"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"inicio\" class=\"container-product-description\">\n    <div class=\"overlay\"></div>\n	<div class=\"container header-hero\">\n		<div class=\"row\">\n			<div class=\"col-md-10 col-md-offset-1\">\n				<h1 class=\"animated fadeIn\">\n					Esteja pronto para o futuro.\n				</h1>\n				<h2 class=\"animated fadeIn\">A MICROINFO é seu parceiro para que você alcance suas habilidades.</h2>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-6 col-md-offset-3 container-product-description-info\">\n				<div class=\"service animated fadeIn\">\n					<i class=\"fa fa-question fa-3x color-orange\"></i>\n					<h2>O que é e como funciona?</h2>\n					<p>Somos uma plataforma pelo qual você pode estudar de maneira clara, rápida e objetiva.</p>\n				</div>\n			</div>\n		</div>\n	</div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h1 class=\"text-emphasys open-inscriptions\">Matrículas <span class=\"color-orange\">abertas!</span></h1>\n        </div>\n    </div>\n</div>\n\n<section id=\"metodologia\" class=\"process features\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <div class=\"navy-line\"></div>\n            <h1>Metodologia</h1>\n            <p class=\"color-white\">Nós garantimos o melhor conteúdo e a melhor abordagem.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"process-flow\">\n            <ol class=\"list-unstyled\">\n                <li class=\"\">\n                    <div class=\"process-node\">\n                        <i class=\"fa fa-comments\"></i>\n                    </div>\n                    <h4>Cursos 100% narradas e individuais</h4>\n                    <p>Totalmente diferente de outros outros sistemas existentes, respeitando os diferentes ritmos de aprendizado.</p>\n                    <div class=\"line\">\n                      <div class=\"progress\"></div>\n                    </div>\n                </li>\n                <li class=\"\">\n                    <div class=\"process-node\">\n                        <i class=\"fa fa-pencil\"></i>\n                    </div>\n                    <h4>Foco nas atividades</h4>\n                    <p>O aluno assiste à lição narrada, vendo a execução dos comandos e ouvindo a explicação do professor.</p>\n                    <div class=\"line\">\n                      <div class=\"progress\"></div>\n                    </div>\n                </li>\n                <li class=\"\">\n                    <div class=\"process-node\">\n                        <i class=\"fa fa-lightbulb-o\"></i>\n                    </div>\n                    <h4>Prática de exercícios</h4>\n                    <p>Após assistir, o aluno faz os exercícios da apostila referentes à lição que acabou de assitr.</p>\n                    <div class=\"line \">\n                        <div class=\"progress\"></div>\n                    </div>\n                </li>\n                <li class=\"\">\n                    <div class=\"process-node\">\n                        <i class=\"fa fa-question\"></i>\n                    </div>\n                    <h4>Não entendeu? Assista novamente quantas vezes quiser!</h4>\n                    <p>Ao fazer os exercícios e ter dúvidas, o aluno poderá assistir à lição novamente quantas vezes desejar.</p>\n                    <div class=\"line \">\n                        <div class=\"progress\"></div>\n                    </div>\n                </li>\n                <li class=\"\">\n                    <div class=\"process-node\">\n                        <i class=\"fa fa-thumbs-up\"></i>\n                    </div>\n                    <h4>Término de exercícios e avanço</h4>\n                    <p>Ao término dos exercícios, o instrutor da sala fará a correção. Se o exercícios estiverem corretos, o aluno segue para a próxima lição.</p>\n                </li>\n            </ol>\n        </div>\n    </div>\n</section>\n\n<section id=\"cursos\" class=\"features switch-courses\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <div class=\"navy-line\"></div>\n                <h1>Escolha um módulo de cursos</h1>\n                Ou crie um pacote personalizado com os cursos do seu interesse\n                <p> </p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n                <h2>Design Gráfico</h2>\n                <i class=\"fa fa-bar-chart big-icon pull-right\"></i>\n                <p>Neste módulo a criatividade é a palavra-chave! Aprenda a utilizar as mais modernas ferramentas para criação ou edição de imagens.</p>\n                <a href=\"#design-grafico\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm course\">Saiba mais</a>\n            </div>\n            <div class=\"col-lg-5 features-text\">\n                <h2>Operador de Caixa</h2>\n                <i class=\"fa fa-bolt big-icon pull-right\"></i>\n                <p>Neste módulo é apresentador a rotina de um comércio como pagamentos, uso do software de automação comercial, além de análise de concessão de crédito.</p>\n                <a href=\"#caixa-e-crediarista\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm pull-right course\">Saiba mais</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n                <h2>Operador de Computador</h2>\n                <i class=\"fa fa-bar-chart big-icon pull-right\"></i>\n                <p>A praticidade do Windows unida à versatilidade do Office! Para iniciantes ou para quem deseja aprofundar seus conhecimentos. Disponível também na versão MASTER.</p>\n                <a href=\"#operador-de-computador-master\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm course\">Saiba mais</a>\n            </div>\n            <div class=\"col-lg-5 features-text\">\n                <h2>Logística Integrada</h2>\n                <i class=\"fa fa-bolt big-icon pull-right\"></i>\n                <p>Com este módulo, você estará apto a ingressar no mercado, usando técnicas para redução de custos e aumento de lucros de uma empresa.</p>\n                <a href=\"#logistica-integrada\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm pull-right course\">Saiba mais</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n                <h2>Profissional CAD</h2>\n                <i class=\"fa fa-clock-o big-icon pull-right\"></i>\n                <p>Conheça os softwares mais usados para projetos de desenhos técnicos, tais como confecções de plantas e projetos diversos. Bem-vindo a este módulo!</p>\n                <a href=\"#profissional-cad\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm course\">Saiba mais</a>\n            </div>\n            <div class=\"col-lg-5 features-text\">\n                <h2>Inglês Inteligente</h2>\n                <i class=\"fa fa-users big-icon pull-right\"></i>\n                <p>Neste módulo você estará apto para conversar inglês, temos uma metodologia diferenciada onde o aluno é o centro das atenções.</p>\n                <a href=\"#ingles-inteligente\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm pull-right course\">Saiba mais</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n                <h2>Assistente Contábil</h2>\n                <i class=\"fa fa-clock-o big-icon pull-right\"></i>\n                <p>Neste módulo você irá descobrir que é possível descomplicar cálculos trabalhistas e contábeis, com exemplos práticos de fácil entendimento.</p>\n                <a href=\"#assistente-contabil\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm course\">Saiba mais</a>\n            </div>\n            <div class=\"col-lg-5 features-text\">\n                <h2>Secretário Administrativo</h2>\n                <i class=\"fa fa-users big-icon pull-right\"></i>\n                <p>Adquira habilidades para uma excelente comunicação escrita e pessoal, para a organização do ambiente de trabalho e desvende os cálculos matemáticos do dia a dia empresarial.</p>\n                <a href=\"#secretariado-administrativo\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm pull-right course\">Saiba mais</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n                <h2>Conhecimentos Bancários</h2>\n                <i class=\"fa fa-clock-o big-icon pull-right\"></i>\n                <p>Com estas informações você poderá agregar conhecimento, seja para ingressar em uma carreira bancária ou qualquer outra que envolva nosso sistema financeiro e afins.</p>\n                <a href=\"#conhecimentos-bancarios\" data-toggle=\"modal\" data-target=\"#about-course-modal\" class=\"btn btn-primary btn-sm course\">Saiba mais</a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id=\"inscricao\" class=\"start-now white\">\n	<div class=\"container\">\n		<div class=\"header-hero\" style=\"padding-bottom: 90px;\">\n			<h2>\n				Estude de maneira clara, rápida e objetiva. <span>A plataforma ideal.</span>\n			</h2>\n			<p>\n				Em síntese, a MicroInfo fornece todos os <span>recursos necessários para que você\n			aluno, possa estudar e alcançar os melhores resultados.</span>\n			</p>\n			<h1>Pronto para começar?</h1>\n			<br>\n			<a class=\"btn btn-primary btn-lg inscription\" data-toggle=\"modal\" href=\"#\">\n				Quero me inscrever agora!\n			</a>\n			</div>\n		</div>\n</section>\n\n<section id=\"contato\" class=\"footer gray-section contact\">\n    <div class=\"container\">\n        <div class=\"row m-b-lg\">\n            <div class=\"col-lg-12 text-center\">\n                <div class=\"m-b-xl\"></div>\n                <h1>Fale conosco</h1>\n                <p>Fale conosco e em breve você será respondido.</p>\n                <div class=\"m-b-xl\"></div>\n            </div>\n        </div>\n        <div class=\"row m-b-lg\">\n            <div class=\"col-md-5 col-lg-3 col-lg-offset-1\">\n\n                <address>\n                    <strong><span class=\"navy\">MÉTODO MICROINFO</span></strong><br/>\n                        Rua João Gonzaga de Menezes nº223<br/>\n                        Centro, Adustina - BA, 48435-00<br/>\n                    <abbr title=\"Nos ligue se preferir!\">Telefone:</abbr> (075) 9 9992 - 1835<br />\n                    <abbr title=\"Ou nos envie-um e-mail!\">E-mail:</abbr> <a href=\"mailto:centromicroinfo@gmail.com\">centromicroinfo@gmail.com</a>\n                </address>\n\n                <p class=\"text-color\">\n                    <strong>Ensino profissionalizante de qualidade!</strong>\n                    <br />\n                    Nossos cursos são 100% narrados por professores,\n                    como se fosse uma aula VIP, o que torna diferente dos\n                    demais sistemas sistemas, que muitas vezes fazem uso\n                    de \"locuções artificiais\" maçantes e com pouca qualidade.\n                </p>\n\n            </div>\n            <div class=\"col-md-7 col-lg-6 col-lg-offset-1\">\n                <form id=\"contact-frm\" role=\"form\" method=\"POST\" action=\""
    + this.escapeExpression(((helper = (helper = helpers.APP_SISTEMA || (depth0 != null ? depth0.APP_SISTEMA : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"APP_SISTEMA","hash":{},"data":data}) : helper)))
    + "\">\n\n                    <div class=\"alert hidden\" id=\"contact-message\">\n                        <button type=\"button\" class=\"close\" data-toggle=\"tooltip\" data-original-title=\"Fechar\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <strong><span class=\"message\"></span></strong> <span class=\"alert-link\"></span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label class=\"control-label lead\"><i class=\"fa fa-user\"></i> Nome</label>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" value=\"\" placeholder=\"Nome\" name=\"name\" class=\"form-control\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label class=\"lead\" for=\"inputEmail\"><i class=\"fa fa-envelope\"></i> E-mail</label>\n                                <div class=\"form-group\">\n                                    <input value=\"\" type=\"text\" name=\"email\" placeholder=\"E-mail\" class=\"form-control\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label class=\"lead\"><i class=\"fa fa-phone\"></i> Telefone</label>\n                                <div class=\"form-group\">\n                                    <input value=\"\" type=\"text\" maxlength=\"9\" class=\"form-control\" name=\"phone\" placeholder=\"Telefone\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label class=\"lead\" for=\"inputEmail\"><i class=\"fa fa-inbox\"></i> Mensagem</label>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" rows=\"3\" name=\"comment\" placeholder=\"Envie sua dúvida, sugestão ou algo que queira nos falar.\"></textarea>\n                        </div>\n                    </div>\n\n                    <p>\n                        <input type=\"submit\" data-loading-text=\"Enviando...\" class=\"btn btn-primary\" id=\"contact-send\" value=\"Enviar\" />\n                    </p>\n                </form>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n";
},"useData":true});
this["Handlebars"]["templates"]["component"]["page"]["inscription"] = this["Handlebars"]["templates"]["component"]["page"]["inscription"] || {};
this["Handlebars"]["templates"]["component"]["page"]["inscription"]["modal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"inscription-modal animated fadeIn\">\n    <div class=\"modal-header inscription-modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h3 class=\"modal-title\">Inscrição</h3>\n        <h4>Utilize o formulário abaixo para inscrever-se em nossos cursos.</h4>\n    </div>\n\n    <div class=\"modal-body\">\n        <form id=\"inscription-frm\" role=\"form\" method=\"POST\" action=\"\">\n            <div class=\"alert hidden\" id=\"contact-message\">\n                <button type=\"button\" class=\"close\" data-toggle=\"tooltip\" data-original-title=\"Fechar\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                <strong><span class=\"message\"></span></strong> <span class=\"alert-link\"></span>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label lead\"><i class=\"fa fa-user\"></i> Nome</label>\n                        <div class=\"\">\n                            <input type=\"text\" value=\"\" placeholder=\"Nome\" name=\"name\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label class=\"lead\" for=\"inputEmail\"><i class=\"fa fa-envelope\"></i> E-mail</label>\n                        <div class=\"\">\n                            <input value=\"\" type=\"text\" name=\"email\" placeholder=\"E-mail\" class=\"form-control\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label class=\"lead\"><i class=\"fa fa-phone\"></i> Telefone</label>\n                        <div class=\"\">\n                            <input value=\"\" type=\"text\" maxlength=\"9\" class=\"form-control\" name=\"phone\" placeholder=\"Telefone\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label class=\"lead\"><i class=\"fa fa-birthday-cake\"></i> Data de nascimento</label>\n                        <div class=\"\">\n                            <input value=\"\" type=\"date\" class=\"form-control\" name=\"birthday\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"lead\" for=\"inputEmail\"><i class=\"fa fa-inbox\"></i> Curso pretendido</label>\n                <select class=\"form-control\">\n                    <option value=\"profissionalizantes\">Profissionalizantes</option>\n                    <option value=\"informática\">Informática</option>\n                    <option value=\"curso-extensivo-palestras\">Curso Extensivo - Palestras</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"lead\" for=\"inputEmail\"><i class=\"fa fa-credit-card\"></i> Qual forma de pagamento você tem preferência?</label>\n                <div class=\"radio\" style=\"margin-top: 0;\">\n                    <label>\n                        <input type=\"radio\" name=\"billing\" value=\"dinheiro\" /> Dinheiro (na nossa sede)\n                    </label>\n                </div>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" name=\"billing\" value=\"deposito\" /> Depósito ou transferência para uma conta bancária\n                    </label>\n                </div>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" name=\"billing\" value=\"boleto\" /> Boleto bancário*\n                    </label>\n                </div>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" name=\"billing\" value=\"cartao\" /> Cartão de crédito ou de débito**\n                    </label>\n                </div>\n                <small>\n                    *O boleto será enviado para o e-mail informado no prazo de até 72h.\n                    <br />\n                    **Cartão de crédito ou de débito não são aceitos para pagamento de inscrições, apenas de mensalidades, pacotes e parcelas.\n                    <br />\n                    ***Parcelamentos podem ser realizados apenas com cartão de crédito.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"lead\" for=\"inputEmail\"><i class=\"fa fa-inbox\"></i> Mensagem</label>\n                <div class=\"\">\n                    <textarea class=\"form-control\" rows=\"3\" name=\"comment\" placeholder=\"Envie sua dúvida, sugestão ou algo que queira nos falar.\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"lead\"><i class=\"fa fa-navicon\"></i> Termos e Condições</label>\n                <div class=\"checkbox\">\n                <label>\n                    <input type=\"checkbox\" class=\"checkbox\" />\n                    Estou ciente que o curso ou serviço pretendido só será oferecido pela MICROINFO havendo inscrições suficientes para a formação de turma, estando\n                    também sujeito à disponibilidade de vaga.\n                </label>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Fechar</button>\n        <input type=\"submit\" data-loading-text=\"Enviando...\" class=\"btn btn-primary\" id=\"contact-send\" value=\"Enviar\">\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["component"]["shared"] = this["Handlebars"]["templates"]["component"]["shared"] || {};
this["Handlebars"]["templates"]["component"]["shared"]["modal"] = this["Handlebars"]["templates"]["component"]["shared"]["modal"] || {};
this["Handlebars"]["templates"]["component"]["shared"]["modal"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal inmodal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\"></div>\n    </div>\n</div>\n";
},"useData":true});