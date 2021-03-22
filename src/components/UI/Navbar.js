import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatarmenu from './Avatarmenu';
import Button from '@material-ui/core/Button';
import Adduser from './Adduser';
import {StoreContext} from '../Context/Context'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '5em'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase'
  },
  loginButton: {
    marginRight: 0
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const context = useContext(StoreContext)

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <Typography variant='h3' className={classes.title}>User Test App</Typography>
          <Adduser
            open={open}
            handleClose={handleClose}
          ></Adduser>
          {context.user.isAdmin && <Button variant="contained" onClick={handleClickOpen} style={{marginRight:20}} disableRipple disableElevation color='primary'>Add User</Button>}
          <Avatarmenu></Avatarmenu>
        </Toolbar>
      </AppBar>
    </div>
  );
}