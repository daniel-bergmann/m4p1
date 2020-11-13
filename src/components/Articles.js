import { Link } from "react-router-dom";

// components
import Nav from './Nav'




// Here starts the main content
// ////////////////////////777777/



export default function Articles() {
    return (
        <>
{/* navbar component*/}
        <Nav />
{/* Header */}
        <div className="header">
          <h1>Welcome <span></span></h1>
        </div>
{/* Navigation router links to articles */}
          <ul className="articlePicker mainText">
              <div class="square1"></div>
                <div class="square2">
                  <li>
                    <Link to="/interneta"><p>Internet Arcitecture
                      </p></Link>
                  </li>
                  <li>
                    <Link to="/webservers"><p>Web Servers</p></Link>
                  </li>
                </div>
          </ul>
        </>
    )
}

