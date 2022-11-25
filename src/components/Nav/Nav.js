import './Nav.css'

function Nav() {
    return (
      <div id="nav">
          <p id='title'><b>FLOW</b>  <small>with</small>  <b>MANAMI</b></p>
          <nav id='nav-options'>
            <ul id="menu">
              <li>
                <a class="option" href="#About-me">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a class="option" href="#Schedule">
                  SCHEDULE
                </a>
              </li>

              <li>
                <a class="option" href="#Resume">
                  BLOG
                </a>
              </li>
              <li>
                <a class="option" href="#Contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
  
  export default Nav;