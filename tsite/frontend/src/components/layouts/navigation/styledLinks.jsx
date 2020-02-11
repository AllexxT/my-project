import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import NavStyle from "./navigationStyles";

const Styled_Link = ({ label, to, active, submenu, children }) => {
    let match = useRouteMatch({
      path: to,
      exact: active
    });
    return (
      <NavStyle.Nav__Li submenu={submenu} match={match}>
        <Link to={to}>{label}</Link>
        {children}
      </NavStyle.Nav__Li>
    );
  };

export const PopUpLink = ({ label, to, active }) => {
    let match = useRouteMatch({
      path: to,
      exact: active
    });
    return (
      <NavStyle.PopUpMenu__Link match={match}>
        <Link to={to}>{label}</Link>
      </NavStyle.PopUpMenu__Link>
    );
  };

export default Styled_Link;
