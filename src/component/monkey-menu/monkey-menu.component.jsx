import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Monkey } from '../monkey/monkey.component';
import { StyledAppBar } from './monkey-menu.style';
import { TextField } from '@material-ui/core';

const MonkeyMenu = () => {


  const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

  const classes = useStyles();

  return (
    <StyledAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Monkey />
        <div className={classes.grow} />
        <TextField id="outlined-basic" label="Write a number to group" variant="outlined" />
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  )
}

export { MonkeyMenu }
