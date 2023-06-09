import React, { useState, useEffect }  from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
        setVisible(visible);
        setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const className = visible ? "menu" : "menu hidden";

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <div className={className}>
                <ul>
                    <li>
                        <a onClick={scrollToTop} href="/#">About Me</a>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} isDynamic={true}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} isDynamic={true}>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="links" smooth={true} isDynamic={true}>
                        Contact
                        </Link>
                    </li>
                    <li><a href={require("../assets/Christopher_Mok_Resume_2023.pdf")} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>
        </>
    );
};

export default Menu;