import FooterItems from "./FooterItems";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () =>{
    const footeritems = [
        {
            logo: <FaInstagram />,
            link: "https://www.instagram.com/swasti_b._nyk/"
        },
        {
            logo: <FaGithub />,
            link: "https://github.com/Swastibiharinayak"
        },
        {
            logo: <FaLinkedin />,
            link: "https://www.linkedin.com/in/swasti-bihari-nayak/"
        },
        {
            logo: <FaTwitter />,
            link: "https://x.com/SwastiNyk?t=R_UUI2SLUIIHpSEg28Ifpg&s=09"
        }
    ]
    return (
        <footer>
            <div id="footerlist">
                {
                    footeritems.map((item)=>{
                        return (<FooterItems logo={item.logo} link={item.link}/>)
                    })
                }
            </div>
        </footer>
    )
}

export default Footer;