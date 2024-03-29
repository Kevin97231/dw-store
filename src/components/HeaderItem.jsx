
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // Importation de PropTypes


export const HeaderItem = ({href, children}) => {
  
    const {pathname} = useLocation()

    console.log("pathname", pathname)

    return (
    <>
      <Link
        to={href}
        className={`${
            pathname === href && "border-b-4 border-base text-white"
          } pb-1 text-lg text-base hover:text-white font-semibold`}
      >
        {children}
      </Link>
    </>
  );
}

HeaderItem.propTypes = {
    // href: PropTypes.string // Le composant n'acceptera que les strings
    href: PropTypes.string.isRequired, // Le composant n'acceptera que les string sur href 
                                      // et le parent sera obligé de lui fournir cette donnée
    children: PropTypes.string.isRequired
}