package br.com.automacao.steps;

import br.com.automacao.pages.BuscaPage;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class BuscaSteps {


BuscaPage cp = new BuscaPage();

	
	@Quando("^cadatrar um cliente no site$")
	public void cadatrar_um_cliente_no_site() throws Throwable {
	
//		cp.selecionarMenuAjuda();
//		cp.selecionarCentralDeAjuda();
//		cp.digitarPalavraChave();
	//	cp.listarResultadosPesquisa();
		
	}
	
	
	@Quando("^acessar o site$")
	public void acessar_o_site() throws Throwable {
	 
	}

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
