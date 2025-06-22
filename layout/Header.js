import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";

const Header = ({ header, singleMenu }) => {
  switch (header) {
    case 1:
      return <Header1 singleMenu={singleMenu} />;
    case 2:
      return <Header2 singleMenu={singleMenu} />;
    case 3:
      return <Header3 singleMenu={singleMenu} />;
    case 4:
      return <Header4 singleMenu={singleMenu} />;
    case 5:
      return <Header5 singleMenu={singleMenu} />;
    case 6:
      return <Header6 singleMenu={singleMenu} />;

    default:
      return <Header2 singleMenu={singleMenu} />;
  }
};
export default Header;

const Header1 = ({ singleMenu }) => {
  return (
    <header className="main-header">
      <div className="header-top-wrap rel">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="top-left text-center text-lg-start">
                <ul>
                  <li>
                    <i className="far fa-phone" /> Need any help? Call :{" "}
                    <a href="callto:+000(123)4588">+000 (123) 45 88</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="top-right text-center text-lg-end">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> Support :{" "}
                    <a href="mailto:uintechinfo@gmail.com">
                      uintechinfo@gmail.com
                    </a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <span>Follow Us</span>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner before-after-none rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Menu singleMenu={singleMenu} />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="contact" className="theme-btn btn-small ms-lg-4">
                Get In Touch
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar ms-4">
                <button className="bg-transparent" />
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </div>
    </header>
  );
};

const Header2 = ({ singleMenu }) => {
  return (
    <header className="main-header">
      <div className="header-top-wrap rel for-border-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="top-left text-center text-lg-start">
                <ul>
                  <li>
                    <i className="far fa-phone" /> Need any help? Call :{" "}
                    <a href="callto:+000(123)4588">+000 (123) 45 88</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="top-right text-center text-lg-end">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> Support :{" "}
                    <a href="mailto:uintechinfo@gmail.com">
                      uintechinfo@gmail.com
                    </a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <span>Follow Us</span>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner before-after-none rel d-flex align-items-center for-border">
            <div className="logo-outer me-5 pe-xl-4">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Menu singleMenu={singleMenu} />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="contact" className="theme-btn btn-small ms-lg-4">
                Get In Touch
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar ms-4">
                <button className="bg-transparent" />
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </div>
    </header>
  );
};

const Header3 = ({ singleMenu }) => {
  return (
    <header className="main-header style-three">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1580 clearfix">
          <div className="header-inner before-after-none rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo-white-blue.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto me-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Menu
                  singleMenu={singleMenu}
                  logo="assets/images/logos/logo-white-blue.png"
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="contact" className="theme-btn btn-small ms-lg-4">
                Get In Touch
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar ms-4">
                <button className="bg-transparent" />
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </div>
    </header>
  );
};

