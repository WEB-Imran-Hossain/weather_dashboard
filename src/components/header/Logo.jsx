import Logo_Icon from "../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div>
      {/* Logo Start */}
      <a href="./index.html">
        <img className="h-9" src={Logo_Icon} alt="Weather App" />
      </a>
      {/* Logo End */}
    </div>
  );
};

export default Logo;
