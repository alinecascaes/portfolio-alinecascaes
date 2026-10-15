import { Wrapper } from "./Wrapper";
import { ContactButton } from "./ContactButton";
import { contacts } from "../data/Contacts";

import avatarImage from "../assets/avatar.png";

const reveal = "animate-[fade-up-in_1.4s_cubic-bezier(0.16,1,0.3,1)_both]";

export function AboutMe() {
  return (
    <div
      id="about"
      className="flex min-h-dvh items-center justify-center"
      aria-label="Apresentação"
    >
      <Wrapper className="w-full py-16">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex w-full justify-center">
            <div
              className={`group relative h-32 w-32 overflow-hidden rounded-full [animation-delay:80ms] ${reveal}`}
            >
              <img
                src={avatarImage}
                alt="Foto de Aline Cascaes"
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
                className="h-32 w-32 rounded-full border border-border object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-10" />
            </div>
          </div>

          <div className="w-full">
            <h1
              className={`mb-1 text-[clamp(2.25rem,0.5rem+4vw,3.5rem)] font-bold leading-[1.1] text-text transition-colors md:mb-2 [animation-delay:260ms] ${reveal}`}
            >
              Aline Cascaes
            </h1>
            <p
              className={`mb-4 text-xl text-primary font-semibold tracking-wide transition-colors md:mb-6 [animation-delay:420ms] ${reveal}`}
            >
              Desenvolvedora Front-end
            </p>

            <p
              className={`mx-auto mb-6 max-w-160 text-base text-text-muted transition-colors md:mb-8 [animation-delay:580ms] ${reveal}`}
            >
              Estudante de Engenharia de Software e desenvolvedora Front-end,
              com experiência na construção de produtos digitais em diferentes
              contextos, como plataformas financeiras, checkouts, e-learning e
              recomendação de produtos.
            </p>
            <p
              className={`mx-auto mb-6 max-w-160 text-base text-text-muted transition-colors md:mb-8 [animation-delay:680ms] ${reveal}`}
            >
              Experiência principalmente com{" "}
              <span className="font-medium text-primary">
                React, Next.js e TypeScript
              </span>
              , atuando na criação de interfaces, componentes e funcionalidades
              que fazem parte de produtos utilizados em produção.
            </p>

            <div
              className={`flex flex-col gap-4 tablet:flex-row tablet:flex-wrap tablet:justify-center [animation-delay:820ms] ${reveal}`}
            >
              <a
                href="#projects"
                className="w-full rounded-md bg-primary px-6 py-3 text-center font-semibold text-on-primary transition duration-150 ease-in-out tablet:w-auto hover:bg-primary/90"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="w-full rounded-md border border-border bg-bg px-6 py-3 text-center font-semibold text-text transition duration-150 ease-in-out tablet:w-auto hover:border-primary hover:text-primary"
              >
                Fale comigo
              </a>
            </div>
            <div
              className={`mt-5 flex items-center justify-center gap-3 [animation-delay:960ms] ${reveal}`}
            >
              {contacts
                .filter((contact) => contact.label !== "Email")
                .map((contact) => (
                  <ContactButton key={contact.label} {...contact} />
                ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
