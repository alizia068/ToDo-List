import React from "react";
const Navbar = () => {
  return (
    <div className="setting">
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h1>
            <span>T</span>oDo
            <span> L</span>ist
          </h1>
        </div>
        {/* 2nd menu part */}
        <div className="menu-link">
          <ul className="menu">
            <li className="list">
              <a href="#"> Home </a>
            </li>
            <li className="list">
              <a href="#"> About </a>
            </li>
            <li className="list">
              <a href="#"> Services </a>
            </li>
            <li className="list">
              <a href="#"> Contact </a>
            </li>
          </ul>
        </div>
        {/* 3rd social media link */}
        {/* <div className='social-media'>
                <ul className='menu'>
                <li className='list'><a href='#'>Facebook</a></li>
                <li className='list'><a href='#'>Instagram</a></li>
                <li className='list'><a href='#'>Youtube</a></li>

                </ul>

            </div> */}
      </nav>
    </div>
  );
};
export default Navbar;
