'use strict';

/**
 * @ngdoc service
 * @name encontroApp.palestrantes
 * @description
 * # palestrantes
 * Service in the encontroApp.
 */
angular.module('encontroApp')
    .service('Palestrantes', function() {
        var palestrantes = [{
            title: "O que fazer depois do BCC?",
            nome_palestrante: "Sérgio Vaz",
            start: new Date(2015, 8, 10, 15),
            end: new Date(2015, 8, 10, 15, 50),
            image: "images/1.jpeg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Sérgio Vaz, ex-aluno do BCC, turma de 1995, Gerente de Tecnologia da empresa Funcional Card, responsável por uma equipe de 30 colaboradores e sistemas focados na área de saúde. Já gerenciou equipes multidisciplinares, soluções para ERP, Sistemas em Tempo Real de dados financeiros e tratamento de notícias.",
            text_palesta: "Um bom profissional não é avaliado somente por sua capacidade técnica, mas também por muitas competências e comportamentos essenciais para o bom funcionamento e sucesso de um time e da própria corporação. Sergio Vaz, ex-BCC, discutirá algumas dicas profissionais aos alunos do BCC, baseadas em sua experiência de mais de 15 anos gerenciando equipes de desenvolvimento.",
            url: "#/info/1",
            palestra: 1,
            id: 1
        }, {
            title: "Algoritmos para compressão de dados",
            nome_palestrante: "Eduardo Sany Laber",
            start: new Date(2015, 8, 10, 14),
            end: new Date(2015, 8, 10, 14, 50),
            image: "images/2.jpg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Eduardo Sany Laber se  formou em engenharia de computação pela PUC-RIO em 1996 e obteve seu doutorado  pela mesma instituição em 1999.  De 1999 a 2001, Eduardo foi recém-doutor na COPPE-UFRJ e desde então é professor do departamento de informática da PUC-RIO. Dentre as suas áreas de interesse em pesquisa destacam-se algoritmos, compressão de dados e aprendizado de máquina. Ao longo de sua carreira, Eduardo publicou cerca de 30 artigos em periódicos internacionais, orientou várias dissertações de mestrado e teses de doutorado, algumas delas premiadas. Além disso, realizou trabalhos de consultoria, utilizando algoritmos e métodos quantitativos, para diferentes setores da indústria como mercado financeiro, setor de óleo e gás e setor de midia digital/comércio eletrônico.",
            text_palesta: "A técnica de compressão de dados é amplamente utilizada em nosso dia a dia tanto  para reduzir o espaço necessário para armazenar dados / informações em meios digitais assim como  para aumentar a velocidade de transmissão de dados via rede.  A ideia básica é eliminar a redundância que existe no dado. Como exemplo, para codificar a a cadeia de 13 caracteres 'AAAAAAABBBBBB' de forma compacta podemos utilizar o código 7A6B de 4 caracteres.<br>Os algoritmos para   compressão  de dados podem ser divididos  em dois grandes grupos: algoritmos com perda de informação e algoritmos sem perda de informação. Nessa palestra discutimos o problema de compressão de dados e apresentamos os códigos de Huffman e a transformada de Burrows-Weeler que são componentes importantes do Bzip-2, um software bastante eficiente/eficaz para compressão sem perda.",
            url: "#/info/2",
            palestra: 1,
            id: 2
        }, {
            title: "Pós graduação acadêmica em Computação: o que é, como (e se) fazer.",
            nome_palestrante: "Samuel Plaça de Paula e Suzana de Siqueira Santos",
            start: new Date(2015, 8, 9, 16, 30),
            end: new Date(2015, 8, 9, 17, 20),
            image: "images/4.jpg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Samuel ingressou no Bacharelado em Ciência da Computação do IME-USP em 2009, ano do primeiro Encontro do BCC. Atualmente faz mestrado em Computação na mesma instituição. Suas áreas de interesse incluem otimização combinatória, algoritmos de aproximação, grafos e complexidade computacional. É RD (representante discente) dos pós-graduandos em computação no Conselho do departamento e na Comissão Coordenadora do programa. <br> Suzana é IMEana desde 2009. Em 2012, realizou iniciação científica (com bolsa do PIBIC/CNPq) e concluiu o Bacharelado em Ciência da Computação. Em seguida, ingressou no mestrado em computação (com bolsa da FAPESP) do IME-USP, que foi concluído em 2015. Atualmente, cursa o primeiro ano do doutorado em computação no mesmo instituto. Suas áreas de interesse de pesquisa são grafos, grafos aleatórios e aplicações em redes biológicas (desde inferência de conectividade a métodos estatísticos para identificar alterações em doenças).",
            text_palesta: "A palestra tem o intuito de passar uma ideia do que é uma pós graduação acadêmica na área de Computação, sob o ponto de vista de quem conhece a realidade do programa do IME-USP. Nosso objetivo é procurar discutir o que é um mestrado/doutorado, quais as atividades envolvidas e alguns dos principais desafios e recompensas. Também procuraremos abordar algumas informações gerais sobre o programa do IME-USP, dicas de sobrevivência e uma perspectiva de quais as consequências profissionais de se cursar um mestrado ou doutorado na área. Esses são os tópicos propostos, mas a discussão será guiada pela interação com o público presente.",
            url: "#/info/4",
            palestra: 1,
            id: 4
        }, {
            title: "Neurociência Computacional",
            nome_palestrante: "Antônio C. Roque",
            start: new Date(2015, 8, 8, 14),
            end: new Date(2015, 8, 8, 14, 50),
            image: "images/5.png",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Natural de São Paulo (1963), Antônio Carlos Roque da Silva Filho, ou simplesmente Antônio Roque como é mais conhecido nos meios acadêmicos, formou-se em física pela Unicamp em 1985. Concluiu mestrado em física na mesma universidade (1987) e fez doutorado em ciência da computação e inteligência artificial na Universidade de Sussex, Inglaterra (1992). Em 1993, ingressou no Departamento de Física da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP) da USP onde atualmente é professor associado. Em 1996, fundou e coordena desde então o Laboratório de Sistemas Neurais (SisNe), que é um dos laboratórios de pesquisa pioneiros da América Latina em neurociência computacional. Suas atividades de pesquisa cobrem desde a modelagem biofisicamente detalhada de células nervosas até a modelagem de redes de neurônios compostas por dezenas de milhares de células. Outra ação importante e pioneira do Prof. Roque foi a criação em 2006 da escola bienal “Latin American School on Computational Neuroscience” (LASCON), que tem contribuído significativamente para a formação de pesquisadores em neurociência computacional no Brasil e na América Latina.",
            text_palesta: "Esta palestra fornecerá uma breve apresentação sobre o que é a neurociência computacional. Serão comentados os principais objetivos da área, desde a modelagem computacional de neurônios individuais até a modelagem de redes de neurônios compostas por centenas de milhares de células. Também serão comentadas as principais ferramentas computacionais para a construção de modelos e as principais linhas de pesquisa no tema desenvolvidas pelo palestrante e seus colaboradores.",
            url: "#/info/5",
            palestra: 1,
            id: 5
        }, {
            title: "Criptografia pós-quântica",
            nome_palestrante: "Denise Hideko Goya",
            start: new Date(2015, 8, 8, 10),
            end: new Date(2015, 8, 8, 10, 50),
            image: "images/6.jpeg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Doutora em Ciência da Computação pela Universidade de São Paulo (2011), mestre e graduada pela mesma instituição (Departamento de Ciência da Computação - Instituto de Matemática e Estatística da USP). Tem pesquisado modelos alternativos de criptografia de chave pública, em especial os modelos sem certificado e baseado em identidade. Tópicos de interesse: segurança demonstrável, criptografia baseada em curvas elípticas/hiperelípticas, emparelhamentos bilineares, criptografia pós-quântica, infraestrutura de chaves públicas.",
            text_palesta: "A criptografia de chave pública é uma das bases conceituais de várias soluções de segurança em sistemas computacionais. Na atualidade, as implementações mais amplamente disseminadas mantém-se seguras enquanto não houver solução de complexidade polinomial para a fatoração de inteiros e para o cálculo de logaritmos discretos em corpos finitos. Sob o modelo computacional clássico (baseado em bits), é pouco provável que tal solução polinomial exista, mas isso não é verdade considerando-se o modelo computacional quântico (baseado em qubits). Em 1997, Peter Shor apresentou um algoritmo quântico capaz de fatorar inteiros em tempo hábil. Isso significa que, na existência de um computador quântico, dados hoje protegidos podem deixar de estar. Felizmente, existem problemas computacionais para os quais conjectura-se que, mesmo na presença de um computador quântico, não há solução eficiente. Esquemas criptográficos baseados nesses problemas são conhecidos como pós-quânticos. Nesse encontro, serão apresentados conceitos básicos relacionados à linha de pesquisa em criptografia pós-quântica e exemplos de primitivas criptográficas.",
            url: "#/info/6",
            palestra: 1,
            id: 6
        }, {
            title: "Vamos mudar o mundo com mulheres, empreendedorismo e tecnologia?",
            nome_palestrante: "Camila Achutti",
            start: new Date(2015, 8, 8, 11),
            end: new Date(2015, 8, 8, 11, 50),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Engenheira de Software da Iridescent, ONG americana de ensino e formação científica e tecnológica e Influenciadora Digital na FIAP. Fundadora do blog Mulheres na Computação, Embaixadora do Technovation Challenge Brasil. Formada em Ciência da Computação pelo IME-USP e mestranda pelo mesmo instituto. Estagiou no Google em Mountain View. Seu maior objetivo é revolucionar a indústia de tecnologia com mais diversidade, construindo uma comunidade de meninas capaz de fazer isso através de inovação.",
            text_palesta: "Conversar sobre a realidade das mulheres no TI e como nós, homens e mulheres, da área ou não, podemos ajudar nessa questão. Vamos discutir um pouco sobre o que aconteceu para a diminuição da representação feminina na área e o que já vem sendo feito para reverter essa situação.",
            url: "#/info/7",
            palestra: 1,
            id: 7
        }, {
            title: "HackathonIME",
            backgroundColor: '#09508a',
            start: new Date(2015, 8, 12, 15),
            end: new Date(2015, 8, 13, 15),
            image: "",
            local: "Auditório do CCSL",
            text_pessoal: "Natural de São Paulo (1963), Antônio Carlos Roque da Silva Filho, ou simplesmente Antônio Roque como é mais conhecido nos meios acadêmicos, formou-se em física pela Unicamp em 1985. Concluiu mestrado em física na mesma universidade (1987) e fez doutorado em ciência da computação e inteligência artificial na Universidade de Sussex, Inglaterra (1992). Em 1993, ingressou no Departamento de Física da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP) da USP onde atualmente é professor associado. Em 1996, fundou e coordena desde então o Laboratório de Sistemas Neurais (SisNe), que é um dos laboratórios de pesquisa pioneiros da América Latina em neurociência computacional. Suas atividades de pesquisa cobrem desde a modelagem biofisicamente detalhada de células nervosas até a modelagem de redes de neurônios compostas por dezenas de milhares de células. Outra ação importante e pioneira do Prof. Roque foi a criação em 2006 da escola bienal “Latin American School on Computational Neuroscience” (LASCON), que tem contribuído significativamente para a formação de pesquisadores em neurociência computacional no Brasil e na América Latina.",
            text_palesta: "Esta palestra fornecerá uma breve apresentação sobre o que é a neurociência computacional. Serão comentados os principais objetivos da área, desde a modelagem computacional de neurônios individuais até a modelagem de redes de neurônios compostas por centenas de milhares de células. Também serão comentadas as principais ferramentas computacionais para a construção de modelos e as principais linhas de pesquisa no tema desenvolvidas pelo palestrante e seus colaboradores.",
            palestra: 0,
            url: "#/Hack"
        }, {
            title: "O mercado de jogos mobile",
            nome_palestrante: "Alessandro (ex-aluno)",
            start: new Date(2015, 8, 8, 15),
            end: new Date(2015, 8, 8, 15, 50),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Alessandro Calò é bacharel em Ciência da Computação pelo IME-USP. Obteve o diploma em 2014 e desde então é desenvolvedor de jogos na Tapps Games, em São Paulo. As suas principais áreas de interesse são relacionadas à Inteligência Artificial, como Machine Learning e Linguagem Natural. A sua experiência profissional é de desenvolvimento de aplicativos para as plataformas móveis.",
            text_palesta: "Essa palestra fornecerá uma visão geral sobre o mercado de jogos mobile, detalhando o seu status atual, as ferramentas que são utilizadas para o desenvolvimento, e o todo o processo pelo qual um jogo mobile passa antes – e depois – do lançamento. Vamos analisar as entidades que constituem o mercado, e apresentar a Tapps Games: quem são os profissionais da área de jogos, o que fazem no dia-a-dia, e quais são os objetivos de uma startup nesse ramo. Também apresentaremos algumas oportunidades de trabalho aos alunos.",
            url: "#/info/9",
            palestra: 1,
            id: 9
        }, {
            title: "A nova grade curricular do BCC",
            nome_palestrante: "Daniel Macêdo Batista",
            start: new Date(2015, 8, 10, 11),
            end: new Date(2015, 8, 10, 11, 50),
            image: "images/10.png",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Daniel Batista é doutor em ciência da computação pela Unicamp e professor do Departamento de Ciência da Computação do IME desde 2011, onde ministra disciplinas básicas do BCC e de outros departamentos, além de disciplinas relacionadas com redes de computadores, sistemas distribuídos, programação paralela e concorrente e software livre. Daniel também orienta alunos de vários níveis em projetos de redes de computadores e sistemas distribuídos. De 2011 a 2014 Daniel participou da comissão que trabalhou na reforma curricular do BCC e apresentará um pouco sobre essa reforma na palestra.",
            text_palesta: "O que? Houve uma reforma do BCC? Por que não avisam essas coisas??? <br> Se você esteve fora do planeta nos últimos anos, abduzido por algum disco voador perdido, e não acompanhou a reforma do curso, essa é sua oportunidade de tirar todas as dúvidas que possa ter sobre como é a nova grade curricular, e como vai ser a transição dos alunos que desejarem migrar para o currículo novo. Será uma apresentação no formato de perguntas e respostas, portanto, traga suas perguntas!",
            url: "#/info/10",
            palestra: 1,
            id: 10
        }, {
            title: "Análise de Segurança de aplicativos bancários na plataforma Android",
            nome_palestrante: "Diego Aranha",
            start: new Date(2015, 8, 9, 14),
            end: new Date(2015, 8, 9, 14, 50),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "É Professor Doutor na Universidade Estadual de Campinas (Unicamp) desde 2014. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e projeto de primitivas criptográficas para fornecimento de anonimato computacional. Coordenou a primeira equipe de investigadores independentes capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo Tribunal Superior Eleitoral. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Foi doutorando visitante por 1 ano na Universidade de Waterloo, Canadá, e Professor Adjunto por pouco mais de 2 anos no Departamento de Ciência da Computação da Universidade de Brasília.",
            text_palesta: "O volume de transações bancárias realizadas por dispositivos móveis cresce a cada ano. Nessa palestra, reportamos resultados de uma análise de segurança em aplicativos bancários, sob dois aspectos principais: segurança da conexão SSL/TLS estabelecida e configuração do servidor propriamente dito, com ênfase em ataques clássicos e recentes ao protocolo SSL/TLS. Os bancos analisados foram Banco do Brasil, Bradesco, Caixa Econômica Federal, Citibank, HSBC, Itaú e Santander. Foi possível montar um ataque de personificação do servidor com sucesso na maioria dos aplicativos e obter informações sigilosas, credenciais de autenticação e dados financeiros. As observações coletadas não se resumiram apenas aos ataques de personificação, mas também a falhas na configuração dos servidores e decisões de projeto questionáveis, como integração com redes sociais externas. Apesar da ênfase no setor financeiro, as recomendações são aplicáveis a outros tipos de serviço. Demonstração prática incluída!",
            url: "#/info/11",
            palestra: 1,
            id: 11
        }, {
            title: "Por que fazer IC?",
            nome_palestrante: "Renato Cordeiro Ferreira",
            start: new Date(2015, 8, 9, 15),
            end: new Date(2015, 8, 9, 15, 50),
            image: "images/12.jpg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Aluno do 4º ano do Bacharelado em Ciência da Computação (BCC) da Universidade de São Paulo. É parte do grupo de Representantes de Classes (RCs) do IME-USP, no qual discute sobre melhoras para as disciplinas e auxilia na organização do ciclo de palestras \"Encontro do BCC\". Desde 2012, faz Iniciação Científica na área de Bioinformática - área em que pretende seguir para a pós-graduação - com foco no desenvolvimento de algoritmos e uso de softwares para estudos de genômica. Em 2015, tornou-se Representante Discente (RD) do BCC no Conselho e na Comissão de Curso (CoC) do Departamento de Computação. Participa como membro-fundador do grupo de estudos de sistemas “IME Workshop”. No TCC, trabalha com a refatoração do arcabouço de modelos probabilístico ToPS e na incluisão de um novo modelo de descrição de RNA (Modelo de Covariância) no sistema.",
            text_palesta: "O que é a iniciação científica? Quais seus benefícios para a formação? Nessa palestra, voltada para todas as turmas do BCC, detalharemos os diferentes aspectos de uma iniciação científica, bem como suas influências no decorrer do curso. Quando começar? Como conseguir um orientador? Responderemos as dúvidas mais comuns que passam pela mente dos alunos quando se interessam em fazer uma IC. O que posso ganhar? Como conseguir uma bolsa? Falaremos sobre as principais agências de fomento e seus programas de pesquisa, da elaboração de projetos e relatórios. Trataremos também da nova disciplina optativa MAC0215 (Atividade Curricular em Pesquisa), uma oportunidade da nova grade curricular para os alunos que querem conhecer mais sobre a pesquisa científica. Quer saber como uma IC pode te ajudar a entrar no mestrado ou conseguir um intercâmbio? Então venha conferir a palestra e tirar as suas dúvidas!",
            url: "#/info/12",
            palestra: 1,
            id: 12
        }, {
            title: "USP GameDev",
            nome_palestrante: "Wilson Kazuo Mizutani",
            start: new Date(2015, 8, 10, 10),
            end: new Date(2015, 8, 10, 10, 50),
            image: "images/14.jpg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Wilson Kazuo Mizutani é formado no BCC, atualmente cursando Mestrado em computação no IME. Foi um dos fundadores do USPGameDev, e trabalhou no desenvolvimento do jogo Horus Eye e da engine UGDK. Também é embaixador do CCSL, e organizou a II Semana de Software Livre da USP. Participou de um projeto conjunto com a ECA no programa Ensinar com Pesquisa da USP, no qual foram ministrados cursos de software livre para alunos de Jornalismo. Além disso, é membro ativo da Comissão de Recepção do IME, que nesses dois últimos anos ganhou o prêmio de melhor Semana de Recepção aos Calouros pela pró-Reitoria de Graduação da USP.",
            text_palesta: "Jogos digitais já existem há algumas décadas, e, portanto, é de se esperar que diversas práticas boas e padrões eficazes já tenham sido estabelecidos na área. Em particular, do ponto de vista da Computação, jogos costumam seguir estruturas bem constantes de arquitetura e soluções gerais. Assim, analisaremos nessa palestra como é tipicamente composto o código fonte de um jogo, destacando os principais padrões de projeto utilizados e processamentos realizados (como tratamento da entrada e renderização gráfica).",
            url: "#/info/14",
            palestra: 1,
            id: 14
        }, {
            title: "Computação Quântica",
            nome_palestrante: "Professores Cris e Gubi",
            start: new Date(2015, 8, 8, 16, 30),
            end: new Date(2015, 8, 8, 17, 20),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "<b>Cris</b><br>Formada pelo BCC em 1987, Cristina é docente do Departamento de Ciência da Computação desde 1988. Fez mestrado no IME, orientada pelo Professor Paulo Feofiloff, e depois fez seu doutorado no College of Computing do Georgia Institute of Technology (EUA), no programa Algorithms, Combinatorics, and Optimization. Sua área de pesquisa se enquadra em teoria da computação, mais especificamente projeto de algoritmos, teoria dos grafos, e otimização combinatória. Cristina ministra, tanto no BCC quanto na pós-graduação em Ciência da Computação, disciplinas ligadas a algoritmos, tais como estruturas de dados, análise de algoritmos, algoritmos de aproximação, geometria computacional, desafios de programação, entre outras mais básicas.<br><b>Gubi</b><br>Formado em Física pela USP em 1980, obteve o grau de mestre pela mesma instituição em 1987, em Teoria de Campos e Partículas Elementares. Em 1987 foi contratado pelo IME como professor assistente e em 1989 desenvolveu o primeiro anti-vírus de computador no Brasil. Entre 1989 e 1991 esteve como professor visitante na Carnegie Mellon University, iniciando seu doutorado logo após seu retorno, na área de modelagem de desempenho de sistemas paralelos. Fez diversas visitas científicas à Universidade de Vienna, ao GMD-first em Berlin e a Texas A&M University. Atualmente trabalha em Bioinformática, Etimologia da Língua Portuguesa e Simulação de Imagens Estelares para Astrobiologia.",
            text_palesta: "Primeiramente falaremos da história e princípios da mecânica quântica de uma forma intuitiva (tanto quanto possível) e lúdica, com destaque para os resultados que permitem a realização da computação quântica. Em seguida apresentaremos os ingredientes de um computador quântico, comparando-os com os correspondentes de um computador clássico. Faremos um resumo dos principais resultados teóricos conhecidos, suas implicações, e as dificuldades para se construir um computador quântico de interesse prático.",
            url: "#/info/16",
            palestra: 1,
            id: 16
        }, {
            title: "Colaboração e Cidades Inteligentes",
            nome_palestrante: "Roberto Speicys",
            start: new Date(2015, 8, 10, 16, 30),
            end: new Date(2015, 8, 10, 17, 20),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Roberto Speicys Cardoso é doutor em Ciência da Computação pela Universidade Pierre et Marie Curie - Paris VI - Sorbonne Universités na área de privacidade em sistemas pervasivos. Participou de diversos projetos europeus de pesquisa nas áreas de serviços pervasivos, adaptação de sistemas e smart cities. Fundou na França a empresa Ambientic que desenvolve middleware para aplicações móveis multi-plataformas e no Brasil é sócio-fundador da Scipopulis, empresa que cria plataformas para a construção de conhecimento a partir da sabedoria coletiva.",
            text_palesta: "Nessa palestra, falaremos de como iniciativas colaborativas podem deixar as cidades mais inteligentes, as dificuldades em criar plataformas colaborativas e o que a Scipopulis está fazendo para deixar as cidades mais inteligentes a partir da colaboração dos cidadãos.",
            url: "#/info/15",
            palestra: 1,
            id: 15
        }, {
            title: "Palestra pré-Hackathon",
            start: new Date(2015, 8, 12, 14),
            end: new Date(2015, 8, 12, 15),
            backgroundColor: '#09508a',
            local: "Auditório do CCSL",
        }, {
            title: "Apresentações, encerramento e premiações",
            start: new Date(2015, 8, 13, 15),
            end: new Date(2015, 8, 13, 16),
            backgroundColor: '#09508a',
            local: "Auditório do CCSL",
        }, {
            title: "Conversa com os professores do departamento de ciências da computação.",
            start: new Date(2015, 8, 11, 14),
            end: new Date(2015, 8, 11, 17, 20),
            backgroundColor: '#09508a',
            local: "Sala B-5",
        }, {
            title: "Porque nerds são as melhores pessoas para empreender",
            nome_palestrante: "Allan Panossian Kajimoto - Kekanto",
            start: new Date(2015, 8, 9, 10),
            end: new Date(2015, 8, 9, 10, 50),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Formado em Ciência da Computação pela USP na turma de 2004, co-fundou o Kekanto em 2010. Desde de 2005 está envolvido no mundo de startups e fez parte do time fundador da Via6 (terceira maior rede social do Brasil em 2008), Direct Labs (consultoria de redes sociais) e Scup (plataforma de relacionamento em redes sociais). No tempo livre gosta de acompanhar a evolução do empreendedorismo no Brasil e empresas em estágio inicial, especialmente de tecnologia.",
            text_palesta: "Nesta palestra Allan Kajimoto vai mostrar porque os cientistas da computação tem vantagens para empreender nos dias de hoje contando um pouco de sua trajetória empreendedora, case do Kekanto e de outros colegas de turma que empreenderam. Também contará algumas dicas preciosas de como começar.",
            url: "#/info/17",
            palestra: 1,
            id: 17
        }, {
            title: "Contratado.me",
            nome_palestrante: "Lucas",
            start: new Date(2015, 8, 9, 11),
            end: new Date(2015, 8, 9, 11, 50),
            image: "",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Em breve.",
            text_palesta: "Em breve.",
            url: "#/info/20",
            palestra: 1,
            id: 20
        }];

        return {
            all: function() {
                return palestrantes;
            },
            id: function(id) {
                var k = -1;
                angular.forEach(palestrantes, function(index) {
                    if (index.id == id) {
                        k = index;
                    }
                });
                return k;
            }
        };

    });
