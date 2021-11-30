import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { Grid } from "@material-ui/core";
import MomentUtils from '@date-io/moment';
import styles from './MonthPicker.module.css';

const MonthPicker = ({ handleDateChange, selectedDate }) => {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justify="space-around" className={styles.formControl}>
                <DatePicker
                    autoOk
                    disableFuture
                    label="Monthly Global Data"
                    minDate={new Date('Wed Jan 1 2020 19:49:43 GMT+0530 (India Standard Time)')}
                    maxDate={new Date('Sun Feb 28 2021 20:03:15 GMT+0530 (India Standard Time)')}
                    variant="inline"
                    helperText="Set Data Between Jan 2020-Fab 2021"
                    openTo="year"
                    views={["year", "month"]}
                    value={selectedDate ? selectedDate : null}
                    onChange={handleDateChange}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )

}

export default MonthPicker;