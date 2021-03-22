import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { StoreContext } from '../Context/Context';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function AlertDialog(props) {
	const context = useContext(StoreContext);
	const [ newUser, setNewUser ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		avatar: '',
		isAdmin: '',
		password: ''
	});
	const addUser = () => {
		context.addUsersHandler(newUser);
		props.handleClose();
	};

	return (
		<div>
			<Dialog
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<Grid container direction="row" justify="center">
					<DialogTitle id="alert-dialog-title">{'Add users details'}</DialogTitle>
					<DialogContent>
						<Grid container direction="row" alignItems="center">
							<Grid item container direction="row" justify="center" xs={12}>
								<TextField
									value={newUser.firstName}
									onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
									id="firstName"
									label="First Name"
									variant="outlined"
									placeholder="Edit First Name"
								/>
							</Grid>
							<Grid item container direction="row" justify="center" xs={12}>
								<TextField
									value={newUser.lastName}
									onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
									id="lastName"
									label="Last Name"
									variant="outlined"
									placeholder="Edit Last Name"
								/>
							</Grid>
							<Grid item container direction="row" justify="center" xs={12}>
								<TextField
									value={newUser.email}
									onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
									id="email"
									label="Email"
									variant="outlined"
									placeholder="Edit Email"
								/>
							</Grid>
							<Grid item container direction="row" justify="center" xs={12}>
								<TextField
									value={newUser.avatar}
									onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
									id="avatar"
									label="Avatar"
									variant="outlined"
									placeholder="Avatar"
								/>
							</Grid>
							<Grid item container direction="row" justify="center" xs={12}>
								<TextField
									value={newUser.password}
									onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
									id="avatar"
									label="Avatar"
									variant="outlined"
									placeholder="Avatar"
								/>
							</Grid>
							<Grid item container direction="row" justify="start" xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											checked={newUser.isAdmin}
											onChange={(e) => setNewUser({ ...newUser, isAdmin: e.target.checked })}
											name="checkedA"
										/>
									}
									label="Is Admin"
								/>
							</Grid>
							
						</Grid>
					</DialogContent>
				</Grid>
				<DialogActions>
					<Button onClick={addUser}>Add User</Button>
					<Button onClick={props.handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
