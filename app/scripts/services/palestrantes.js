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
            image: "",
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
            image: "",
            text_pessoal: "Eduardo Sany Laber se  formou em engenharia de computação pela PUC-RIO em 1996 e obteve seu doutorado  pela mesma instituição em 1999.  De 1999 a 2001, Eduardo foi recém-doutor na COPPE-UFRJ e desde então é professor do departamento de informática da PUC-RIO. Dentre as suas áreas de interesse em pesquisa destacam-se algoritmos, compressão de dados e aprendizado de máquina. Ao longo de sua carreira, Eduardo publicou cerca de 30 artigos em periódicos internacionais, orientou várias dissertações de mestrado e teses de doutorado, algumas delas premiadas. Além disso, realizou trabalhos de consultoria, utilizando algoritmos e métodos quantitativos, para diferentes setores da indústria como mercado financeiro, setor de óleo e gás e setor de midia digital/comércio eletrônico.",
            text_palesta: "Um bom profissional não é avaliado somente por sua capacidade técnica, mas também por muitas competências e comportamentos essenciais para o bom funcionamento e sucesso de um time e da própria corporação. Sergio Vaz, ex-BCC, discutirá algumas dicas profissionais aos alunos do BCC, baseadas em sua experiência de mais de 15 anos gerenciando equipes de desenvolvimento.",
            url: "#/info/2",
            palestra: 1,
            id: 2
        }, {
            title: "Pós graduação acadêmica em Computação: o que é, como (e se) fazer.",
            nome_palestrante: "Samuel Plaça de Paula e Suzana de Siqueira Santos",
            start: new Date(0, 0, 0, 0),
            end: new Date(0, 0, 0, 0),
            image: "",
            text_pessoal: "Samuel ingressou no Bacharelado em Ciência da Computação do IME-USP em 2009, ano do primeiro Encontro do BCC. Atualmente faz mestrado em Computação na mesma instituição. Suas áreas de interesse incluem otimização combinatória, algoritmos de aproximação, grafos e complexidade computacional. É RD (representante discente) dos pós-graduandos em computação no Conselho do departamento e na Comissão Coordenadora do programa. <br> Suzana é IMEana desde 2009. Em 2012, realizou iniciação científica (com bolsa do PIBIC/CNPq) e concluiu o Bacharelado em Ciência da Computação. Em seguida, ingressou no mestrado em computação (com bolsa da FAPESP) do IME-USP, que foi concluído em 2015. Atualmente, cursa o primeiro ano do doutorado em computação no mesmo instituto. Suas áreas de interesse de pesquisa são grafos, grafos aleatórios e aplicações em redes biológicas (desde inferência de conectividade a métodos estatísticos para identificar alterações em doenças).",
            text_palesta: "A palestra tem o intuito de passar uma ideia do que é uma pós graduação acadêmica na área de Computação, sob o ponto de vista de quem conhece a realidade do programa do IME-USP. Nosso objetivo é procurar discutir o que é um mestrado/doutorado, quais as atividades envolvidas e alguns dos principais desafios e recompensas. Também procuraremos abordar algumas informações gerais sobre o programa do IME-USP, dicas de sobrevivência e uma perspectiva de quais as consequências profissionais de se cursar um mestrado ou doutorado na área. Esses são os tópicos propostos, mas a discussão será guiada pela interação com o público presente.",
            url: "#/info/4",
            palestra: 1,
            id: 4
        }, {
            title: "Neurociência Computacional",
            nome_palestrante: "Antônio C. Roque",
            start: new Date(0, 0, 0, 0),
            end: new Date(0, 0, 0, 0),
            image: "http://placehold.it/150x150?text=Antônio C. Roque",
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
            image: "",
            text_pessoal: "Doutora em Ciência da Computação pela Universidade de São Paulo (2011), mestre e graduada pela mesma instituição (Departamento de Ciência da Computação - Instituto de Matemática e Estatística da USP). Tem pesquisado modelos alternativos de criptografia de chave pública, em especial os modelos sem certificado e baseado em identidade. Tópicos de interesse: segurança demonstrável, criptografia baseada em curvas elípticas/hiperelípticas, emparelhamentos bilineares, criptografia pós-quântica, infraestrutura de chaves públicas.",
            text_palesta: "A criptografia de chave pública é uma das bases conceituais de várias soluções de segurança em sistemas computacionais. Na atualidade, as implementações mais amplamente disseminadas mantém-se seguras enquanto não houver solução de complexidade polinomial para a fatoração de inteiros e para o cálculo de logaritmos discretos em corpos finitos. Sob o modelo computacional clássico (baseado em bits), é pouco provável que tal solução polinomial exista, mas isso não é verdade considerando-se o modelo computacional quântico (baseado em qubits). Em 1997, Peter Shor apresentou um algoritmo quântico capaz de fatorar inteiros em tempo hábil. Isso significa que, na existência de um computador quântico, dados hoje protegidos podem deixar de estar. Felizmente, existem problemas computacionais para os quais conjectura-se que, mesmo na presença de um computador quântico, não há solução eficiente. Esquemas criptográficos baseados nesses problemas são conhecidos como pós-quânticos. Nesse encontro, serão apresentados conceitos básicos relacionados à linha de pesquisa em criptografia pós-quântica e exemplos de primitivas criptográficas.",
            url: "#/info/6",
            palestra: 1,
            id: 6
        }, {
            title: "Mulheres na Computação",
            nome_palestrante: "Camila Achutti",
            start: new Date(2015, 8, 8, 11),
            end: new Date(2015, 8, 8, 11, 50),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            url: "#/info/7",
            palestra: 1,
            id: 7
        }, {
            title: "Neurociência Computacional",
            nome_palestrante: "Antônio C. Roque",
            start: new Date(2015, 8, 8, 14),
            end: new Date(2015, 8, 8, 14, 50),
            image: "",
            text_pessoal: "Natural de São Paulo (1963), Antônio Carlos Roque da Silva Filho, ou simplesmente Antônio Roque como é mais conhecido nos meios acadêmicos, formou-se em física pela Unicamp em 1985. Concluiu mestrado em física na mesma universidade (1987) e fez doutorado em ciência da computação e inteligência artificial na Universidade de Sussex, Inglaterra (1992). Em 1993, ingressou no Departamento de Física da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP) da USP onde atualmente é professor associado. Em 1996, fundou e coordena desde então o Laboratório de Sistemas Neurais (SisNe), que é um dos laboratórios de pesquisa pioneiros da América Latina em neurociência computacional. Suas atividades de pesquisa cobrem desde a modelagem biofisicamente detalhada de células nervosas até a modelagem de redes de neurônios compostas por dezenas de milhares de células. Outra ação importante e pioneira do Prof. Roque foi a criação em 2006 da escola bienal “Latin American School on Computational Neuroscience” (LASCON), que tem contribuído significativamente para a formação de pesquisadores em neurociência computacional no Brasil e na América Latina.",
            text_palesta: "Esta palestra fornecerá uma breve apresentação sobre o que é a neurociência computacional. Serão comentados os principais objetivos da área, desde a modelagem computacional de neurônios individuais até a modelagem de redes de neurônios compostas por centenas de milhares de células. Também serão comentadas as principais ferramentas computacionais para a construção de modelos e as principais linhas de pesquisa no tema desenvolvidas pelo palestrante e seus colaboradores.",
            url: "#/info/8",
            palestra: 1,
            id: 8
        }, {
            title: "HackathonIME",
            backgroundColor: '#09508a',
            start: new Date(2015, 8, 12, 15),
            end: new Date(2015, 8, 13, 15),
            image: "",
            text_pessoal: "Natural de São Paulo (1963), Antônio Carlos Roque da Silva Filho, ou simplesmente Antônio Roque como é mais conhecido nos meios acadêmicos, formou-se em física pela Unicamp em 1985. Concluiu mestrado em física na mesma universidade (1987) e fez doutorado em ciência da computação e inteligência artificial na Universidade de Sussex, Inglaterra (1992). Em 1993, ingressou no Departamento de Física da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP) da USP onde atualmente é professor associado. Em 1996, fundou e coordena desde então o Laboratório de Sistemas Neurais (SisNe), que é um dos laboratórios de pesquisa pioneiros da América Latina em neurociência computacional. Suas atividades de pesquisa cobrem desde a modelagem biofisicamente detalhada de células nervosas até a modelagem de redes de neurônios compostas por dezenas de milhares de células. Outra ação importante e pioneira do Prof. Roque foi a criação em 2006 da escola bienal “Latin American School on Computational Neuroscience” (LASCON), que tem contribuído significativamente para a formação de pesquisadores em neurociência computacional no Brasil e na América Latina.",
            text_palesta: "Esta palestra fornecerá uma breve apresentação sobre o que é a neurociência computacional. Serão comentados os principais objetivos da área, desde a modelagem computacional de neurônios individuais até a modelagem de redes de neurônios compostas por centenas de milhares de células. Também serão comentadas as principais ferramentas computacionais para a construção de modelos e as principais linhas de pesquisa no tema desenvolvidas pelo palestrante e seus colaboradores.",
            palestra: 0,
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
