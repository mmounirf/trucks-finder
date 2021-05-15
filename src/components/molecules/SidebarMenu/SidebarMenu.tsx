import './SidebarMenu.scss';

export default function SidebarMenu() {
    return (
        <aside className="sidebar-menu">
            <nav className="sidebar-menu__nav">
                <p className="nav__item">Dashboard</p>
                <p className="nav__item">Logout</p>
            </nav>
        </aside>
    );
}