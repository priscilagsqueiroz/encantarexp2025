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
    image: "./assets/img/palestrantes/bethel-lombardi.png",
    description: "<p>“Sou a personificação da paixão pela vida e pelas infinitas possibilidades que ela oferece.”</p><p>Bethel Corcoruto Lombardi é contador, músico e mentor, criador da metodologia 'Encantar para lucrar', que conecta empresários e fascina clientes. Como inovador, acredita que transformar exige ação, inovação e inspiração. Conhecido como o 'Contador das Estrelas', atende personalidades renomadas com um estilo humanizado. Sua missão vai além do lucro: busca tocar vidas e inspirar a excelência. Nesta imersão, compartilhará técnicas de encantamento usadas por gigantes como Disney e Zappos.</p>"
  },
  {
    id: "carlos-ferreirinha",
    name: "Carlos Ferreirinha",
    image: "./assets/img/palestrantes/carlosferreirinha.png",
    description: "<p>Referência e maior autoridade em gestão de luxo, palestrante, pensador estratégico</p> <p>Como ex-presidente da Louis Vuitton Brasil, Carlos é um visionário no mundo das marcas de luxo.</p> <p>Sua expertise em encantamento do cliente e gestão de marcas é inestimável.</p> <p>Fundador da MCF Consultoria & Conhecimento, ele traduziu com maestria a Inteligência da Gestão do Luxo para a América Latina.</p> <p>Seu livro “O Paladar não Retrocede” é uma leitura obrigatória para quem busca insights sobre o universo do luxo.</p>"
  },
  {
    id: "debora-pereira",
    name: "Débora Pereira",
    image: "./assets/img/palestrantes/debora_foto.png",
    description: "<p>Expert em lançamentos digitais, com mais de 30 mil vendas realizadas.</p> <p>Fundadora do Pixeld News, um portal de notícias sobre marketing digital.</p> <p>Já realizou mais de 30 mil vendas online, destacando - se como uma lançadora de sucesso.</p> <p>Missão: Inspirar mulheres a empreenderem e explorarem oportunidades no mundo dos negócios digitais.</p>"
  },
  {
    id: "everton-rosa",
    name: "Everton Rosa",
    image: "./assets/img/palestrantes/evertonrosa_foto.png",
    description: "<p>Especialista e autoridade em posicionamento de imagem pessoal e profissional.</p> <p>Fotógrafo renomado internacionalmente.</p> <p>Criador do Myself Club, programa de Posicionamento e Reposicionamento de Imagem Pessoal e Profissional.</p> <p>Seu renome internacional como fotógrafo adiciona um toque único à sua abordagem.</p>"
  },
  {
    id: "flavio-garcia",
    name: "Flávio Garcia",
    image: "./assets/img/palestrantes/flaviogarcia_foto.png",
    description: "<p>Experiência: Empresário e investidor anjo com 24 anos focados em comportamento empresarial de resultados.</p> <p>Educação e Impacto: Fundador da MBM Business School, com mais de 4.300 empresários formados e R$ 3 bilhões em R.O.I. para os alunos.</p> <p>Realizações: Criador do Método MBM, aplicado em mais de 4.000 empresas.</p> <p>Reconhecimento: MBM é considerada a mais sólida escola de negócios do Brasil.</p>"
  },
  {
    id: "joao-adolfo",
    name: "João Adolfo",
    image: "./assets/img/palestrantes/joaoadolfo.png",
    description: "<p>Estrategista de finanças e investimentos.</p> <p>Experiência em crescimento sustentável e gestão de capital.</p> <p>Reputado por facilitar a compreensão de investimentos estratégicos.</p> <p>Discutirá oportunidades de encantar clientes por meio de finanças.</p>"
  },
  {
    id: "marcos-roberto",
    name: "Marcos Roberto",
    image: "./assets/img/palestrantes/marcosgoleiro_foto.png",
    description: "<p>Ídolo Palmeirense: Um dos maiores ídolos do Palmeiras, com 20 anos dedicados ao clube.</p> <p>Ex - futebolista: Goleiro titular da Seleção Brasileira na Copa do Mundo de 2002, conquistando o título.</p> <p>Palestrante e Investidor.</p>"
  },
  {
    id: "steven-phil",
    name: "Steven Phil",
    image: "./assets/img/palestrantes/stevenphil.png",
    description: "<p>Ceo FPass, Fundador do Instituto em cinema, empresário. Sociólogo e psicanalista.</p> <p>Especialista em estratégias digitais, Steven explorará como encantar clientes no mundo online.</p> <p>Sua visão abrange o cenário digital e as táticas para maximizar o alcance e o impacto.</p>"
  },
  {
    id: "renato-alves",
    name: "Renato Alves",
    image: "./assets/img/palestrantes/renatoalves_foto.png",
    description: "<p>Autor e palestrante premiado.</p> <p>Especialista em aprendizagem, foco, concentração e memória.</p> <p>Reconhecido por seus best-sellers nas listas dos mais vendidos do Brasil.</p> <p>Fundador da Memory Academy com vasta experiência em capacitação.</p> <p>Demonstrará técnicas de memorização para melhorar a performance pessoal e profissional.</p>"
  },
  {
    id: "sofia-hecktheuer",
    name: "Sofia Hecktheuer",
    image: "./assets/img/palestrantes/sofiahecktheuer.png",
    description: "<p>Consultora empresarial de renome internacional.</p> <p>Especialista em gestão de equipe e liderança.</p> <p>Conhecida por promover culturas corporativas inovadoras.</p> <p>Oferecerá métodos para transformar o ambiente de trabalho.</p>"
  },
  {
    id: "cris-manfro",
    name: "Cris Manfro",
    image: "./assets/img/palestrantes/cris-manfro.png",
    description: "<p>Psicóloga, Palestrante e Mentora.</p> <p>Escritora focada em desenvolvimento pessoal.</p> <p>Especialista em Relacionamentos.</p> <p>Terapia de Casais.</p> <p>Defende a ideia de que relacionamentos de sucesso começam pelo autoconhecimento.</p> <p>Promove a transformação pessoal para alcançar sua melhor versão.</p>"
  },
  {
    id: "haila",
    name: "Haila Santuá",
    image: "./assets/img/palestrantes/haila.png",
    description: "<p>Empresária, palestrante, influenciadora digital e mentora de mulheres empreendedoras.</p> <p>Atua há mais de 10 anos no universo do empreendedorismo, unindo visão de negócio à gestão das emoções.</p> <p>Finalista do MasterChef 19, é formada em Artes Cênicas, Publicidade e Propaganda e Confeitaria.</p> <p>Hoje, dedica-se a capacitar mulheres para alcançarem sucesso e descobrirem todo o seu potencial.</p>"
  },
  {
    id: "thais",
    name: "Thais Rezende",
    image: "./assets/img/palestrantes/thaisrezende.png",
    description: "<p>Empreendedora, palestrante e fundadora do projeto Líderes do Futuro</p> <p>Fundadora do Líderes do Futuro, iniciativa que transforma a educação financeira e o empreendedorismo infantil no Brasil.</p> <p>Atua com propósito em preparar crianças e pais para assumirem o protagonismo de um futuro próspero e consciente.</p> <p>Palestrante inspiradora, une ação prática, impacto social e valores cristãos em sua missão educativa.</p> <p>Defensora de uma nova forma de educar, que vai além do conteúdo: forma caráter, visão e responsabilidade desde cedo.</p>"
  },
  {
    id: "lucas",
    name: "Lucas Lombardi",
    image: "./assets/img/palestrantes/lucaslombardi.png",
    description: "<p>Encantador mirim que já inspira com atitude e coração</p> <p>Jovem talento que acredita que não é preciso esperar crescer para começar a fazer a diferença.</p> <p>Com carisma, presença e visão, Lucas mostra que idade não limita propósito nem impacto.</p> <p>Defensor de um mundo com mais gentileza, coragem e grandes ideias colocadas em prática.</p> <p>Uma prova viva de que encantamento começa no olhar, na atitude e no exemplo — em qualquer idade.</p>"
  },
];

const track = document.getElementById("carousel-track");

// Duplicar slides
const duplicated = [...speakersData, ...speakersData];
duplicated.forEach((speaker) => {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  const [firstName, ...lastName] = speaker.name.split(" ");
  slide.innerHTML = `
  <img src="${speaker.image}" alt="${speaker.name}" data-id="${speaker.id}">
  <div class="speaker-name"><b>${firstName}</b> ${lastName.join(" ")}</div>
  <div class="hover-text">Saiba tudo sobre os<br>palestrantes, toque na foto!</div>
`;
  track.appendChild(slide);
});

// Modal
document.querySelector(".carousel-track").addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  const speaker = speakersData.find(s => s.id === img.dataset.id);
  if (!speaker) return;

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
  <button class="modal-close" onclick="closeModal()">×</button>
  <div class="modal-body-content">
    <img src="${speaker.image}" alt="${speaker.name}">
    <div class="modal-text">
      <h2>${speaker.name}</h2>
      ${speaker.description}
    </div>
  </div>
`;
  modal.style.display = "flex";
});

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
window.closeModal = closeModal;

import * as bootstrap from "bootstrap"
