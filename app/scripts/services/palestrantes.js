'use strict';

/**
 * @ngdoc service
 * @name encontroApp.palestrantes
 * @description
 * # palestrantes
 * Service in the encontroApp.
 */
angular.module('encontroApp')
  .service('Palestrantes', function () {
  	var palestrantes = [
  		{
  			title: "Teste 1",
  			nome_palestrante: "Zé",
  			start: new Date(2015, 8, 12, 10, 0),
  			end:  new Date(2015, 8, 12, 12, 0),
  			image: "",
  			text_pessoal: "Eu sou um cara legal.",
  			text_palesta: "Não é..."
  		},
  		{
  			title: "Teste 1",
  			nome_palestrante: "Zé",
  			start: new Date(2015, 8, 10, 18, 0),
  			end:  new Date(2015, 8, 10, 18, 30),
  			image: "",
  			text_pessoal: "Eu sou um cara legal.",
  			text_palesta: "Não é..."
  		}
  	];
  	return {
  		all: function (){
  			return palestrantes;
  		}
  	};

  });
