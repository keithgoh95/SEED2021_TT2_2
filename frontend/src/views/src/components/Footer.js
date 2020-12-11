import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Get yourself updated with information on DBS digibanking
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.    
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>     
                    </form>    
                </div>   
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div> 
            <section className='social-media'>
                <div classNAme='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src="images/img-dbsfooter.jpg" /> 
                        </Link>
                    </div>
                    <small className='website-rights'>DBS © 2020</small>
                    <div className='social-icons'>
                        <Link 
                            className='social-icon-link facebook'
                            to='//www.facebook.com/dbs'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />    
                        </Link>
                        <Link 
                            className='social-icon-link instagram'
                            to='//instagram.com/dbsbank'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />    
                        </Link> 
                        <Link
                            class='social-icon-link youtube'
                            to='//www.youtube.com/user/DBS/feed'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='//twitter.com/dbsbank'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='//linkedin.com/company/dbs-bank'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
