import { useContext } from "react";
// import Search_Icon from "../../assets/icons/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext); // Corrected spelling

  const doSearch = useDebounce((term) => {
    console.log(term);
    const fetchedLocation = getLocationByName(term);
    console.log(fetchedLocation);

    setSelectedLocation({ ...fetchedLocation }); // Corrected spelling
  }, 500);
  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <div>
      {/* Search form start */}
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            onChange={handleChange}
            required
          />
          {/* <button type="submit">
            <img src={Search_Icon} />
          </button> */}
        </div>
      </form>
      {/* Search form end*/}
    </div>
  );
};

export default Search;
