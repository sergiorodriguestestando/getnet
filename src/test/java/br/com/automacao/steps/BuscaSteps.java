package br.com.automacao.steps;

import br.com.automacao.pages.BuscaPage;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class BuscaSteps {

	BuscaPage cp = new BuscaPage();

	@Quando("^realizar uma busca por \"([^\"]*)\"$")
	public void realizar_uma_busca_por(String assunto) throws Throwable {

		cp.selecionarMenuAjuda();
		cp.selecionarCentralDeAjuda();
		cp.digitarPalavraChave(assunto);

	}

	@Então("^o resultado da consulta será \"([^\"]*)\"$")
	public void o_resultado_da_consulta_será(String resultado) throws Throwable {
		cp.listarResultadosPesquisa(resultado);
	}

}
