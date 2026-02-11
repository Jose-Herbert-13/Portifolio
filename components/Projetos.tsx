import Image from "next/image";

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="max-w-full bg-branco py-10 px-10 md:px-20 lg:px-30"
    >
      <div className="mb-10">
        <p className="text-sm lg:text-base text-preto/60">
          Trabalhos Selecionados
        </p>
        <h2 className="text-4xl lg:text-6xl font-bold">
          Projetos em
          <br />
          <span className="italic text-roxo">Destaque</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjetoCard
          href="https://aplicacao-festival.vercel.app/"
          image="/imgs/projeto_festival.png"
          title="Aplicação Festival da Mandioca"
          description="Plataforma cultural e histórica da cidade de Lagarto."
        />

        <ProjetoCard
          href="https://estudos-fundamental.vercel.app/"
          image="/imgs/projeto_estudos_fundamental.png"
          title="Projeto Educacional"
          description="Projeto educacional interativo com foco em Português e Matemática."
        />
      </div>
    </section>
  );
}

function ProjetoCard({
  href,
  image,
  title,
  description,
}: {
  href: string;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-preto/5 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold group-hover:text-roxo">
          {title}
        </h3>
        <p className="text-preto/70 mt-2">{description}</p>
      </div>
    </a>
  );
}
