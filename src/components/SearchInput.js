import React, { useContext } from "react";
import Style from "../assets/css/search.module.css";
import { WeatherContex } from "../contex/WeatherContex";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiURL } from "../api/api";

const SearchInput = () => {
  const { searchValue } = useContext(WeatherContex);

  const loadOptions =  async (inputValue) => {
    const response = await fetch(`${geoApiURL}/cities?limit=5&minPopulation=500000&namePrefix=${inputValue}`, geoApiOptions);
    const responseJSON = await response.json();

    return {
      options: responseJSON.data.map((location) => {
                return {
                  value: {
                    latitude: location.latitude, longitude: location.longitude, city: location.name, country: location.country
                  },
                  label: `${location.name}, ${location.country}`,
                };
              }),
    };
  };

  const handleChange = (data) => {
    // setSearch(data);
    searchValue(data);
  };

  return (
    <div className={Style.search}>
      <AsyncPaginate
        className={Style.searchInput}
        placeholder="Search City Name"
        debounceTimeout={650}
        value={''}
        loadOptions={loadOptions}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
