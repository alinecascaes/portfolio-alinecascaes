import { Wrapper } from "./Wrapper";
import { ContactButton } from "./ContactButton";
import { contacts } from "../data/Contacts";

export function AboutMe() {
  return (
    <div
      id="about"
      className="flex min-h-dvh items-center justify-center"
      aria-label="Apresentação"
    >
      <Wrapper className="w-full py-16">
        <div className="flex flex-col-reverse items-center gap-12 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-left">
          <div className="w-full ">
            <h1 className="mb-1 text-[clamp(2.25rem,0.5rem+4vw,3.5rem)] font-bold leading-[1.1] text-text transition-colors md:mb-2">
              Aline Cascaes
            </h1>
            <p className="mb-4 text-xl text-primary font-semibold tracking-wide transition-colors md:mb-6">
              Desenvolvedora Front-end
            </p>

            <p className="mx-auto mb-6 max-w-115 text-base text-text-muted transition-colors lg:mx-0 lg:mb-8">
              Estudante de Engenharia de Software e desenvolvedora Front-end,
              com experiência na construção de produtos digitais em diferentes
              contextos, como plataformas financeiras, checkouts, e-learning e
              recomendação de produtos.
            </p>
            <p className="mx-auto mb-6 max-w-115 text-base text-text-muted transition-colors lg:mx-0 lg:mb-8">
              Experiência principalmente com{" "}
              <span className="font-medium text-primary">
                React, Next.js e TypeScript
              </span>
              , atuando na criação de interfaces, componentes e funcionalidades
              que fazem parte de produtos utilizados em produção.
            </p>

            <div className="flex flex-col gap-4 tablet:flex-row tablet:flex-wrap tablet:justify-center lg:justify-start">
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
            <div className="mt-5 flex items-center justify-center gap-3 tablet:justify-center lg:justify-start">
              {contacts
                .filter((contact) => contact.label !== "Email")
                .map((contact) => (
                  <ContactButton key={contact.label} {...contact} />
                ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <img
              src="https://github.com/alinecascaes.png"
              alt="Foto de Aline Cascaes"
              className="h-38.5 w-38.5 rounded-2xl border border-border object-cover tablet:h-44 tablet:w-44 md:h-56 md:w-56 lg:h-68.5 lg:w-68.5"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
