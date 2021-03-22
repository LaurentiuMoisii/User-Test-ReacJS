import React, {useState, useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import locker from '../../assets/lock.svg';
import { useHistory } from 'react-router-dom';
import {StoreContext} from '../Context/Context'

const useStyles = makeStyles((theme) => ({
  locker: {
    height: '3em'
  },
  signInButton: {
    width: 400,
    height: 50,
    fontSize: '1rem'
  }
}));

const Login = () => {
  const classes = useStyles();
  const context = useContext(StoreContext)
  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')
  const [password, setPassword] = useState('')
  const [passwordHelper, setPasswordHelper] = useState('')
  const [msg, setMsg] = useState()

  const history = useHistory();
useEffect(() => {
  context.fetchItems()
  //eslint-disable-next-line
}, [])
  const handleHistory = () => {
    context.getUser(email, password).then(()=> {history.push('/users'); console.log('findd')}).catch(()=> setMsg('Email or passrow incorrect!'))
    
  }

  const onChange = event => {
    let valid;
    switch(event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        .test(event.target.value)
        if(!valid) {
          setEmailHelper('Invalid email *') 
        } else {
          setEmailHelper('')
        }
        break;

      case 'password':
        setPassword(event.target.value)
        valid = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        .test(event.target.value)
        if(!valid) {
          setPasswordHelper('Invalid password *') 
        } else {
          setPasswordHelper('')
        }
        break;
        default:
        break;
      }
    }
  

	return (
		<Grid container style={{position: 'relative'}}>
			<Grid item container direction='column' alignItems='center' style={{position: 'absolute', transform: 'translateY(75%)'}}> 
      
        <Grid item>
          <img src={locker} className={classes.locker} alt='locker' />
        </Grid>

        <Grid item>
          <Typography variant='h3'>Sign in</Typography>
        </Grid>

				<Grid item>
          <TextField 
            label='Email Address *' 
            error={emailHelper.length !== 0}
            helperText={emailHelper}
            id='email' 
            variant='outlined'
            value={email}
            onChange={onChange}
          />
				</Grid>

        <Grid item>
        <TextField
            type='password'
            label='Password *' 
            error={passwordHelper.length !== 0}
            helperText={passwordHelper}
            id='password' 
            variant='outlined'
            value={password}
            onChange={onChange}
					/>
        </Grid>

        <Grid item>
          <Button
            disabled={email.length === 0 || password.length === 0}
            className={classes.signInButton} 
            variant='contained' 
            onClick={handleHistory}
            color='primary'>Sign In
          </Button>
        </Grid>
        {msg}
			</Grid>
		</Grid>
	);
};

export default Login;
