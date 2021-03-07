import { AppBar, makeStyles, TextField } from '@material-ui/core'
import styled from 'styled-components'


export const StyledTextField = styled(TextField)`
  && {
    & > label {
      color: #fff;
    }
  }
`

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: #326f74;
  }
`

export const StyledMonkeyMenu = styled.div`
  height: 100%;
`
export const useStyles = makeStyles((theme) => ({
  '@global': {
    '.MuiOutlinedInput-input': {
      color: '#fff'
    }
  },
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
