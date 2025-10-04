const FooterItems = ({ logo, link }) => {
    return (
        <a href={link} target="_blank">
            {logo}
        </a>
    )
}

export default FooterItems;