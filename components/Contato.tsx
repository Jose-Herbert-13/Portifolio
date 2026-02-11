export default function Contato() {
  return (
    <section
      id="contato"
      className="max-w-full bg-branco py-10 px-10 md:px-20 lg:px-30"
    >
      <div className="text-center mb-10">
        <p className="text-sm text-preto/60">Vamos Trabalhar Juntos</p>
        <h2 className="text-4xl lg:text-6xl font-bold">
          Entre em
          <br />
          <span className="italic text-roxo">Contato</span>
        </h2>

        <p className="mt-4 text-preto/70 md:w-2/3 mx-auto">
          Clique abaixo e fale comigo diretamente pelo WhatsApp.
        </p>
      </div>

      <div className="flex justify-center">
        <a
          href="https://wa.me/5579996839277?text=Olá,+Herbert!+Quero+conversar+sobre+um+projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-roxo text-branco font-bold py-4 px-8 rounded-full text-lg hover:scale-105"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
