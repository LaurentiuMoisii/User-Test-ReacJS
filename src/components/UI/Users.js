import React, { useState, useEffect, useContext } from 'react';
import Modal from './Modal';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { StoreContext } from '../Context/Context';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

function Users() {
	useEffect(() => {
		context.fetchItems();
		//eslint-disable-next-line
	}, []);

	const [ open, setOpen ] = useState(false);
	const [ user, setUser ] = useState({});
	const context = useContext(StoreContext);

	const useStyles = makeStyles((theme) => ({
		firstName: {
			backgroundColor: '#9a9a9a'
		},
		secondName: {
			backgroundColor: '#c0c0c0'
		},
		root: {
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			alignItems: 'center'
		},
		items: {
      maxWidth: 600,
      minWidth: 550,
			backgroundColor: '#ccc',
			borderRadius: 10,
			marginBottom: 20
		}
	}));

	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const moreDetail = (item) => {
		console.log(item);
		setUser(item);
		handleClickOpen();
	};

	const updateUser = (user) => {
		context.updateUserHandler(user);
	};

	const deleteUsers = async (user) => {
		context.deleteUsersHandler(user);
	};

	return (
		<div>
			<Navbar />
			<Modal
				open={open}
				handleClose={handleClose}
				user={user}
				updateUser={updateUser}
				setDeleteUser={deleteUsers}
				showDelete={true}
			/>
			<div className={classes.root}>
				<List >
					{context.users.map((item) => (
						<ListItem key={item.id} className={classes.items}>
							<ListItemAvatar>
								<Avatar src={item.avatar} />
							</ListItemAvatar>
							<ListItemText primary={`${item.firstName} ${item.lastName}`} secondary={item.email} />
							<ListItemSecondaryAction>
								{context.user.isAdmin && <IconButton onClick={() => moreDetail(item)} aria-label="delete" className={classes.margin}>
									<EditIcon />
								</IconButton>}
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	);
}

export default Users;
