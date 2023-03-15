import "./NavLinks.css";
import { NavLink, NavLinkProps } from "react-router-dom";
import { useTheme } from "@mui/material";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <PokeNavLink to="/">
          <h2>Pokedex</h2>
        </PokeNavLink>
      </li>
      <li>
        <PokeNavLink to="/favorites">
          <h2>Favoritos</h2>
        </PokeNavLink>
      </li>
    </ul>
  );
};

const PokeNavLink = ({ to, children, ...rest }: NavLinkProps) => {
  const theme = useTheme();

  return (
    <NavLink
      to={to}
      {...rest}
      style={({ isActive }) =>
        isActive
          ? { color: theme.palette.secondary.light, textDecoration: "none" }
          : {
              color: theme.palette.primary.contrastText,
              textDecoration: "none",
            }
      }
      //style={{ color: theme.palette.primary.contrastText, ...rest.style }}
    >
      {children}
    </NavLink>
  );
};

export default NavLinks;
