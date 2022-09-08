import { Logo } from "../components/Icons";
import NavBar from "../components/Sidebar/NavBar";
import TweetButton from "../components/Sidebar/TweetButton";
import Profile from "../components/Sidebar/Profile";

const Sidebar = () => {
  return (
    <div className="w-64 flex flex-col gap-4 h-screen sticky top-0">
      <div className="w-12 h-12  flex items-center justify-center  rounded-full hover:bg-extralg transition-all cursor-pointer">
        <Logo/>
      </div>
      <NavBar />
      <TweetButton text="Tweet"/>
      <Profile />
    </div>
  );
};

export default Sidebar;
