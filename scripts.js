let elementoP = "";
let elementoB = "";
let elementoS = "";

let tituloPrato;
let tituloBebida;
let tituloSobremesa;

let precoBebida;
let precoPrato;
let precoSobremesa;
let precototal;

function selecionarPrato(j) {
    elementoP = document.querySelector(".prato" + j);
    const estaSelecionado = elementoP.classList.contains("selecionadoP");

    if (estaSelecionado == false) {
        for (let i = 1; i < 4; i++) {
            let op = document.querySelector('.prato' + i);
            op.classList.remove("selecionadoP");
        }
        elementoP.classList.add("selecionadoP");
    }
    else {
        elementoP.classList.remove("selecionadoP");
        elementoP = "";
    }

    finalizar();
    tituloPrato = pegarTitulo(elementoP);
    precoPrato = pegarPreco(elementoP);
    return elementoP;



}
function selecionarBebida(j) {
    elementoB = document.querySelector(".bebida" + j);
    const estaSelecionado = elementoB.classList.contains("selecionadoB");

    if (estaSelecionado == false) {
        for (let i = 1; i < 4; i++) {
            let op = document.querySelector('.bebida' + i);
            op.classList.remove("selecionadoB");
        }
        elementoB.classList.add("selecionadoB");

    }
    else {
        elementoB.classList.remove("selecionadoB");
        elementoB = "";
    }

    finalizar();
    tituloBebida = pegarTitulo(elementoB);
    precoBebida = pegarPreco(elementoB);
    return elementoB;


}
function selecionarSobremesa(j) {
    elementoS = document.querySelector(".sobre" + j);
    const estaSelecionado = elementoS.classList.contains("selecionadoS");

    if (estaSelecionado == false) {
        for (let i = 1; i < 4; i++) {
            let op = document.querySelector('.sobre' + i);
            op.classList.remove("selecionadoS");
        }
        elementoS.classList.add("selecionadoS");

    }
    else {
        elementoS.classList.remove("selecionadoS");
        elementoS = "";
    }

    finalizar();
    tituloSobremesa = pegarTitulo(elementoB);
    precoSobremesa = pegarPreco(elementoB);
    return elementoS;
}

function finalizar() {
    if (elementoP !== "" & elementoB !== "" & elementoS !== "") {
        document.querySelector(".botao").disabled = false;
        document.querySelector(".botao").value = 'Fechar pedido';
        document.querySelector(".botao").classList.add('botaof');
    }
    else {
        document.querySelector(".botao").disabled = true;
        document.querySelector('.botao').value = "Selecione os 3 itens \npara fechar o pedido";
        document.querySelector('.botao').classList.remove('botaof');
    }
}


function converterNumero(precoString) {
    let preco = precoString.replace("R$ ", "");
    preco = preco.replace(",", ".");
    preco = Number(preco) * 100;
    return preco;
}

function pegarTitulo(elemento) {
    return elemento.querySelector(".p-1").innerHTML;
}

function pegarPreco(elemento) {
    let preco = elemento.querySelector(".p-3").innerHTML;
    return converterNumero(preco);
}


function enviarPedido() {
    total = precoPrato + precoBebida + precoSobremesa;
    let msg = `Olá, gostaria de fazer o pedido:
      - Prato: ${tituloPrato}
      - Bebida: ${tituloBebida}
      - Sobremesa: ${tituloSobremesa}
      Total: R$ ${(total / 100).toFixed(2)}
      `;

    msg = encodeURIComponent(msg);

    enviaMesangemWhatsapp(msg);
}


function enviaMesangemWhatsapp(msg) {
    const numeroContatoWhatsapp = "219999999999";
    const linkWhatsapp = `https://wa.me/${numeroContatoWhatsapp}?text=${msg}`;
    window.open(linkWhatsapp);
}