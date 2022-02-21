import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";

const NavLink = ({ children, to, activeClassName, ClassName, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={'${className} ${match ? activeClassName : null}'} to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default NavLink;