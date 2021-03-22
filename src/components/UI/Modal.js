import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

export default function AlertDialog(props) {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1
		}
	}));

	const [ userDetails, setUserDetails ] = useState({});

	useEffect(
		() => {
			setUserDetails(props.user);
		},
		[ props.user ]
	);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Dialog
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
        <Grid container direction='row' justify='center'>
					<DialogTitle id="alert-dialog-title">{'Edit users details'}</DialogTitle>
						<DialogContent>
              <Grid item container xs={12} direction='column' alignItems='center' >
                <Grid item>
                  <Avatar alt="Remy Sharp" src={props.user.avatar} style={{width:150, height:150}} />
                </Grid>
              </Grid>
              <Grid container direction='row' alignItems='center'>
              <Grid item container direction='row' justify='center' xs={12}>
							    <TextField
                    id='outlined-basic'
                    label='First Name'
                    variant='outlined'
							    	value={userDetails.firstName}
							    	placeholder="Edit First Name"
							    	onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
							    />
                </Grid>
                <Grid item container direction='row' justify='center' xs={12}>
							    <TextField
                    id='outlined-basic'
                    label='Last Name'
                    variant='outlined'
							    	value={userDetails.lastName}
							    	placeholder="Edit Last Name"
							    	onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
							    />
                </Grid>
                <Grid item container direction='row' justify='center' xs={12}>
							    <TextField
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
							    	value={userDetails.email}
							    	placeholder="Edit Email"
							    	onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
							    />	
                </Grid>
              </Grid>
						</DialogContent>
        </Grid>
					<DialogActions>
						<Button
							onClick={() => {
								props.updateUser(userDetails);
								props.handleClose();
							}}
							color="primary"
						>
							Save
						</Button>
						<Button onClick={props.handleClose} color="primary" autoFocus>
							Cancel
						</Button>
						{props.showDelete && <Button onClick={() =>{props.handleClose(); props.setDeleteUser(userDetails)}} variant="contained" disableRipple disableElevation color='secondary' >
							Delete User
						</Button>}
					</DialogActions>
			</Dialog>
		</div>
	);
}
