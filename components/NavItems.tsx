import { Link, NavLink } from "react-router";
import { sidebartopItems, adminItems, userItems } from "~/constants";
const NavItems = () => {
  return (
    
    <section className="nav-items">
        <Link to="/" className="link-logo">
            <img src="/assets/favicon.ico" alt="logo" className="size-[40px]" />
            <h1>WifiZone</h1>
        </Link>

        <div className="flex flex-col justify-between h-full py-7">
            <nav>
                <div>
                    {sidebartopItems.map(({ id, icon, label, href }) => (
                        <NavLink to={href} key={id} className="flex items-center gap-1.5 py-0.5 text-sm font-bold">
                            <img src={icon} alt={label} className="size-[20px]" />
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="py-2">
                    {adminItems.map(({ id, icon, label, href }) => (
                        <NavLink to={href} key={id} className="flex items-center gap-1.5 py-1.5 text-sm font-bold">
                            <img src={icon} alt={label} className="size-[20px]" />
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="py-2">
                    {userItems.map(({ id, icon, label, href }) => (
                        <NavLink to={href} key={id} className="flex items-center gap-1.5 py-1.5 text-sm font-bold">
                            <img src={icon} alt={label} className="size-[20px]" />
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>

            <div>
                <Link to="https://gemini.google.com/app" className="flex items-center gap-1.5 py-0.5 text-sm font-bold">
                    <img src="/assets/favicon.ico" alt="logo" className="size-[20px]" />
                    <span>dohouint@gmail.com</span>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default NavItems
