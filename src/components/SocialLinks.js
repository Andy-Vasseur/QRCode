import React from 'react';
import LinkedinImage from '../assets/linkedin.webp';
import WhireImage from '../assets/whire.png';
import GithubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
import PhoneImage from '../assets/call.png';

const SocialLinks = () => {
    return (
        <div className='socialLinks'>
            <div class="row">
        
                {/* première column */}
                <div class="column">
                    <a href="https://www.linkedin.com/in/andy-vasseur/" target="_blank" rel="noreferrer">
                        <div class="card">
                            <img src={ LinkedinImage } alt="Ma page Linkedin" />
                            <div>
                                <h1>Linkedin</h1>
                                <p>Ma page Linkedin</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.whire.me/@Andyy" target="_blank" rel="noreferrer">
                        <div class="card">
                            <img src={ WhireImage } alt="Ma page Whire" />
                            <div>
                                <h1>Whire</h1>
                                <p>Ma page Whire</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/Andy-Vasseur" target="_blank" rel="noreferrer">
                        <div class="card">
                            <img src={ GithubImage } alt="Ma page Github" />
                            <div>
                                <h1>Github</h1>
                                <p>Ma page Github</p>
                            </div>
                        </div>
                    </a>
                </div>

                {/* deuxième column */}
                <div className="column">
                    <a href="mailto:andyvasseurpro@outlook.com" target="_blank" rel="noreferrer">
                        <div class="card">
                            <img src={ MailImage } alt="Mon mail professionnel afin de contacter" />
                            <div>
                                <h1>Mail</h1>
                                <p>Mon email professionnel</p>
                            </div>
                        </div>
                    </a>

                    <a href="tel:+33786781006" target="_blank" rel="noreferrer">
                        <div class="card">
                            <img src={ PhoneImage } alt="Mon numéro de téléphone afin de contacter" />
                            <div>
                                <h1>Phone</h1>
                                <p>Mon numéro de téléphone</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;