import "./NavItem.css";

// Die Komponente NavItem besitzt einen Parameter,
// der bei React-Komponenten immer ein Objekt ist.
// Somit lässt er sich entpacken und wir können auf die Werte zugreifen,
// die wir in Navigation.js übergeben haben.
function NavItem({ navLink, navLabel }) {
    return (
        <li className="NavItem">
            <a className="NavItem__Link" href={navLink} title={navLabel}>{navLabel}</a>
        </li>
    );
}

// So sieht eine alternative Schreibweise ohne das Entpacken des Parameters aus:
// function NavItem(props) {
//     return (
//         <li className="NavItem">
//             <a className="NavItem__Link" href={props.navLink} title={props.navLabel}>{props.navLabel}</a>
//         </li>
//     );
// }

export default NavItem;
