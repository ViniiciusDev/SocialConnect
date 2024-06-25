import Icons from "../Icons/Icons";
import Logo from "../../assets/Logo.svg";
import Feed from "../../assets/feed.svg";
import Account from "../../assets/account_circle.svg";
import Info from "../../assets/info.svg";
import LogOut from "../../assets/logout.svg";
import NavbarLinksModel from "../../models/NavbarLinks";

export default function Sidebar() {
    const links = [
        new NavbarLinksModel("Feed", "#", Feed),
        new NavbarLinksModel("Perfil", "#", Account),
        new NavbarLinksModel("Sobre nós", "#", Info),
        new NavbarLinksModel("Sair", "#", LogOut),
    ]
    return (
        <>
            <aside className="bg-slate-900 w-60 ">
                <nav className="pt-10 h-screen">
                    <ul className="text-zinc-300 flex flex-col items-center gap-12">
                        <Icons url={Logo} alt={"Logo codeconnect"} />
                        <button className="border rounded-md border-emerald-500 py-3 px-12 text-xl text-emerald-500">Publicar</button>
                        {links.map(link =>
                            <li className="flex flex-col items-center text-xl" key={link.name}>
                                <Icons url={link.icon} alt={`Logo ${link.name}`} />
                                <a className="pt-3" href={link.url}>{link.name}</a>
                            </li>)}
                    </ul>
                </nav>
            </aside>

        </>
    )
}