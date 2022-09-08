import { useState } from "react";
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
} from "../Icons";

const NavBar = () => {

  const links = [{
    name: "Home",
    icon: HomeIcon
  },{
    name: "Explore",
    icon: ExploreIcon
  },{
    name: "Notifications",
    icon: NotificationIcon
  },{
    name: "Messages",
    icon: MessagesIcon
  },{
    name: "Bookmarks",
    icon: BookmarksIcon
  },{
    name: "Lists",
    icon: ListsIcon
  },{
    name: "Profile",
    icon: ProfileIcon
  },{
    name: "More",
    icon: MoreIcon
  }]

  const [active, setActive] = useState("Home")


  const activeTab = (name) => {
    setActive(name)
  }
  
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {
          links.map(link => (
            <li className="cursor-pointer group" key={link.name} onClick={() => activeTab(link.name)} >
                <div className="inline-block">
                  <div className="flex items-center  group-hover:bg-extralg h-12 rounded-full pl-3 " >
                    <a href="#" className="flex items-center pointer-events-none"  >
                      <link.icon/>
                      <span className={active === link.name ? (`ml-4 font-bold pr-4 text-xl`) : (`ml-4 pr-4 text-xl`)} >
                        {link.name}
                      </span>
                    </a>
                  </div>
              </div>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;

