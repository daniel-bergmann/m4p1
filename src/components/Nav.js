import React from 'react'
import { Link } from "react-router-dom";




// Start of main content

export default function Nav() {
    return (
        <>
        <nav className="navbar">
          <ul className="navbar-nav">
            
            <li className="logo">
              <Link to="/articles"><a href="#" className="nav-link">

                  {/* Font awesome icon */}
                <i class="icon fas fa-user-astronaut"></i>

                  {/* linktext */}
                <span className="link-text">Tech Articles</span>
              </a></Link>
            </li>
            <li className="nav-item">
            <Link to="/articles">
              <a href="#" className="nav-link">            
                   
              {/* Font awesome icon */}
                <i class="icon fas fa-atom"></i>
                  {/* linktext */}
                <span className="link-text">Articles</span>
              </a>
              </Link>
              </li>
          </ul>
          
        </nav>
        </>
    )
}
