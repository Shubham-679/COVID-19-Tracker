import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ countryList,  handleCountryChange}) => {
    if(!countryList) return "Loding..."
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                    {countryList.length && countryList.map((country, key) => (
                        <option key={key} value={country.name}>{country.name}</option>
                    ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;