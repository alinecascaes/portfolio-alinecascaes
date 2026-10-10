export interface ExperienceProject {
  id: number;
  name: string;
  description: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  projects: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Desenvolvedora Front-end Júnior",
    company: "Be Growth Brasil Internet S.A.",
    period: "Set 2023 — Dez 2024",
    description:
      "Desenvolvimento e evolução de produtos digitais nas áreas de finanças, e-learning e recomendação de produtos, atuando na construção de interfaces, novas funcionalidades e integrações.",
    projects: [
      {
        id: 1,
        name: "UTUA",
        description:
          "Plataforma de informações e comparação de produtos financeiros, criada para facilitar a pesquisa e a comparação de serviços do mercado.",
        items: [
          "Desenvolvimento de páginas e funcionalidades em React, Next.js e TypeScript, utilizando o Design System da empresa como base para novas interfaces",
          "Criação de componentes reutilizáveis com styled-components e documentação no Storybook, estabelecendo uma base compartilhada para diferentes partes da plataforma",
          "Implementação de internacionalização (i18n), estruturando a aplicação para disponibilizar o produto em diferentes idiomas e países",
          "Desenvolvimento da versão mobile responsiva, adaptando os principais fluxos da plataforma para dispositivos móveis",
          "Implementação de landing page em WordPress, com PHP e Docker, permitindo a publicação e manutenção da página de forma independente da aplicação principal",
          "Participação no desenvolvimento de chatbot com integração de IA, conectando a interface a um novo canal de busca e navegação dentro da plataforma",
        ],
      },
      {
        id: 2,
        name: "Best5",
        description:
          "Plataforma de recomendação de produtos que reúne informações como preço, marca e avaliações para apoiar a pesquisa em diferentes categorias.",
        items: [
          "Desenvolvimento das páginas de produto em Next.js, React e TypeScript, com integração a APIs para carregamento dinâmico de produtos e categorias",
          "Implementação das interfaces utilizando CSS Modules, mantendo estilos isolados e específicos para cada página e componente",
          "Implementação de melhorias técnicas de SEO nas páginas, trabalhando estrutura e conteúdo para favorecer a indexação nos mecanismos de busca",
        ],
      },
      {
        id: 3,
        name: "OneControl",
        description:
          "Plataforma de gestão para produtos digitais e infoprodutos, utilizada na operação de conteúdos comercializados online.",
        items: [
          "Desenvolvimento e manutenção de interfaces em React, Next.js e TypeScript, adicionando funcionalidades e evoluindo fluxos existentes",
          "Implementação de páginas e componentes com styled-components a partir do Design System da aplicação, mantendo consistência entre diferentes áreas do produto",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Desenvolvedora Front-end Estagiária",
    company: "Be Growth Brasil Internet S.A.",
    period: "Jun 2023 — Set 2023",
    description:
      "Atuação no desenvolvimento de interfaces para produtos de arrecadação online e checkout de infoprodutos, com foco nos principais fluxos de usuário.",
    projects: [
      {
        id: 4,
        name: "Assiny",
        description:
          "Checkout B2B para infoprodutos, utilizado por criadores e plataformas para realizar vendas e processar pagamentos.",
        items: [
          "Desenvolvimento de páginas e componentes do fluxo de checkout em React, TypeScript e CSS, atuando nas principais etapas da jornada de compra",
          "Implementação e evolução de componentes reutilizáveis, contribuindo para a consolidação de React e TypeScript como base do desenvolvimento front-end",
        ],
      },
      {
        id: 5,
        name: "Vaquinha",
        description:
          "Plataforma de arrecadação online para criação de campanhas voltadas a causas pessoais e sociais.",
        items: [
          "Desenvolvimento de interfaces responsivas utilizando JavaScript, HTML e CSS, com foco nos fluxos de criação e visualização de campanhas",
          "Implementação de componentes seguindo o Design System da aplicação, reutilizando padrões existentes entre diferentes telas",
          "Participação na evolução das interfaces do produto durante seu crescimento e uso em produção",
        ],
      },
    ],
  },
];
