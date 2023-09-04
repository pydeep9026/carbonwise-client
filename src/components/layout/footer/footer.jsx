import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { footerData, menudata, Usefullinks, socialData, brandData } from './footerdata';

export default function Footer() {

  return (
    <footer id='contact' className='footer'>
      <section className='social-networks'>
        <div className='social-networks-title'>
          <span>{footerData.socialtitle}</span>
        </div>
        <div className='socialdata'>
              {socialData.map((social) => {
                return (
                  <div className='socialdataitem' key={social.id} to={social.link}>
                    <img src={social.image} alt={social.title}></img>
                  </div>
                );
              })}
            </div>
      </section>


      <section className='footer-content'>
        
        <div className='container'>
          
          <div className='row'>
          <img  src={brandData.logo1} alt={brandData.name}></img>
            <div className='col-md-3 col-lg-4 col-xl-3'>
          
              <p className='tagline'>
                {footerData.tagline}
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2'>
              <h4 className='footer-title'>{footerData.footertitle1}</h4>
              {menudata.map((menu) => {
                return (
                  <Link Link className='footer-link' to={menu.link} key={menu.id}>
                    {menu.title}
                  </Link>
                );
              })}
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2'>
              <h4 className='footer-title'>{footerData.footertitle2}</h4>
              {Usefullinks.map((menu) => {
                return (
                  <Link className='footer-link' to={menu.link} key={menu.id}>
                    {menu.title}
                  </Link>
                );
              })}
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3'>
              <h4 className='footer-title'>{footerData.footertitle3}</h4>
              <p>
                <i className='icon-home'></i>
                {footerData.address}
              </p>
              <p>
                <i className='icon-envelope'></i>
                {footerData.email}
              </p>
              <p>
                <i className='icon-phone'></i>
                {footerData.phone1}
              </p>
              <p>
                <i className='icon-print'></i>
                {footerData.phone2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h3 className='footer-bottom-text'>
                {footerData.copyright}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
