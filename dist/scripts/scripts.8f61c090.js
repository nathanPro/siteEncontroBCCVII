"use strict";angular.module("encontroApp",["ui.bootstrap","ngRoute","ngTouch","ngSanitize","ngAnimate","ui.calendar","ngMap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/Acontece",{templateUrl:"views/acontece.html",controller:"AconteceCtrl",controllerAs:"Acontece"}).when("/Programacao",{templateUrl:"views/programacao.html",controller:"ProgramacaoCtrl",controllerAs:"Programacao"}).when("/Palestrantes",{templateUrl:"views/palestrantes.html",controller:"PalestrantesCtrl",controllerAs:"Palestrantes"}).when("/Patrocinadores",{templateUrl:"views/patrocinadores.html",controller:"PatrocinadoresCtrl",controllerAs:"Patrocinadores"}).when("/Historia",{templateUrl:"views/historia.html",controller:"HistoriaCtrl",controllerAs:"Historia"}).when("/Colabore",{templateUrl:"views/colabore.html",controller:"ColaboreCtrl",controllerAs:"Colabore"}).when("/Local",{templateUrl:"views/local.html",controller:"LocalCtrl",controllerAs:"Local"}).when("/Chegando",{templateUrl:"views/chegando.html",controller:"ChegandoCtrl",controllerAs:"Chegando"}).when("/Hack",{templateUrl:"views/hack.html",controller:"HackCtrl",controllerAs:"Hack"}).when("/info/:id",{templateUrl:"views/info.html",controller:"InfoCtrl",controllerAs:"info"}).otherwise({redirectTo:"/"})}]).directive("disableNgAnimate",["$animate",function(a){return{restrict:"A",link:function(b,c){a.enabled(!1,c)}}}]),angular.module("encontroApp").controller("MainCtrl",["$scope",function(a){}]),angular.module("encontroApp").controller("AboutCtrl",function(){}),angular.module("encontroApp").controller("MenuCtrl",function(){}),angular.module("encontroApp").controller("AconteceCtrl",function(){}),angular.module("encontroApp").controller("ProgramacaoCtrl",["$scope","Palestrantes","uiCalendarConfig",function(a,b,c){a.eventSources=[b.all()],a.uiConfig={calendar:{height:450,editable:!1,defaultView:"agendaWeek",header:!1,dayClick:a.alertEventOnClick,eventDrop:a.alertOnDrop,eventResize:a.alertOnResize,defaultDate:"2015-09-06T08:10:00",allDaySlot:!1,scrollTime:"8:00:00"}}}]),angular.module("encontroApp").controller("PalestrantesCtrl",["Palestrantes","$scope",function(a,b){b.palestrantes=a.all()}]),angular.module("encontroApp").controller("PatrocinadoresCtrl",function(){}),angular.module("encontroApp").controller("HistoriaCtrl",function(){}),angular.module("encontroApp").controller("ColaboreCtrl",function(){}),angular.module("encontroApp").service("Palestrantes",function(){var a=[{title:"O que fazer depois do BCC?",nome_palestrante:"Sérgio Vaz",start:new Date(2015,8,10,15),end:new Date(2015,8,10,15,50),image:"",text_pessoal:"Sérgio Vaz, ex-aluno do BCC, turma de 1995, Gerente de Tecnologia da empresa Funcional Card, responsável por uma equipe de 30 colaboradores e sistemas focados na área de saúde. Já gerenciou equipes multidisciplinares, soluções para ERP, Sistemas em Tempo Real de dados financeiros e tratamento de notícias.",text_palesta:"Um bom profissional não é avaliado somente por sua capacidade técnica, mas também por muitas competências e comportamentos essenciais para o bom funcionamento e sucesso de um time e da própria corporação. Sergio Vaz, ex-BCC, discutirá algumas dicas profissionais aos alunos do BCC, baseadas em sua experiência de mais de 15 anos gerenciando equipes de desenvolvimento.",url:"#/info/1",palestra:1,id:1},{title:"Algoritmos para compressão de dados",nome_palestrante:"Eduardo Sany Laber",start:new Date(2015,8,10,14),end:new Date(2015,8,10,14,50),image:"",text_pessoal:"Eduardo Sany Laber se  formou em engenharia de computação pela PUC-RIO em 1996 e obteve seu doutorado  pela mesma instituição em 1999.  De 1999 a 2001, Eduardo foi recém-doutor na COPPE-UFRJ e desde então é professor do departamento de informática da PUC-RIO. Dentre as suas áreas de interesse em pesquisa destacam-se algoritmos, compressão de dados e aprendizado de máquina. Ao longo de sua carreira, Eduardo publicou cerca de 30 artigos em periódicos internacionais, orientou várias dissertações de mestrado e teses de doutorado, algumas delas premiadas. Além disso, realizou trabalhos de consultoria, utilizando algoritmos e métodos quantitativos, para diferentes setores da indústria como mercado financeiro, setor de óleo e gás e setor de midia digital/comércio eletrônico.",text_palesta:"Um bom profissional não é avaliado somente por sua capacidade técnica, mas também por muitas competências e comportamentos essenciais para o bom funcionamento e sucesso de um time e da própria corporação. Sergio Vaz, ex-BCC, discutirá algumas dicas profissionais aos alunos do BCC, baseadas em sua experiência de mais de 15 anos gerenciando equipes de desenvolvimento.",url:"#/info/2",palestra:1,id:2},{title:"Pós graduação acadêmica em Computação: o que é, como (e se) fazer.",nome_palestrante:"Samuel Plaça de Paula e Suzana de Siqueira Santos",start:new Date(0,0,0,0),end:new Date(0,0,0,0),image:"",text_pessoal:"Samuel ingressou no Bacharelado em Ciência da Computação do IME-USP em 2009, ano do primeiro Encontro do BCC. Atualmente faz mestrado em Computação na mesma instituição. Suas áreas de interesse incluem otimização combinatória, algoritmos de aproximação, grafos e complexidade computacional. É RD (representante discente) dos pós-graduandos em computação no Conselho do departamento e na Comissão Coordenadora do programa. <br> Suzana é IMEana desde 2009. Em 2012, realizou iniciação científica (com bolsa do PIBIC/CNPq) e concluiu o Bacharelado em Ciência da Computação. Em seguida, ingressou no mestrado em computação (com bolsa da FAPESP) do IME-USP, que foi concluído em 2015. Atualmente, cursa o primeiro ano do doutorado em computação no mesmo instituto. Suas áreas de interesse de pesquisa são grafos, grafos aleatórios e aplicações em redes biológicas (desde inferência de conectividade a métodos estatísticos para identificar alterações em doenças).",text_palesta:"A palestra tem o intuito de passar uma ideia do que é uma pós graduação acadêmica na área de Computação, sob o ponto de vista de quem conhece a realidade do programa do IME-USP. Nosso objetivo é procurar discutir o que é um mestrado/doutorado, quais as atividades envolvidas e alguns dos principais desafios e recompensas. Também procuraremos abordar algumas informações gerais sobre o programa do IME-USP, dicas de sobrevivência e uma perspectiva de quais as consequências profissionais de se cursar um mestrado ou doutorado na área. Esses são os tópicos propostos, mas a discussão será guiada pela interação com o público presente.",url:"#/info/4",palestra:1,id:4},{title:"Neurociência Computacional",nome_palestrante:"Antônio C. Roque",start:new Date(0,0,0,0),end:new Date(0,0,0,0),image:"http://placehold.it/350x150",text_pessoal:"Natural de São Paulo (1963), Antônio Carlos Roque da Silva Filho, ou simplesmente Antônio Roque como é mais conhecido nos meios acadêmicos, formou-se em física pela Unicamp em 1985. Concluiu mestrado em física na mesma universidade (1987) e fez doutorado em ciência da computação e inteligência artificial na Universidade de Sussex, Inglaterra (1992). Em 1993, ingressou no Departamento de Física da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP) da USP onde atualmente é professor associado. Em 1996, fundou e coordena desde então o Laboratório de Sistemas Neurais (SisNe), que é um dos laboratórios de pesquisa pioneiros da América Latina em neurociência computacional. Suas atividades de pesquisa cobrem desde a modelagem biofisicamente detalhada de células nervosas até a modelagem de redes de neurônios compostas por dezenas de milhares de células. Outra ação importante e pioneira do Prof. Roque foi a criação em 2006 da escola bienal “Latin American School on Computational Neuroscience” (LASCON), que tem contribuído significativamente para a formação de pesquisadores em neurociência computacional no Brasil e na América Latina.",text_palesta:"Esta palestra fornecerá uma breve apresentação sobre o que é a neurociência computacional. Serão comentados os principais objetivos da área, desde a modelagem computacional de neurônios individuais até a modelagem de redes de neurônios compostas por centenas de milhares de células. Também serão comentadas as principais ferramentas computacionais para a construção de modelos e as principais linhas de pesquisa no tema desenvolvidas pelo palestrante e seus colaboradores.",url:"#/info/5",palestra:1,id:5}];return{all:function(){return a},id:function(b){var c=-1;return angular.forEach(a,function(a){a.id==b&&(c=a)}),c}}}),angular.module("encontroApp").service("Patrocinadores",function(){}),angular.module("encontroApp").controller("LocalCtrl",function(){}),angular.module("encontroApp").controller("ChegandoCtrl",function(){}),angular.module("encontroApp").controller("HackCtrl",function(){}),angular.module("encontroApp").controller("InfoCtrl",["$routeParams","$scope","Palestrantes",function(a,b,c){b.pale=c.id(a.id),console.log(b.pale)}]),angular.module("encontroApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/acontece.html","{{$location.path()}}"),a.put("views/chegando.html",'<h1 class="page-header"> <b>Como Chegar?</b> </h1> <div class="panel panel-default"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-gift"></i>De carro:</h4> </div> <div class="panel-body"> <p style=""> IME fica na Av. Prof. Luciano Gualberto, próximo ao número 1100, do lado oposto ao estacionamento da POLI, conforme mostram os mapas acima. Os Blocos A e B são acessados mais facilmente a partir da Rua do Matão, 1010. Se é a primeira vez que você vem ao IME, sugerimos fortemente que imprima os mapas e os traga consigo.</p> <p>O instituto está localizado no campus da USP na cidade de São Paulo, que por sua vez está no bairro do Butantã (zona oeste da cidade). Este campus está entre as Pontes do Jaguaré e da Cidade Universitária, na Marginal Pinheiros (veja o <a href="http://www.ime.usp.br/imagens/mapas/mapa-usp_marginal.png">mapa da região</a>).</p> <p>Ao vir de carro para São Paulo é provável que você irá cair na Marginal do Rio Tietê ou na Marginal do Rio Pinheiros, pois a maior parte das rodovias e as principais vias de acesso da cidade terminam em uma dessas marginais. Caso você não chegue direto a uma dessas marginais, há placas indicativas por toda a cidade para chegar em uma das duas marginais. Ao cair numa das marginais, há duas alternativas: estando na Marginal Tietê, você deve seguir sentido Lapa até chegar na Marginal Pinheiros e então seguir em frente até a Av. Escola Politécnica (logo após a Ponte do Jaguaré) que dá acesso a USP; estando na Marginal Pinheiros, você deve seguir sentido Pinheiros até a Ponte da Cidade Universitária e Rua Alvagenga que dá acesso a USP (vide <a href="http://www.ime.usp.br/imagens/mapas/mapa-usp_marginal.png">mapa da região</a>).</p> <p>O site da <a href="http://www.cetsp.com.br/">Companhia de Engenharia de Tráfego de São Paulo - CET</a> fornece informações importantes sobre o trânsito na cidade e o rodízio de veículos em dias úteis. O <a href="http://www.apontador.com.br/">Apontador</a> é outro site útil, com informações sobre o trânsito na cidade e mapas de toda a cidade de São Paulo.</p> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-gift"></i>De transporte público:</h4> </div> <div class="panel-body"> <ul> <li><a href="http://www.metro.sp.gov.br/sua-viagem/linha-4-amarela/estacao-butanta.aspx">Estação Butantã</a> (Linha 4 - Amarela): linhas municipais <strong>8012 - Cidade Universitária</strong> e <strong>8022 - Cidade Universitária</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/azul/tese.shtml">Estação Sé</a> (Linha 1 - Azul): linha municipal <strong>7411 - Cidade Universitária</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/azul/tesao-bento.shtml">Estação São Bento</a> (Linha 1 - Azul): linha municipal <strong>7411 - Cidade Universitária</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/azul/teluz.shtml">Estação Luz</a> (Linha 1 - Azul): linha municipal <strong>701U - Butantã-USP</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/azul/tetiradentes.shtml">Estação Tiradentes</a> (Linha 1 - Azul): linha municipal <strong>701U - Butantã-USP</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/azul/tesantana.shtml">Estação Santana</a> (Linha 1 - Azul): linhas municipais <strong>177H - Butantã-USP</strong> e <strong>701U - Butantã-USP</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/verde/teconsolacao.shtml">Estação Consolação</a> (Linha 2 - Verde): linha municipal <strong>7181 - Cidade Universitária</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/verde/teclinicas.shtml">Estação Clínicas</a> (Linha 2 - Verde): linhas municipais <strong>177H - Butantã-USP</strong> e <strong>701U - Butantã-USP</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/verde/temadalena.shtml">Estação Vila Madalena</a> (Linha 2 - Verde): linha municipal <strong>7725 - Rio Pequeno</strong>.</li> <li><a href="http://www.metro.sp.gov.br/redes/vermelha/temarechal.shtml">Estação Marechal Deodoro</a> (Linha 3 - Vermelha): linha municipal <strong>177H - Butantã-USP</strong>.</li> </ul> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-gift"></i>Serviços Úteis na USP:</h4> </div> <div class="panel-body"> <p>A USP conta com vários serviços úteis no Campus da Capital (Cidade Universitária Armando de Salles Oliveira - CUASO). Segue, abaixo, uma relação com telefones de alguns deles:</p> <ul> <li><strong>Central Telefônica USP</strong>, no telefone (11) 3091-4313.</li> <li><strong>Correio USP</strong>, no telefone (11) 3091-4313.</li> <li><strong>Farmácia USP,</strong> no telefone (11) 3091-3003.</li> <li><strong>Guarda Universitária,</strong> no telefone (11) 3091-4222.</li> <li><strong>Hospital Universitário (HU)</strong>, no telefone (11) 3039-9200.</li> <li><strong>Ponto de Táxi - HU</strong>, no telefone (11) 3091-3536.</li> <li><strong>Ponto de Táxi - Reitoria</strong>, no telefone (11) 3091-3556.</li> <li><strong>Posto de Informações</strong>, no telefone (11) 3091-3121/3116.</li> </ul> </div> </div>'),a.put("views/colabore.html","<p>This is the Colabore view.</p>"),a.put("views/hack.html","<p>This is the Hack view.</p>"),a.put("views/historia.html",'<div class="page-header"> <h1>História <small></small></h1> </div> <div class="row"> <div class="col-md-8"> <p style="text-align: justify">O BCC (Bacharelado em Ciência da Computação) no IME/USP teve sua primeira turma formada em 1974 e sua forma de ingresso era como opção para os que quisessem cursar Matemática até 1983. Em 1984, virou opção da Fuvest na área de Ciências Exatas, prova vestibular para ingresso à USP. O curso, ao contrário do que muitos pensam, não se resume exatamente à programação e mesmo quando se trata disso, há várias áreas nas quais podemos usar tal ferramenta. Nesse contexto, nós, alunos do BCC, criamos o Encontro como uma forma de guiar quem está no curso e mostrar do que ele realmente se trata para quem não está.</p> <p style="text-align: justify">O Encontro BCC é um evento anual onde promovemos palestras, workshops e outras atividades para mostrar parte das experiências que o curso de Ciência da Computação no IME/USP pode oferecer. O encontro é realizado desde 2009 e é totalmente organizado por alunos do BCC. Em 2014, excepcionalmente, nosso curso completará 40 anos desde sua primeira turma formada. Para expressarmos nossa gratidão e desejo por mais 40 anos na formação de cérebros da Computação, faremos uma edição especial do Encontro, com direito a eventos culturais, gastronômicos e claro, mais computação!</p> </div> <div class="col-md-4"><img src="images/antigas/extra/lendo.jpg" class="img-thumbnail"></div> </div> <hr>'),a.put("views/info.html",'<div class="panel panel-default" ng-show="pale.palestra==1"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-gift"></i><b>{{pale.title}} </b> <small>{{pale.nome_palestrante}}</small></h4> </div> <div class="panel-body"> <div class="row"> <div class="col-md-2" style="padding-top: 5px"> <img src="/images/place.ea8f95f1.png" style="width: 100%" class="img-thumbnail" ng-show="pale.image==\'\'"> <img src="{{pale.image}}" style="width: 100%" class="img-thumbnail" ng-show="pale.image!=\'\'"> </div> <div class="col-md-10"> <b></b> <p style="text-align: justify">{{pale.text_palesta}}</p> <hr> <p style="text-align: justify">{{pale.text_pessoal}}</p> <hr> <p><b>Início:</b> {{pale.start|date:\'d/M/yy H:mm\'}} </p> </div> </div> </div> </div>'),a.put("views/local.html",'<div map-lazy-load="http://maps.google.com/maps/api/js" class="map"> <map center="-23.5592004,-46.7316208" zoom="16" class="map2"> <marker position="[-23.5592004,-46.7316208]" title="Hello Marker" draggable="true" visible on-click="showInfoWindow(event, \'marker-info\')" on-load="showInfoWindow(event, \'marker-info\')"> <info-window id="marker-info"> <p>Instituto de Matemática e Estatística da Universidade de São Paulo <br> Rua do Matão, 1010 - CEP 05508-090 - São Paulo - SP</p> </info-window> </marker> </map> </div>'),a.put("views/main.html",'<div id="term_demo" class="hidden-xs"></div> <div> </div> <!-- Marketing Icons Section --> <div class="row"> <div class="col-lg-12"> <h1 class="page-header"> Atrações </h1> </div> <div class="col-md-4"> <div class="panel panel-default"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-check"></i>Hackthon</h4> </div> <div class="panel-body"> <p style="text-align: justify">Em berve mais informações.</p> <!--<a href="#" class="btn btn-default btn-block">Learn More</a>--> </div> </div> </div> <div class="col-md-4"> <div class="panel panel-default"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-gift"></i> Palestras</h4> </div> <div class="panel-body"> <p style="text-align: justify">Está curioso para seber o que vai ser apresentado? Então confira já. </p> <a href="#/Programacao" class="btn btn-default btn-block">Ver mais</a> </div> </div> </div> <div class="col-md-4"> <div class="panel panel-default"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-compass"></i> Comidas</h4> </div> <div class="panel-body"> <p style="text-align: justify">Dentro de alguns dias divulgaremos a comida!</p> <!--<a href="#" class="btn btn-default btn-block">Learn More</a>--> </div> </div> </div> </div> <hr> <!-- /.row --> <div> <div class="pull-right hidden-xs" style="margin-bottom: 10px"> <b>Version</b> 0.1.0 </div> <strong>Copyright © 2014-2015 VII Encontro do BCC.</strong> All rights reserved. </div> <script>var anim = false;\n    function typed(finish_typing) {\n        return function(term, message, delay, finish) {\n            anim = true;\n            var prompt = term.get_prompt();\n            var c = 0;\n            if (message.length > 0) {\n                term.set_prompt(\'\');\n                var interval = setInterval(function() {\n                    term.insert(message[c++]);\n                    if (c == message.length) {\n                        clearInterval(interval);\n                        // execute in next interval\n                        setTimeout(function() {\n                            // swap command with prompt\n                            finish_typing(term, message, prompt);\n                            anim = false\n                            finish && finish();\n                        }, delay);\n                    }\n                }, delay);\n            }\n        };\n    }\n    var typed_prompt = typed(function(term, message, prompt) {\n        // swap command with prompt\n        term.set_command(\'\');\n        term.set_prompt(message + \' \');\n    });\n    var typed_message = typed(function(term, message, prompt) {\n        term.set_command(\'\');\n        term.echo(message)\n        term.set_prompt(prompt);\n    });\n\njQuery(function($, undefined) {\n    // global to access from js terminal\n    term = $(\'#term_demo\').terminal(function(command, term) {\n        if (command !== \'\') {\n\n            if (command == "BCC") {\n                    typed_message(term, "Olá BCC", 100);\n            } else if (command == "-help") {\n                    term.echo("alert(strinf)\\tMath.abs()\\tMath.acos()\\tMath.acosh()\\nMath.asin()\\tMath.asinh()\\tMath.atan()\\tMath.atan2()\\nMath.atanh()\\tMath.cbrt()\\tMath.ceil()\\tMath.clz32()\\nMath.cos()\\tMath.cosh()\\tMath.exp()\\tMath.expm1()\\nMath.floor()\\tMath.fround()\\tMath.hypot()\\tMath.imul()\\nMath.log()\\tMath.log10()\\tMath.log1p()\\tMath.log2()\\nMath.max()\\tMath.min()\\tMath.pow()\\tMath.random()\\nMath.round()\\tMath.sign()\\tMath.sin()\\tMath.sinh()\\nMath.sqrt()\\tMath.tan()\\tMath.tanh()\\n");\n            } else {\n                try {\n                    var result = window.eval(command);\n                    if (result !== undefined) {\n                        term.echo(new String(result));\n                    }\n                } catch(e) {\n                    term.error("Comando não encontrado....");\n                }\n            }\n        } else {\n           term.echo(\'\');\n        }\n    }, {\n        greetings: \'\',\n        name: \'js_demo\',\n        height: 450,\n        prompt: \'user$ \',\n        onInit: function(term) {\n            // first question\n            var msg = "Seja bem vindo!\\nVocê está oficialmente convidado para o encrontro do BCC 2015.\\nPara ajuda -help\\n";\n            typed_message(term, msg, 100, function() {\n                \n            });\n        }\n\n    });\n});</script>'),a.put("views/menu.html",'<div class="navbar navbar-default navbar-fixed-top" bs-navbar> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/">Encontro BCC 2015</a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li data-match-route="/$"><a href="#/">Home</a></li> <!-- <li data-match-route="/Colabore"><a href="#/Colabore">Colabore</a></li> --> <li data-match-route="/Palestrantes"><a href="#/Palestrantes">Palestrantes</a></li> <!-- <li data-match-route="/Palestrantes"><a href="#/Hack">Hackthon</a></li> --> <li data-match-route="/Programacao"><a href="#/Programacao">Programação</a></li> <li class="dropdown"> <a href="#/Local" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Local <span class="caret"></span></a> <ul class="dropdown-menu"> <li><a href="#/Chegando">Como Chegar</a></li> </ul> </li> <li class="dropdown"> <a href="#/Historia" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">História <span class="caret"></span></a> <ul class="dropdown-menu"> <li><a href="http://www.ime.usp.br/~encontrobcc/2014/">VI Encontro do BCC &mdash; 2014</a></li> <li><a href="http://www.ime.usp.br/~encontrobcc/2013/">V Encontro do BCC &mdash; 2013</a></li> <li><a href="http://www.ime.usp.br/~encontrobcc/2012/">IV Encontro do BCC &mdash; 2012</a></li> <li><a href="http://www.ime.usp.br/~encontrobcc/2011/">III Encontro do BCC &mdash; 2011</a></li> <li><a href="http://www.ime.usp.br/~encontrobcc/2010/">II Encontro do BCC &mdash; 2010</a></li> </ul> </li> </ul> </div> </div> </div>'),a.put("views/palestrantes.html",'<div class="panel panel-default" ng-repeat="pale in palestrantes" ng-show="pale.palestra==1"> <div class="panel-heading"> <h4><i class="fa fa-fw fa-gift"></i><b>{{pale.nome_palestrante}}</b> <small>{{pale.title}} </small></h4> </div> <div class="panel-body"> <div class="row"> <div class="col-md-2" style="padding-top: 5px"> <img src="/images/place.ea8f95f1.png" style="width: 100%" class="img-thumbnail" ng-show="pale.image==\'\'"> <img src="{{pale.image}}" style="width: 100%" class="img-thumbnail" ng-show="pale.image!=\'\'"> </div> <div class="col-md-10"> <b>Sobre o Palestrante:</b> <p style="text-align: justify">{{pale.text_pessoal}}</p> <a href="{{pale.url}}" class="btn btn-default">Ler sobre palestra</a> </div> </div> </div> </div>'),a.put("views/patrocinadores.html","<p>This is the Patrocinadores view.</p>"),a.put("views/programacao.html",'<div class="page-header"> <h1>Programação<small></small></h1> </div> <div class="panel panel-default"> <div ng-model="eventSources" ui-calendar="{{uiConfig.calendar}}" class="panel-body"> </div> </div>')}]);