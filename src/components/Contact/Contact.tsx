import { Wrapper } from "../Wrapper";
import { ContactButton } from "../ContactButton";
import { contacts } from "../../data/Contacts";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg transition-colors motion-reduce:transition-none"
    >
      <Wrapper className="py-[clamp(4rem,4.5rem+4vw,7rem)]">
        <div className="grid gap-[clamp(2rem,1.5rem+3vw,3.5rem)] lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-[clamp(1.5rem,1.25rem+1vw,2rem)]">
            <h2 className="relative w-fit inline-block text-xl font-bold leading-tight text-text after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-11 after:bg-primary after:content-[''] tablet:text-2xl">
              Contato
            </h2>
            <p className="max-w-95 text-base leading-relaxed text-text-muted">
              Tem um projeto em mente ou quer trocar uma ideia? Manda mensagem.
            </p>
            <div className="flex items-center gap-3">
              {contacts.map((contact) => (
                <ContactButton key={contact.label} {...contact} />
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Wrapper>
    </section>
  );
}
