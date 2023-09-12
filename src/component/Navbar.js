import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link mx-3" to="/">   {t('home')} </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3 " to="/about"> {t('about')} </Link>
        </li>
      </ul>
      <div className="select">
         <select
          className="form-select" 
          aria-label="Default select example"
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}>

             <option selected value="en">English</option>
             <option value="fr">French</option>
             <option value="sp">Spanish</option>
         </select>
      </div>
    </>
  );
};

export default Navbar;
