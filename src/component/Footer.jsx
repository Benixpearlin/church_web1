

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLeft">
                <h2 className="logo">{`Shekinah`}</h2>
                <p>© COPYRIGHT Shekinah 2025</p>
                <p>+917667909292</p>
                <p>Bangalore - 560061.</p>
                <p>Shekinah@gmail.com</p>
            </div>

            <div className="footerCenter">
                <div className="quicklinks">
                    <h5>Quicklinks</h5>
                    <>
                        <p>About us</p>
                        <p>Sermons</p>
                        <p>Events</p>
                        <p>Blog</p>
                    </>
                </div>

                <div className="connect">
                    <h4>Connect</h4>
                    <div className="socials">
                        <span>🌐</span>
                        <span>🐦</span>
                        <span>🔗</span>
                    </div>
                </div>
            </div>

            <div className="footerRight">
                <h3>SUBSCRIBE TO GET LATEST <br /> UPDATES AND NEWS</h3>
                <div className="subscribeBox">
                    <input type="email" placeholder="Yourmail@gmail.com" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
