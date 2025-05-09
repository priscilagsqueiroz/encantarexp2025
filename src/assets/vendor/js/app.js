function animarContador(elemento, inicio, fim, duracao) {
  let startTime = null;
  function animaAtual(time) {
      if (!startTime) startTime = time;
      let progress = Math.min((time - startTime) / duracao, 1);
      elemento.innerText = Math.floor(progress * (fim - inicio) + inicio);
      if (progress < 1) {
          requestAnimationFrame(animaAtual);
      }
  }
  requestAnimationFrame(animaAtual);
}

const contador1 = document.getElementById("contador1");
const contador2 = document.getElementById("contador2");
const contador3 = document.getElementById("contador3");

animarContador(contador1, 0, 500, 2000); // Contagem de 0 a 500 em 2 segundos
animarContador(contador2, 0, 850, 2500); // Contagem de 0 a 850 em 2.5 segundos
animarContador(contador3, 0, 15, 1500);  // Contagem de 0 a 15 em 1.5 segundos

// Dados dos palestrantes
const speakersData = [
  {
    id: "bethel-lombardi",
    name: "Bethel Lombardi",
    image: "./assets/img/palestrantes/bethel-lombardi.jpg",
    description:
      "<p>“Sou a personificação da paixão pela vida e pelas infinitas possibilidades que ela oferece.”</p><p>Bethel Corcoruto Lombardi é contador, músico e mentor, criador da metodologia 'Encantar para lucrar', que conecta empresários e fascina clientes. Como inovador, acredita que transformar exige ação, inovação e inspiração. Conhecido como o 'Contador das Estrelas', atende personalidades renomadas com um estilo humanizado. Sua missão vai além do lucro: busca tocar vidas e inspirar a excelência. Nesta imersão, compartilhará técnicas de encantamento usadas por gigantes como Disney e Zappos.</p>",
  },
  {
    id: "carlos-ferreirinha",
    name: "Carlos Ferreirinha",
    image: "./assets/img/palestrantes/carlosferreirinha.png",
    description:
      "<p>Referência e maior autoridade em gestão de luxo, palestrante, pensador estratégico</p> <p>Como ex-presidente da Louis Vuitton Brasil, Carlos é um visionário no mundo das marcas de luxo.</p> <p>Sua expertise em encantamento do cliente e gestão de marcas é inestimável.</p> <p>Fundador da MCF Consultoria & Conhecimento, ele traduziu com maestria a Inteligência da Gestão do Luxo para a América Latina.</p> <p>Seu livro “O Paladar não Retrocede” é uma leitura obrigatória para quem busca insights sobre o universo do luxo.</p>",
  },
  {
    id: "clayton-souza",
    name: "Clayton Souza",
    image: "./assets/img/palestrantes/claytonsouza.png",
    description:
      "<p>Founder e CEO da DD3 Company SA.</p> <p>Especialista em Educação e Modelos de Negócio.</p> <p>Trará o tema: O Empreender depende do Saber.</p>",
  },
  {
    id: "debora-pereira",
    name: "Débora Pereira",
    image: "./assets/img/palestrantes/debora_foto.png",
    description:
      "<p>Expert em lançamentos digitais, com mais de 30 mil vendas realizadas.</p> <p>Fundadora do Pixeld News, um portal de notícias sobre marketing digital.</p> <p>Já realizou mais de 30 mil vendas online, destacando - se como uma lançadora de sucesso.</p> <p>Missão: Inspirar mulheres a empreenderem e explorarem oportunidades no mundo dos negócios digitais.</p>",
  },
  {
    id: "everton-rosa",
    name: "Everton Rosa",
    image: "./assets/img/palestrantes/evertonrosa_foto.png",
    description:
      "<p>Especialista e autoridade em posicionamento de imagem pessoal e profissional.</p> <p>Fotógrafo renomado internacionalmente.</p> <p>Criador do Myself Club, programa de Posicionamento e Reposicionamento de Imagem Pessoal e Profissional.</p> <p>Seu renome internacional como fotógrafo adiciona um toque único à sua abordagem.</p>",
  },
  {
    id: "flavio-garcia",
    name: "Flávio Garcia",
    image: "./assets/img/palestrantes/flaviogarcia_foto.png",
    description:
      "<p>Experiência: Empresário e investidor anjo com 24 anos focados em comportamento empresarial de resultados.</p> <p>Educação e Impacto: Fundador da MBM Business School, com mais de 4.300 empresários formados e R$ 3 bilhões em R.O.I. para os alunos.</p> <p>Realizações: Criador do Método MBM, aplicado em mais de 4.000 empresas.</p> <p>Reconhecimento: MBM é considerada a mais sólida escola de negócios do Brasil.</p>",
  },
  {
    id: "joao-adolfo",
    name: "João Adolfo",
    image: "./assets/img/palestrantes/joaoadolfo.png",
    description:
      "<p>Estrategista de finanças e investimentos.</p> <p>Experiência em crescimento sustentável e gestão de capital.</p> <p>Reputado por facilitar a compreensão de investimentos estratégicos.</p> <p>Discutirá oportunidades de encantar clientes por meio de finanças.</p>",
  },
  {
    id: "marcos-roberto",
    name: "Marcos Roberto",
    image: "./assets/img/palestrantes/marcosgoleiro_foto.png",
    description:
      "<p>Ídolo Palmeirense: Um dos maiores ídolos do Palmeiras, com 20 anos dedicados ao clube.</p> <p>Ex - futebolista: Goleiro titular da Seleção Brasileira na Copa do Mundo de 2002, conquistando o título.</p> <p>Palestrante e Investidor.</p>",
  },
  {
    id: "steven-phil",
    name: "Steven Phil",
    image: "./assets/img/palestrantes/stevenphil.png",
    description:
      "<p>Ceo FPass, Fundador do Instituto em cinema, empresário. Sociólogo e psicanalista.</p> <p>Especialista em estratégias digitais, Steven explorará como encantar clientes no mundo online.</p> <p>Sua visão abrange o cenário digital e as táticas para maximizar o alcance e o impacto.</p>",
  },
  {
    id: "renato-alves",
    name: "Renato Alves",
    image: "./assets/img/palestrantes/renatoalves_foto.png",
    description:
      "<p>Autor e palestrante premiado.</p> <p>Especialista em aprendizagem, foco, concentração e memória.</p> <p>Reconhecido por seus best-sellers nas listas dos mais vendidos do Brasil.</p> <p>Fundador da Memory Academy com vasta experiência em capacitação.</p> <p>Demonstrará técnicas de memorização para melhorar a performance pessoal e profissional.</p>",
  },
  {
    id: "sofia-hecktheuer",
    name: "Sofia Hecktheuer",
    image: "./assets/img/palestrantes/sofiahecktheuer.png",
    description:
      "<p>Consultora empresarial de renome internacional.</p> <p>Especialista em gestão de equipe e liderança.</p> <p>Conhecida por promover culturas corporativas inovadoras.</p> <p>Oferecerá métodos para transformar o ambiente de trabalho.</p>",
  },
  {
    id: "cris-manfro",
    name: "Cris Manfro",
    image: "./assets/img/palestrantes/cris-manfro.png",
    description:
      "<p>Psicóloga, Palestrante e Mentora.</p> <p>Escritora focada em desenvolvimento pessoal.</p> <p>Especialista em Relacionamentos.</p> <p>Terapia de Casais.</p> <p>Defende a ideia de que relacionamentos de sucesso começam pelo autoconhecimento.</p> <p>Promove a transformação pessoal para alcançar sua melhor versão.</p>",
  },
  {
    id: "haila",
    name: "Haila Santuá",
    image: "./assets/img/palestrantes/haila.png",
    description:
      "<p>Empresária, palestrante, influenciadora digital e mentora de mulheres empreendedoras.</p> <p>Atua há mais de 10 anos no universo do empreendedorismo, unindo visão de negócio à gestão das emoções.</p> <p>Finalista do MasterChef 19, é formada em Artes Cênicas, Publicidade e Propaganda e Confeitaria.</p> <p>Hoje, dedica-se a capacitar mulheres para alcançarem sucesso e descobrirem todo o seu potencial.</p>",
  },
]

