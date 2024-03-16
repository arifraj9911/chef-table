import { CgProfile } from "react-icons/cg";
import Banner from "../Banner/Banner";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <header>
      {/* navbar */}
      <nav className="mb-12">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden px-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] font-normal"
              >
                <div className="form-control relative">
                  <GoSearch className="absolute top-[14px] left-4 text-xl text-[#65636bb3]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered bg-[#150b2b0d] rounded-[50px] text-[#150b2bb3] w-full md:w-auto pl-10"
                  />
                </div>
                <li>
                  <a className="text-[#150b2bb3]" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#150b2bb3]" href="#">
                    Recipes
                  </a>
                </li>
                <li>
                  <a className="text-[#150b2bb3]" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-[#150b2bb3]" href="#">
                    Search
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl lg:text-3xl font-bold pl-2 lg:pl-0">
              Crave Bites
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-normal">
              <li>
                <a className="text-[#150b2bb3]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-[#150b2bb3]" href="#">
                  Recipes
                </a>
              </li>
              <li>
                <a className="text-[#150b2bb3]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-[#150b2bb3]" href="#">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-4">
            <div className="form-control relative hidden md:block lg:block">
              <GoSearch className="absolute top-[14px] left-4 text-xl text-[#65636bb3]" />
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered bg-[#150b2b0d] rounded-[50px] text-[#150b2bb3] w-24 md:w-auto pl-10"
              />
            </div>
            <div className=" rounded-full bg-[#0BE58A] p-2">
              <CgProfile className="text-3xl " />
            </div>
          </div>
        </div>
      </nav>
      {/* Banner */}
      <Banner></Banner>
    </header>
  );
};

export default Header;
