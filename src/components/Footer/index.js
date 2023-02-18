import './Footer.css'

function Footer() {
    return ( <footer>
       <div className="container">
        <div className='footer'>
           <div>
                <h3>Contact</h3>
                <nav className='footer-nav'>
                    <ul>
                        <li><a>Partners</a></li>
                        <li><a>Portal</a></li>
                        <li><a>Get Social</a></li>
                    </ul>
                </nav>
           </div>

           <div>
                <h3>About us</h3>
                <nav className='footer-nav'>
                    <ul>
                        <li><a>Company</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms and Conditions</a></li>
                    </ul>
                </nav>
           </div>

           <div>
                <h3>Support</h3>
                <nav className='footer-nav'>
                    <ul>
                        <li><a>Need Help</a></li>
                        <li><a>Services</a></li>
                        <li><a>Frequently Asked Questions</a></li>
                    </ul>
                </nav>
           </div>
        </div>
           <p>Copyright&copy;2023DanStore,Inc.</p>
       </div>
    </footer> );
}

export default Footer;