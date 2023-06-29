import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3C3C3B] py-16 grid justify-items-center text-white ">
      <article className="grid gap-8">
        <div>
          <h4 className="text-lg text-center">© Academlo 2022</h4>
        </div>
        <section className="flex justify-between gap-x-5">
          <div className="bg-[#50504F] py-2 px-3 rounded-full">
            <i className="bx bxl-instagram text-3xl"></i>
          </div>
          <div className="bg-[#50504F] py-2 px-3 rounded-full">
            <i className="bx bxl-linkedin  text-3xl"></i>
          </div>
          <div className="bg-[#50504F] py-2 px-3 rounded-full">
            <i className="bx bxl-youtube  text-3xl"></i>
          </div>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