// Função para inicializar os modais dos palestrantes
function initSpeakerModals() {
  // Adicionar o modal ao final do body
  if (!document.getElementById("speakerModal")) {
    const modalTemplate = document.createElement("div")
    modalTemplate.innerHTML = `
      <div class="modal fade" id="speakerModal" tabindex="-1" aria-labelledby="speakerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-5">
                  <img id="speakerModalImage" src="/assets/img/placeholder.svg" alt="Palestrante" class="img-fluid speaker-modal-image">
                </div>
                <div class="col-md-7">
                  <h2 id="speakerModalName" class="speaker-modal-name"></h2>
                  <p id="speakerModalDescription" class="speaker-modal-description"></p>
                </div>
              </div>   
            </div>
          </div>
        </div>
      </div>
    `
    document.body.appendChild(modalTemplate)
  }

  // Adicionar evento de clique para todos os cards de palestrantes (desktop)
  const speakerCardsDesktop = document.querySelectorAll("#speakerCarouselDesktop .speaker-card")
  speakerCardsDesktop.forEach((card, index) => {
    card.style.cursor = "pointer"
    card.addEventListener("click", () => {
      openSpeakerModal(index)
    })
  })

  // Adicionar evento de clique para todos os cards de palestrantes (mobile)
  const speakerCardsMobile = document.querySelectorAll("#speakerCarouselMobile .speaker-card")
  speakerCardsMobile.forEach((card, index) => {
    card.style.cursor = "pointer"
    card.addEventListener("click", () => {
      openSpeakerModal(index)
    })
  })
}

// Função para abrir o modal com os dados do palestrante
function openSpeakerModal(index) {
  if (index >= 0 && index < speakersData.length) {
    const speaker = speakersData[index]

    // Preencher os dados no modal
    document.getElementById("speakerModalImage").src = speaker.image
    document.getElementById("speakerModalName").textContent = speaker.name
    document.getElementById("speakerModalDescription").innerHTML = speaker.description

    // Abrir o modal
    const speakerModalElement = document.getElementById("speakerModal")
    const speakerModal = new bootstrap.Modal(speakerModalElement)
    speakerModal.show()
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  // Adicionar o CSS do modal
  const style = document.createElement("style")
  style.textContent = `
    /* Estilos para o modal dos palestrantes */
    .modal-content {
      background-color: #fff;
      border-radius: 15px;
      border: none;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .modal-header {
      border-bottom: none;
      padding: 15px 15px 0 0;
    }

    .modal-body {
      padding: 20px 30px 30px;
    }

    .speaker-modal-image {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .speaker-modal-name {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: #6610f2;
      text-transform: uppercase;
    }

    .speaker-modal-description {
      font-size: 1rem;
      line-height: 1.6;
      color: #333;
    }

    /* Ajustes para dispositivos móveis */
    @media (max-width: 767px) {
      .modal-dialog {
        margin: 10px;
      }
      
      .speaker-modal-name {
        font-size: 2rem;
        margin-top: 20px;
      }
    }
  `
  document.head.appendChild(style)

  initSpeakerModals()
})

import * as bootstrap from "bootstrap"