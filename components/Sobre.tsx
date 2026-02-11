export default function Sobre() {
  return (
    <section
      id="sobre"
      className="mt-18 max-w-full bg-preto/5 grid grid-cols-1 lg:grid-cols-2 py-10 px-10 md:px-20 lg:px-30"
    >
      <div className="flex flex-col gap-4 col-span-1 justify-center lg:mx-5">
        <h2 className="text-4xl lg:text-6xl font-bold">
          Olá, eu sou
          <br />
          <span className="text-roxo">José Herbert</span>
        </h2>

        <p>
          Sou um desenvolvedor apaixonado por criar experiências digitais que fazem a diferença.
        </p>

        <p>
          Minha abordagem combina pensamento criativo com execução técnica precisa.
        </p>

        <p>
          Especializado em back-end com Java, JavaScript e Python e front-end moderno
          com React, Next.js e TypeScript.
        </p>
      </div>

      <div className="col-span-1 gap-6 md:flex lg:block justify-center items-center lg:mx-20 lg:mt-10">
        <div className="bg-branco p-7 m-4 w-60 border-2 border-preto/10 shadow-md rounded-xl hover:scale-105">
          <h3 className="text-5xl text-roxo font-bold">3+</h3>
          <p className="text-md">Projetos Concluídos</p>
        </div>

        <div className="bg-branco p-7 m-4 w-60 border-2 border-preto/10 shadow-md rounded-xl hover:scale-105">
          <h3 className="text-5xl text-roxo font-bold">3+</h3>
          <p className="text-md">Anos de Experiência</p>
        </div>
      </div>
    </section>
  );
}
