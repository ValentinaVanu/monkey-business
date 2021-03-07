import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Monkey } from '../monkey/monkey.component';
import { StyledAppBar, StyledTextField, useStyles } from './monkey-menu.style';
import { useDispatch, useSelector } from 'react-redux';
import { groupMonkeyAction } from '../../store/monkey.action';

const MonkeyMenu = () => {
  const dispatch = useDispatch()
  const groupBy = useSelector(({ monkey }) => monkey.groupBy)

  const classes = useStyles();
  const handleChange = e => {
    dispatch(groupMonkeyAction(e.target.value))
    console.log(e.target.value)
  }
  return (
    <StyledAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Monkey />
        <div className={classes.grow} />
        <StyledTextField
          value={groupBy}
          id="outlined-basic"
          onChange={handleChange}
          type="number"
          label="Define Group Size"
          variant="outlined" />
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  )
}

export { MonkeyMenu }
