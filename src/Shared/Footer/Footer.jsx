import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer flex justify-between p-10 bg-base-200 text-base-content ">
      <div>
        <span className="footer-title text-primary">TaskZen</span>
        <p>Empower your day with productivity.<br />Your goals, your tasks, one place.</p>
      </div>
      <div>
        <span className="footer-title">Useful Links</span>
        <a className="link link-hover" href="/">Dashboard</a>
        <a className="link link-hover" href="/tasks">Tasks</a>
        <a className="link link-hover" href="/goals">Goals</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover" href="/about">About us</a>
        <a className="link link-hover" href="/contact">Contact</a>
        <a className="link link-hover" href="/privacy">Privacy Policy</a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
         <FaLinkedin  className='text-2xl' />
         <FaGithub className='text-2xl' />
         <FaFacebook className='text-2xl' />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
