import { useState } from "react";
import { LocationContext } from "../context";
import { Children } from "react";

const LocationProvider = ({ Children }) => {
  const [selectedLocation, seLeletedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  return (
    <LocationContext.Provider value={(selectedLocation, seLeletedLocation)}>
      {Children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
