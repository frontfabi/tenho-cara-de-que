import Image from "next/image"
import { Link } from "react-scroll"
import { StyledNav } from "./NavMenu.style"
const NavMenu = ({ menus, logo }) => {
  console.log(menus)
  return (
    <StyledNav>
      <div className="uk-navbar-left">
        <h1>
          <Link href="/">
            <a>
              <Image
                alt={logo.alternativeText}
                width={logo.width || 120}
                height={logo.height || 60}
                src={logo.url}
              />
            </a>
          </Link>
        </h1>
      </div>

      <ul className="navMenuList">
        {menus.map((menu: any) => {
          return (
            <li key={menu.slug}>
              <Link
                className="navLink"
                activeClass="active"
                to={menu.section_id}
                spy={true}
                smooth={true}
                data-text={menu.title}
                title={menu.description}
              >
                {menu.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledNav>
  )
}

export { NavMenu }
