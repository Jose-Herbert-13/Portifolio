"use client"

// importe do link do next
import Link from "next/link";

// importe dos hooks do react
import {useState, useEffect} from "react"

// Importe dos icones do react icons
import { HiMenu } from "react-icons/hi"
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // função do menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    } 

    // Funções de Scroll do header
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50 shadow-sm">
            <header 
                className={`lg:px-40 relative p-4 w-full flex justify-between items-center transition-all duration-300 ${
                    isScrolled 
                        ? "bg-branco/60 backdrop-blur-md" 
                        : "bg-branco shadow-sm"
                }`}
            >
                <div className="cursor-pointer">
                    <strong className="text-xl">{"<Herbert />"}</strong>
                </div>
                <div className="lg:hidden flex justify-between items-center">
                    <button className="cursor-pointer outline-none border-none" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <IoCloseCircleOutline className="w-5 h-5"/>
                        ) : (
                            <HiMenu className="w-5 h-5"/>
                        )}
                    </button>
                </div>
            

            {/* MobileMenu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-branco shadow-md p-4 flex flex-col gap-4 border-t border-gray-300 z-50">
                    <NavLink href="#home" label="Home" onClick={toggleMobileMenu} />
                    <NavLink href="#sobre" label="Sobre" onClick={toggleMobileMenu} />
                    <NavLink href="#projetos" label="Projetos" onClick={toggleMobileMenu} />
                    <NavLink href="#skills" label="Skills" onClick={toggleMobileMenu} />
                    <NavLink href="#contato" label="Contato" onClick={toggleMobileMenu} />

                    <a href="https://wa.me/5579996839277?text=Oi!+Quero+saber+mais+sobre+os+seus+projetos." 
                    target="_blank"
                    className="bg-preto text-branco rounded-full text-center py-2 hover:bg-roxo transition-all duration-300 hover:scale-105"
                    >Entre em Contato</a>
                </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-content itens-center gap-4">
                    <NavLink href="#home" label="Home"/>
                    <NavLink href="#sobre" label="Sobre"/>
                    <NavLink href="#projetos" label="Projetos"/>
                    <NavLink href="#skills" label="Skills"/>
                    <NavLink href="#contato" label="Contato"/>
                    <a href="https://wa.me/5579996839277?text=Oi!+Quero+saber+mais+sobre+os+seus+projetos." 
                    target="_blank"
                    className="w-38 bg-preto text-branco rounded-full text-center p-1 hover:bg-roxo transition-all duration-300 hover:scale-105"
                    >Entre em Contato</a>
            </div>
            </header>
        </div>
    )

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