import refundImage from "../assets/refund.png";
import guessGameImage from "../assets/guess-game.png";
import igniteFeedImage from "../assets/ignite-feed.png";
import currencyConverterImage from "../assets/currency-converter.png";

export interface ProjectDetails {
  problem: string;
  solution: string;
  implemented: string[];
  stack: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  deployUrl?: string;
  githubUrl?: string;
  githubName?: string;
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Refund",
    description:
      "Solicitação de reembolso de despesas com telas para colaborador e gestor.",
    image: refundImage,
    stack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    deployUrl: "https://refund-umber.vercel.app/",
    githubUrl: "https://github.com/alinecascaes/refund-react",
    details: {
      problem:
        "Fluxo de reembolso com dois perfis: colaborador solicita, gestor aprova. Dados simulados, sem backend.",
      solution:
        "Front-end com rotas por perfil, layouts aninhados e design system próprio em Tailwind.",
      implemented: [
        "Rotas por perfil (auth, colaborador, gestor) com React Router e layouts aninhados",
        "Guarda de navegação que bloqueia acesso direto à tela de confirmação",
        "Componentes reutilizáveis: Button, Input, Select, Upload e Pagination",
        "Formulário de solicitação com categorias, upload de comprovante e modo visualização",
        "Dashboard com busca, lista e paginação (dados mockados)",
        "Design tokens no @theme do Tailwind v4 e formatação monetária com Intl",
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    },
  },
  {
    id: 2,
    title: "Guess Game",
    description:
      "Jogo da adivinhação de palavras tech com dica, limite de tentativas e placar.",
    image: guessGameImage,
    stack: ["React", "TypeScript", "CSS Modules"],
    deployUrl: "https://guess-game-chi-hazel.vercel.app/",
    githubUrl: "https://github.com/alinecascaes/guess-game",
    details: {
      problem:
        "Jogo de adivinhação de palavras com limite de tentativas e feedback visual.",
      solution:
        "Jogo em React com sorteio aleatório, validação de tentativas e condição de vitória/derrota.",
      implemented: [
        "Estados do jogo: pontuação, letra atual, letras usadas e palavra ativa",
        "Sorteio aleatório de palavras de uma lista tech",
        "Validação de chute com detecção de letra repetida",
        "Vitória e derrota derivadas do estado via useEffect",
        "Feedback visual de acerto/erro nos componentes Letter e LettersUsed",
        "CSS Modules e TypeScript",
      ],
      stack: ["React", "TypeScript", "CSS Modules"],
    },
  },
  {
    id: 3,
    title: "Ignite Feed",
    description:
      "Feed de rede social com posts, comentários e likes em estado local.",
    image: igniteFeedImage,
    stack: ["React", "TypeScript", "CSS Modules"],
    deployUrl: "https://ignite-feed-eight-azure.vercel.app/",
    githubUrl: "https://github.com/alinecascaes/IgniteFeed",
    details: {
      problem:
        "Feed de posts com comentários e likes, gerenciados em estado local. Sem backend.",
      solution:
        "Feed com lista de posts, sidebar de perfil e CRUD de comentários no estado do componente.",
      implemented: [
        "Feed renderizado com map sobre array tipado de posts",
        "Criar e deletar comentários com imutabilidade (spread e filter)",
        "Validação de formulário com setCustomValidity e botão desabilitado",
        "Contador de likes por comentário",
        "Datas formatadas com Intl.DateTimeFormat",
      ],
      stack: ["React", "TypeScript", "CSS Modules", "Phosphor Icons"],
    },
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "Conversor de moedas (USD, EUR, GBP) para Real em HTML, CSS e JavaScript.",
    image: currencyConverterImage,
    stack: ["HTML", "CSS", "JavaScript"],
    deployUrl: "https://alinecascaes.github.io/currency-converter/",
    githubUrl: "https://github.com/alinecascaes/currency-converter",
    details: {
      problem:
        "Conversão de moedas para BRL sem frameworks, com cotações fixas.",
      solution:
        "Interface dark em HTML/CSS/JS vanilla, com validação de entrada e formatação monetária.",
      implemented: [
        "Manipulação direta do DOM",
        "Validação de entrada com regex removendo não-dígitos",
        "Formatação monetária em BRL com toLocaleString",
        "Tratamento de erros com try/catch",
        "CSS com custom properties, Flexbox e scrollbar customizada",
      ],
      stack: ["HTML5", "CSS3", "JavaScript"],
    },
  },
];
