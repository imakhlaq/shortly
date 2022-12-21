import React from "react";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <section>
      <nav className="flex justify-between p-6 mx-auto container">
        <div className="flex justify-between items-center gap-10 ">
          <img src={logo} alt="" />
          <ul className="hidden lg:flex gap-4 list-none text-lg text-grayishViolet  font-bold">
            <li>
              <a href="sda" className="hover:text-veryDarkViolet">
                Features
              </a>
            </li>
            <li>
              <a href="sda" className="hover:text-veryDarkViolet">
                Pricing
              </a>
            </li>
            <li>
              <a href="sda" className="hover:text-veryDarkViolet">
                Resources
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-5 text-lg font-bold text-veryDarkViolet">
          <a href="dad">LogIn</a>
          <a
            href="dad"
            className="py-3 px-8 bg-cyan hover:bg-cyanLight rounded-full"
          >
            SignUp
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
