import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Categories",
    href: "/categories",
    icon: "bi bi-ui-checks-grid",
  },
  {
    title: "Sub-categories",
    href: "/sub-categories",
    icon: "bi bi-columns",
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: "bi bi-box-seam",
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-people",
  },
  {
    title: "Payments",
    href: "/payments",
    icon: "bi bi-credit-card",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: "bi bi-cart",
  },
  {
    title: "Contacted Us",
    href: "/contact-us",
    icon: "bi bi-chat-left-text",
  },
  {
    title: "Feed Backs",
    href: "/feedbacks",
    icon: "bi bi-emoji-smile",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "bi bi-gear",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div className="profilebg">
        <div className="p-3 d-flex">
          <Button
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
