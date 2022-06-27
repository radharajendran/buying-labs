import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CityList } from './CityList';

const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  console.log(selectedLocation);

  return (
    <Autocomplete
      id="city"
      options={CityList}
      renderInput={params => (
        <TextField {...params} label="Location" variant="outlined" />
      )}
      getOptionLabel={option => option.name}
      style={{ width: 150 }}
      value={selectedLocation}
      onChange={(_event, location) => {
        setSelectedLocation(location);
      }}
    />
  );
};

export default SearchBar;