import React from "react";
const SidebarData = [
  {
    title: "Home",
    // icon: <HomeIcon/>,
    // Link: '/home'
  },
  {
    title: "Mailbox",
    // icon: <MailboxIcon/>,
    // Link: '/Mailbox'
  },

  {
    title: "Analytics",
    // icon: <AnalyticsIcon/>,
    // Link: '/Analytics'
  },

  {
    title: "Contact",
    // icon: <ContactIcon/>,
    // Link: 'Contact'
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li className="sidebar-list">
              {""}
              <div>{val.icon}</div>
              {""}
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
