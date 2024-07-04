import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container text-center lg:flex md:flex flex-row p-12 justify-between">
        <div className="flex flex-col text-slate-400">
        <span>Email: sajibbabu751@gmail.com</span>
        <span>Phone: +88016-11970979</span>
        </div>
        <div>
        <p className="text-slate-600">All rights reserved by Sajib.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
