import { useState } from "react";
import LoginModal from "../../../modals/LoginModal";
import NavMenu from "./NavMenu";

const MobileMenu = ({ isActive }: any) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<string>("");

  return (
    <>
      <div
        className={
          isActive
            ? "mobile-menu-visible theme-main-menu"
            : "theme-main-menu eg-mobile-menu "
        }
      >
        <nav className="navbar navbar-expand-lg p0 order-lg-2">
          <div
            className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
            id="navbarNav"
          >
            <NavMenu />
            <hr></hr>
            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex justify-content-center align-items-center style-none">
                <li style={{ marginLeft: "15px" }}>
                  <a
                    onClick={() => {
                      setLoginModal(true);
                      setLoginData('1')
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="btn-mobile-one"
                  >
                    <i className="fa-regular fa-lock"></i> <span>Login</span>
                  </a>
                </li>
                <li style={{ marginLeft: "10px" }}>
                  <a
                     onClick={() => {
                        setLoginModal(true);
                        setLoginData('2')
                      }}
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="btn-mobile-one"
                  >
                    <i className="fa-regular fa-lock"></i> <span>Register</span>
                  </a>
                </li>
          
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} loginData={loginData} />
    </>
  );
};

export default MobileMenu;
