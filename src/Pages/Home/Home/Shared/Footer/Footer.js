import React from 'react';

const Footer = ({ title }) => {



    return (
        <div>
            <footer className="footer p-10 bg-gray-500 text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Business Visa</a>
                    <a href="/" className="link link-hover">Student Visa</a>
                    <a href="/" className="link link-hover">Immigration Visa</a>
                    <a href="/" className="link link-hover">Transit Visa</a>
                    <a href="/" className="link link-hover">Tourist Visa</a>
                    <a href="/" className="link link-hover">Diplomatic Visa</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;