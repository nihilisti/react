import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const names = ["Eric", "Bill", "Sookie", "Jason", "Pam"];
const names2 = ["Jessica", "Lafayette", "Tara", "Sam", "Alcide"];

const nameTest = () => {
    console.log(names)
    console.log(names2)
}

export default function CheckboxList() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div className="listContainer">
            <List className={classes.root}>
                {names.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={names} />
                        </ListItem>
                    );
                })}
            </List>

            <div className="arrowContainer">
                <ArrowBackIosOutlinedIcon onClick={nameTest}></ArrowBackIosOutlinedIcon><p></p>
                <ArrowForwardIosOutlinedIcon onClick={nameTest}></ArrowForwardIosOutlinedIcon>
            </div>

            <List className={classes.root}>
                {names2.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={names2} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}