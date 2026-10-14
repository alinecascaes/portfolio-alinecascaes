import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { MessageDialog } from "./MessageDialog";

const contactFormSchema = z.object({
  name: z.string().min(2, "Mínimo de 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "Mensagem muito curta"),
});

type contactFormSchemaType = z.infer<typeof contactFormSchema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSubmitForm = ({
    email,
    message,
    name,
  }: contactFormSchemaType) => {
    setStatus("loading");

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        emailPublicKey,
      )
      .then(() => {
        setStatus("success");
        reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const isModalOpen = status === "success" || status === "error";

  const inputClassName =
    "w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted/60 transition-colors duration-150 outline-none focus:border-primary";

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-4 rounded-md border border-border bg-surface p-[clamp(1.25rem,1rem+1.5vw,2rem)]"
    >
      <MessageDialog
        message={
          status === "success"
            ? "Mensagem enviada com sucesso!"
            : "Ocorreu um erro ao enviar a mensagem. Tente novamente."
        }
        variant={status === "success" ? "success" : "error"}
        isOpen={isModalOpen}
        onClose={() => setStatus("idle")}
      />

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-text">Nome</span>
        <input
          type="text"
          autoComplete="name"
          placeholder="seu nome"
          className={inputClassName}
          {...register("name")}
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-text">Email</span>
        <input
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          className={inputClassName}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-text">Mensagem</span>
        <textarea
          rows={5}
          placeholder="como posso ajudar?"
          className={`${inputClassName} resize-none`}
          {...register("message")}
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message.message}</span>
        )}
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-colors duration-150 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </button>
    </form>
  );
}
