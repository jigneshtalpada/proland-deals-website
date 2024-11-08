import NavMenu from "./Menu/NavMenu";
import UseSticky from "../../hooks/UseSticky";
import LoginModal from "../../modals/LoginModal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "./Menu/MobileMenu";

const HeaderOne = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { sticky } = UseSticky();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);
  const [loginData, setLoginData] = useState<string>("");

  // Handle window resize to check screen size
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        {/* {!style && <div className="alert-wrapper text-center">
               <p className="fs-16 m0 text-white">The <Link to="/listing_01" className="fw-500">flash sale</Link> go on. The offer will end in — <span>This Sunday</span></p>
            </div>} */}
        <div className="inner-content gap-one">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link to="/" className="d-flex align-items-center">
                  <img
                    src="/assets/images/logo/Proland-logo.png"
                    alt="Proland-deals"
                    height={140}
                    width={140}
                  />
                </Link>
              </div>

              {!isMobileView && (
                <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                  <ul className="d-flex align-items-center style-none">
                    <li style={{ marginRight: "10px" }}>
                      <a
                        onClick={() => {
                          setLoginModal(true);
                          setLoginData("1");
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        className="btn-one"
                      >
                        <i className="fa-regular fa-lock"></i>{" "}
                        <span>Login</span>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setLoginModal(true);
                          setLoginData("2");
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        className="btn-one"
                      >
                        <i className="fa-regular fa-lock"></i>{" "}
                        <span>Register</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`navbar-toggler d-block d-lg-none ${
                    isActive ? "hide-toggle" : ""
                  }`}
                  type="button"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <NavMenu />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isActive={isActive} />
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} loginData={loginData} />
    </>
  );
};

export default HeaderOne;
