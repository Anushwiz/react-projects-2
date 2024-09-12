import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-400 px-4 py-3 uppercase">
      <Link to="/" className="tracking-tight">
        Anus<span className="tracking-tighter">h&apos;s</span> Slice Station
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
