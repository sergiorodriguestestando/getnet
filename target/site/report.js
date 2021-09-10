$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/buscas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 4,
  "name": "Como um cliente eu quero realizar uma busca de uma funcionalidade no site",
  "description": "",
  "id": "como-um-cliente-eu-quero-realizar-uma-busca-de-uma-funcionalidade-no-site",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar busca no site",
  "description": "",
  "id": "como-um-cliente-eu-quero-realizar-uma-busca-de-uma-funcionalidade-no-site;realizar-busca-no-site",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 11,
  "name": "realizar uma busca por \u003cassunto\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o resultado da consulta será \u003cresultado\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "como-um-cliente-eu-quero-realizar-uma-busca-de-uma-funcionalidade-no-site;realizar-busca-no-site;",
  "rows": [
    {
      "cells": [
        "assunto",
        "resultado"
      ],
      "line": 17,
      "id": "como-um-cliente-eu-quero-realizar-uma-busca-de-uma-funcionalidade-no-site;realizar-busca-no-site;;1"
    },
    {
      "cells": [
        "\"superget\"",
        "\"Como ativar/desbloquear meu cartão SuperGet?\""
      ],
      "line": 18,
      "id": "como-um-cliente-eu-quero-realizar-uma-busca-de-uma-funcionalidade-no-site;realizar-busca-no-site;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar busca no site",
  "description": "",
  "id": "como-um-cliente-eu-quero-realizar-uma-busca-de-uma-funcionalidade-no-site;realizar-busca-no-site;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "realizar uma busca por \"superget\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o resultado da consulta será \"Como ativar/desbloquear meu cartão SuperGet?\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "superget",
      "offset": 24
    }
  ],
  "location": "BuscaSteps.realizar_uma_busca_por(String)"
});
formatter.result({
  "duration": 4850345700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Como ativar/desbloquear meu cartão SuperGet?",
      "offset": 30
    }
  ],
  "location": "BuscaSteps.o_resultado_da_consulta_será(String)"
});
formatter.result({
  "duration": 25240400,
  "status": "passed"
});
});