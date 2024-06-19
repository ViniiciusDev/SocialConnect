import "./style.css";
import Logo from "./assets/Logo.svg";
import Image from "../Image/index.jsx";

export default function Sidebar() {
    return (
        <aside>
            <Image icone={Logo} texto={"Logo codeconnect"} />
        </aside>
    );
}
