import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            Pixell River Financial &#169; {currentYear}
        </footer>
    )
}

export default Footer;