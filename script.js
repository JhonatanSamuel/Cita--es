const quotes = [
  {
    quote: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin",
  },
  {
    quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
    author: "Steve Jobs",
  },
  {
    quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
  },
  {
    quote:
      "O fracasso é a oportunidade de começar de novo, com mais experiência.",
    author: "Henry Ford",
  },
  {
    quote: "Não espere por oportunidades, crie você mesmo as suas.",
    author: "Autor desconhecido",
  },
  {
    quote:
      "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
    author: "Winston Churchill",
  },
  {
    quote:
      "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
    author: "Winston Churchill",
  },
  {
    quote: "Acredite em si próprio e todo o resto virá naturalmente.",
    author: "Elon Musk",
  },
  {
    quote:
      "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
    author: "Autor desconhecido",
  },
  {
    quote:
      "Uma pergunta comum no mundo dos negócios é ‘Por quê?’. Essa é uma boa pergunta, mas uma igualmente válida é ‘Por que não?’ ",
    author: "Jeff Bezos",
  },
  {
    quote:
      "Um dia é preciso parar de sonhar, tirar os planos da gaveta e, de algum modo, começar.",
    author: "Amyr Klink",
  },
  {
    quote:
      "Eu acredito que é possível que pessoas comuns escolham ser extraordinárias.",
    author: "Elon Musk",
  },
  {
    quote:
      "Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Se alguém te oferecer uma oportunidade incrível, mas você não tem certeza de que consegue fazer, diga sim - e depois aprenda como fazer.",
    author: "Richard Branson",
  },
  {
    quote:
      "Sonhe grande, pois ter sonhos grandes dão o mesmo trabalho dos sonhos pequenos.",
    author: "Jorge Paulo Lemann",
  },
  {
    quote:
      "Normalmente as oportunidades estão disfarçadas de trabalho duro, é por isso que a maioria das pessoas não as reconhecem.",
    author: "Ann Landers",
  },
  {
    quote:
      "Eu gosto do impossível porque lá a concorrência é menor.",
    author: "Walt Disney",
  },
  {
    quote:
      "O pessimista vê dificuldade em cada oportunidade; o otimista vê oportunidade em cada dificuldade.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Eu não estaria onde estou se eu não tivesse falhado – e muito. O bom e o ruim fazem parte da equação do sucesso.",
    author: "Mark Cuban",
  },
  {
    quote:
      "O maior risco é não assumir nenhum risco. Em um mundo que muda rapidamente, a única estratégia garantida a falhar é não assumir riscos",
    author: " Mark Zuckerberg",
  },
  {
    quote:
      "Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer.",
    author: "Albert Einsten",
  },
  {
    quote:
      "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "Não crie desculpas para não ir atrás do que quer na vida. Nunca haverá uma hora certa.",
    author: "Samantha Wills",
  },

] 

const quoteBtn = document.querySelector('#quoteBtn')
const quoteText = document.querySelector('.text')
const quoteAuthor= document.querySelector('.author')

function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author
}

quoteBtn.addEventListener('click', getQuote)