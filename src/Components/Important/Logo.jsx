import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Logo = ({ css }) => {
  return (
    <Link
      to="/dashboard/home"
      className={`text-2xl font-young cursor-pointer ${css}`}
    >
      Job<span className="text-main-v1">tile</span>
    </Link>
  );
};

export default Logo;
