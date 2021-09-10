package br.com.automacao.pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class BuscaPage extends BasePage {


	By menuAjuda =          By.id("u-depth1__item-15214");
	By linkCentralDeAjuda = By.id("u-depth3__item-15218");
	By inputPalavraChave =  By.id("faq-search-input");
	By listaResultados =    By	.xpath("//h2[@class='c-search-dropdown-link__title']");


	public BuscaPage selecionarMenuAjuda() {

		clicar(menuAjuda);
		return this;
	}

	public BuscaPage selecionarCentralDeAjuda() {

		clicar(linkCentralDeAjuda);
		return this;
	}

	public BuscaPage digitarPalavraChave(String assunto) {

		escrever(inputPalavraChave, assunto);
		return this;
	}

	public BuscaPage listarResultadosPesquisa(String resultado) {

		List<WebElement> listaElementos = retornaListaElementos(listaResultados);

		for (WebElement webElement : listaElementos) {    
			System.out.println(webElement.getText());
			Assert.assertTrue(webElement.getText().contains(resultado));

		}

		return this;
	}

}
