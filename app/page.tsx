import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Skills from "@/components/Skills";
import Contato from "@/components/Contato";
import { MdArrowDownward, MdOutlineEmail } from "react-icons/md";
import { LuGithub, LuLinkedin } from "react-icons/lu";

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
            <button className="flex w-full md:max-w-50 bg-preto text-branco rounded-full p-2 text-md justify-center cursor-pointer hover:scale-105"><NavLink href="#projetos" label="Ver Projetos"/><MdArrowDownward /></button>
            <button className="flex w-full md:max-w-50 bg-branco rounded-full p-2 text-md justify-center cursor-pointer shadow-lg hover:bg-roxo hover:text-branco hover:scale-105"><NavLink href="#sobre" label="Sobre Mim"/></button>
          </div>
          <div className="inline-flex gap-4 mt-4">
            <a className="text-xl rounded-full p-2 cursor-pointer hover:bg-roxo hover:text-branco hover:scale-105" href="https://github.com/Jose-Herbert-13"><LuGithub /></a>
            <a className="text-xl rounded-full p-2 cursor-pointer hover:bg-roxo hover:text-branco hover:scale-105" href="https://www.linkedin.com/in/jos%C3%A9-herbert-andrade-silva-b47981349/"><LuLinkedin /></a>
            <a className="text-xl rounded-full p-2 cursor-pointer hover:bg-roxo hover:text-branco hover:scale-105" href="mailto:jherbert@gmail.com"><MdOutlineEmail /></a>
          </div>
        </div>
      </section>
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
      <Footer />
    </div>
  );

  // funções auxiliares
    function NavLink({ 
        href, 
        label, 
        onClick,
    } : {
        href: string; 
        label: string;
        onClick?: () => void;
    }) {
        return <Link href={href} onClick={onClick}>{label}</Link>
    }
}
