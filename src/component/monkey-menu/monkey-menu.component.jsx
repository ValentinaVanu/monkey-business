import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Monkey } from '../monkey/monkey.component';
import { StyledAppBar, useStyles } from './monkey-menu.style';
import { TextField } from '@material-ui/core';

const MonkeyMenu = () => {

  const classes = useStyles();

  return (
    <StyledAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Monkey />
        <div className={classes.grow} />
        <TextField id="outlined-basic" type="number" label="Define Group Size" variant="outlined" />
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  )
}

export { MonkeyMenu }
