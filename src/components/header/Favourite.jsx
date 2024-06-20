import Heart_Favourite from "../../assets/icons/heart.svg";

const Favourite = ({ onShow }) => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={Heart_Favourite} alt="" />
        <span onClick={onShow}>Favourite Locations</span>
      </div>
    </div>
  );
};

export default Favourite;
