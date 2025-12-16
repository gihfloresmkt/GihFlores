// funcao de slide
document.querySelectorAll(".slider-container").forEach(container => {
    let index = 0;
    const slider = container.querySelector(".slider");
    const cards = slider.querySelectorAll(".card");

    function atualizar() {
        const cardWidth = cards[1].offsetWidth + 20; // gap
        const visiveis = Math.floor(container.offsetWidth / cardWidth);
        const limite = cards.length - visiveis;

        if (index < 0) index = 0;
        if (index > limite) index = limite;

        slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    container.querySelector(".next").addEventListener("click", () => {
        index++;
        atualizar();
    });

    container.querySelector(".prev").addEventListener("click", () => {
        index--;
        atualizar();
    });

    // inicia
    atualizar();
    window.addEventListener("resize", atualizar);
});
/////////////////////////////////////////////////////////////////////
// modal //////////////////////////////////////////////
const modal = document.getElementById('pedidoModal');
  const body = document.body;
  const produtoSelect = document.getElementById('produto');
  const valorDisplay = document.getElementById('valor');

  function openModal() {
    modal.style.display = 'block';
    body.classList.add('modal-open');
  }

  function closeModal() {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  }

  // Atualiza o preço conforme a seleção
  produtoSelect.addEventListener('change', () => {
    const option = produtoSelect.selectedOptions[0];
    const price = option.getAttribute('data-price');
    valorDisplay.textContent = `R$ ${parseFloat(price).toFixed(2)}`;
  });

  // Enviar para WhatsApp
  document.getElementById('pedidoForm').addEventListener('submit', function(e){
    e.preventDefault();
    const local = document.getElementById('local').value;
    const nome = document.getElementById('nome').value;
    const frase = document.getElementById('frase').value || 'Nenhuma';
    const horario = document.getElementById('horario').value;
    const produto = produtoSelect.value;
    const valor = valorDisplay.textContent;

    const mensagem = ` *Novo Pedido*\n\n` +
                     ` Local da entrega: ${local}\n` +
                     ` Nome do falecido: ${nome}\n` +
                     ` Homenagem: ${frase}\n` +
                     ` Horário do velório: ${horario}\n` +
                     ` Produto: ${produto}\n` +
                     ` Valor: ${valor}`;

    // Coloque seu número com código do país (ex: 55 para Brasil)
    const numeroWpp = "5511954627987"; 
    const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });

function openModal() {
    if (!tamanhoSelecionado) {
        alert("Selecione um tamanho antes de comprar.");
        return;
    }
  }

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("modalBox").style.display = "none";
}



let tamanhoSelecionado = "";
let precoSelecionado = "";

// Detectar clique nos botões de tamanho
document.querySelectorAll(".opcao").forEach((botao) => {
    botao.addEventListener("click", function () {

        // Remover seleção visual anterior
        document.querySelectorAll(".opcao").forEach(b => b.classList.remove("active"));

        // Adicionar seleção no clicado
        this.classList.add("active");

        tamanhoSelecionado = this.querySelector("strong").innerText.trim();
        precoSelecionado = this.innerText.split("R$")[1].trim();
    });
});

function openModal() {
    const tituloProduto = document.querySelector(".product-info .title")?.innerText || "Produto";

    if (!tamanhoSelecionado) {
        alert("Selecione um tamanho antes de continuar.");
        return;
    }

    const select = document.getElementById("produto");
    select.innerHTML = ""; // limpar

    // Criar option automático
    const option = document.createElement("option");

    option.value = `${tituloProduto} - ${tamanhoSelecionado}`;
    option.textContent = `${tituloProduto} - ${tamanhoSelecionado} (R$ ${precoSelecionado})`;
    option.setAttribute("data-price", precoSelecionado);

    select.appendChild(option);
    select.selectedIndex = 0;

    // Atualizar preço no modal
    document.getElementById("valor").innerText = "R$ " + precoSelecionado;

    // Mostrar modal
    document.getElementById("pedidoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("pedidoModal").style.display = "none";
}

// Atualizar preço quando mudar o select (caso queira expandir depois)
document.getElementById("produto").addEventListener("change", function () {
    const price = this.options[this.selectedIndex].getAttribute("data-price");
    document.getElementById("valor").innerText = "R$ " + price.replace(".", ",");
});


// maps ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function mudarFilial(filial) {
    // Pegue seu link embed do Google Maps e cole aqui:
    const filial1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.58765195081!2d-46.44150189999999!3d-23.511357399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce61555dd0939f%3A0x60e638586eb08010!2sCoroa%20de%20Flores%20-%20Gih%20flores%20e%20presentes!5e0!3m2!1spt-BR!2sbr!4v1765555344660!5m2!1spt-BR!2sbr";
    const filial2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.950775607659!2d-46.3939552!3d-23.534272799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce612e4407666f%3A0xa704c50a5ae72bab!2sGih%20flores%20e%20Presentes!5e0!3m2!1spt-BR!2sbr!4v1765555598115!5m2!1spt-BR!2sbr";

    const mapa = document.getElementById("mapa");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    if (filial === 1) {
        mapa.src = filial1;
        btn1.classList.add("ativo");
        btn2.classList.remove("ativo");
    } else {
        mapa.src = filial2;
        btn2.classList.add("ativo");
        btn1.classList.remove("ativo");
    }
}
//bota de tamanbho

document.querySelectorAll(".opcao").forEach(btn => {
    btn.addEventListener("click", function () {

        // remove seleção dos outros botões
        document.querySelectorAll(".opcao").forEach(o => o.classList.remove("selected"));

        // marca como selecionado
        this.classList.add("selected");

        // pega o preço do data-price
        const price = this.getAttribute("data-price");

        // altera o texto do .price
        document.querySelector(".price").textContent = "R$ " + price;
    });
});


    const items1 = document.querySelectorAll('.faq-item');

    items1.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });





