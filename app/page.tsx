import Image from "next/image";
import Header from "@/components/Header";
import { MdArrowDownward } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="text-primary">
      <Header />
      <section id="home" className="mt-18 max-w-full lg:mx-40">
        <div className="px-4 flex flex-col gap-4">
          <p className="text-sm lg:text-base text-preto/60">Devops & Desenvolvedor</p>
          <h1 className="text-5xl lg:text-9xl font-bold">
            Criando
            <br />
            <span className="italic text-roxo">Experiências</span>
            <br />
            Digitais
          </h1>
          <p className="text-lg lg:text-xl text-preto/60 md:w-3/5">Transformo ideias em produtos digitais únicos através de design inovador e código limpo. Especializado em criar interfaces que encantam e funcionam perfeitamente.</p>
          <div className="inline-flex flex-col md:flex-row gap-4 mt-4">
            <button className="flex w-full md:max-w-50 bg-preto text-branco rounded-full p-2 text-md justify-center cursor-pointer hover:scale-105">Ver Projetos  <MdArrowDownward /></button>
            <button className="flex w-full md:max-w-50 bg-branco rounded-full p-2 text-md justify-center cursor-pointer shadow-lg hover:bg-roxo hover:text-branco hover:scale-105">Sobre Mim</button>
          </div>
          <div className="inline-flex gap-4 mt-4">
            <a className="text-xl rounded-full p-2 cursor-pointer hover:bg-roxo hover:text-branco hover:scale-105" href="https://github.com/Jose-Herbert-13"><LuGithub /></a>
            <a className="text-xl rounded-full p-2 cursor-pointer hover:bg-roxo hover:text-branco hover:scale-105" href="https://www.linkedin.com/in/jos%C3%A9-herbert-andrade-silva-b47981349/"><LuLinkedin /></a>
            <a className="text-xl rounded-full p-2 cursor-pointer hover:bg-roxo hover:text-branco hover:scale-105" href="mailto:jherbert@gmail.com"><MdOutlineEmail /></a>
          </div>
        </div>
      </section>
      <section id="sobre" className="mt-18 max-w-full bg-preto/5 grid grid-cols-1 lg:grid-cols-2 py-10 px-10 md:px-20 lg:px-30">
        <div className="flex flex-col gap-4 col-span-1 flex justify-center lg:mx-5">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Olá, eu sou
            <br />
            <span className="text-roxo">José Herbert</span>
          </h2>
          <p>Sou um desenvolvedor apaixonado por criar experiências digitais que fazem a diferença. Com mais de 3 anos de experiência, trabalho com desenvolvimento web.</p>
          <p>Minha abordagem combina pensamento criativo com execução técnica precisa, sempre buscando soluções inovadoras que superem expectativas.</p>
          <p>Especializado experiência do usuário, desenvolvimento back-end com Java, JavaScript e Python, e desenvolvimento front-end moderno com React, Next.js e TypeScript.</p>
        </div>
        <div className="col-span-1 gap-6 md:flex lg:block justify-center items-center lg:mx-20 lg:mt-10">
          <div className="bg-branco p-7 m-4 w-60 h-30 border-2 border-preto/10 shadow-md shadow-preto/10 rounded-xl hover:scale-105">
            <h3 className="text-5xl text-roxo font-bold">10+</h3>
            <p className="text-md">Projetos Concluídos</p>
          </div>
          <div className="bg-branco p-7 m-4 w-60 h-30 border-2 border-preto/10 shadow-md shadow-preto/10 rounded-xl hover:scale-105">
            <h3 className="text-5xl text-roxo font-bold">3+</h3>
            <p className="text-md">Anos de Experiência</p>
          </div>
        </div>
      </section>
      <section id="projetos" className="max-w-full bg-branco grid grid-cols-1 lg:grid-cols-2 py-10 px-10 md:px-20 lg:px-30">
        <div>
          <p className="text-sm lg:text-base text-preto/60">Trabalhos Selecionados</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Projetos em
            <br />
            <span className="italic text-roxo">Destaque</span>
          </h2>
        </div>
      </section>
      <section id="skills" className="max-w-full bg-preto/5 py-10 px-10 md:px-20 lg:px-30">
        <div>
          <p className="text-sm lg:text-base text-preto/60">O Que Eu Faço</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Skills &
            <br />
            <span className="italic text-roxo">Especialidades</span>
          </h2>
        </div>
      </section>
      <section id="skills" className="max-w-full bg-branco py-10 px-10 md:px-20 lg:px-30">
        <div className="text-center">
          <p className="text-sm lg:text-base text-preto/60">Vamos Trabalhar Juntos</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Entre em
            <br />
            <span className="italic text-roxo">Contato</span>
          </h2>
          <p>Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.</p>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  );
}