const Header4 = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute no-border">
      {/*Header-Top*/}
      <div className="header-top-wrap bgc-primary">
        <div className="container container-1660">
          <div className="header-top">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6">
                <div className="top-left text-center text-md-start">
                  <ul>
                    <li>
                      {/* menu sidbar */}
                      <div className="menu-sidebar pb-1">
                        <button>
                          <img
                            src="assets/images/shapes/toggler.png"
                            alt="menu"
                          />
                        </button>
                      </div>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        support@gmail.com <i className="fal fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 d-xl-block d-none">
                <div className="top-middle text-center">
                  Recommend and receive 25% bonus discount on checkout.
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="top-right text-center text-lg-end">
                  <ul>
                    <li>
                      <select name="language" id="language">
                        <option value="English">English</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Arabic">Arabic</option>
                      </select>
                    </li>
                    <li>
                      <div className="social-icons">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-5 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo2.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Menu
                  singleMenu={singleMenu}
                  logo="assets/images/logos/logo2.png"
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 me-xl-auto py-10">
              <SearchBtn />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="contact" className="theme-btn style-two">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header5 = ({ singleMenu }) => {
  return (
    <header className="main-header header-one white-menu menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper bordered-bottom bgc-black">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/logowide.jpeg"
                    alt="Logo"
                    title="Logo"
                    width={200}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer me-lg-auto ps-lg-5 ms-xxl-4 clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Menu
                  singleMenu={singleMenu}
                  logo="/logowide.jpeg"
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns d-lg-flex align-items-center">
              <div className="header-number me-5 d-none d-xl-block">
                <i className="fas fa-phone me-1" />
                <a href="callto:+919811981279">+919811981279</a>
                <i className="fas fa-phone me-1 ms-4" />
                <a href="callto:+919643024295 ">+919643024295 </a>
              </div>
              <Link
                href="/contact"
                className="theme-btn btn-small color-white"
                data-hover="Let’s Talk"
              >
                <span>Let’s Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
const Header6 = ({ singleMenu }) => {
  return (
    <header className="main-header header-three white-menu menu-absolute">
      <div className="header-top-wrap bgc-secondary home-6">
        <div className="container">
          <div className="header-top">
            <div className="text">
              <span className="hello">Hello</span> We’re professional IT
              solutions company. Let’s work together{" "}
              <Link href="contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo-two.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Menu
                  singleMenu={singleMenu}
                  logo="assets/images/logos/logo-two.png"
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-10">
              <SearchBtn />
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidbar */}
              <div className="menu-sidebar ms-sm-5">
                <button>
                  <span className="toggle-btn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Menu = ({ logo = "assets/images/logos/logo.png", singleMenu }) => {
  return (
    <Accordion>
      <div className="navbar-header py-15">
        <div className="mobile-logo">
          <Link href="/">
            <img src={logo} alt="Logo" title="Logo" />
          </Link>
        </div>
        {/* Toggle Button */}
        <Accordion.Toggle
          as={"button"}
          className="navbar-toggle"
          eventKey="navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse
        eventKey="navbar-collapse"
        className="navbar-collapse  clearfix"
      >
        <ul className="navigation clearfix">
          {singleMenu ? (
            singleMenu.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))
          ) : (
            <Fragment>
              <li className="">
                <a href="/">Home</a>
                
              </li>
              <li className="dropdown">
                <Link href="#">About Us</Link>
                
                <ul>
                  <li>
                    <Link href="/aligarh">Aligarh Branch</Link>
                  </li>
                  
                  <li className="dropdown">
                    <a href="/delhi">Delhi Rohini Branch</a>
                    
                  </li>
                 
                </ul>
                
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>



              <li className="dropdown">
                <Link href="#">Programs</Link>
                
                <ul>
                  <li>
                    <Link href="/detox">28 Days Detox</Link>
                  </li>
                  
                  <li className="">
                    <a href="/inpatient">Inpatient Rehabilitaion</a>
                    
                  </li>
                  <li className="">
                    <a href="/outpatient">Outpatient Relapse Prevention</a>
                    
                  </li>
                 
                </ul>
                
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>


              
              <li className="dropdown">
                <Link href="#">Treatment</Link>
                
                <ul>
                  <li>
                    <Link href="/herbal">Herbal Medicine Treatment</Link>
                  </li>
                  
                  <li className="">
                    <a href="/rehab">Rehabilitation Center</a>
                    
                  </li>
                  <li className="">
                    <a href="/counselling">Rehab Counselling Center</a>
                    
                  </li>
                 
                </ul>
                
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>



              <li className="dropdown">
                <Link href="#">Addiction</Link>
                
                <ul>
                  <li>
                    <Link href="/alcohol">Alcohol</Link>
                  </li>
                  
                  <li className="">
                    <a href="/hard-drugs">Hard Drugs</a>
                    
                  </li>
                  <li className="">
                    <a href="/mental-behaviour">Mental Behaviour Problem</a>
                  </li>

                  <li className="">
                    <a href="/weed">Marijuana/Weed</a>
                  </li>
                 
                </ul>
                
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li>
                <Link href="/team">Our Team</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>



            </Fragment>
          )}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  );
};

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setToggle(false);
        }}
        className={!toggle ? "hide" : ""}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};
