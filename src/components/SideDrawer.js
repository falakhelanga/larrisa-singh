import React from "react";
import "./sidedrawer.css";

const SideDrawer = ({ menuClose, handleClose }) => {
  const drawerClass = ["side_drawer_container"];

  if (menuClose) {
    drawerClass.push("closeMenu");
  }

  return (
    <div className={drawerClass.join(" ")}>
      <div className="closeIcon">
        <i
          class="fas fa-window-close    "
          onClick={() => {
            handleClose(true);
          }}
        ></i>
        {/* <CloseIcon
          onClick={() => {
            handleClose(true);
          }}
        /> */}
      </div>
      <div className="drawer_nav">
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Obout Us
              </a>
              >
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Lawyers
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Practice Areas
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
