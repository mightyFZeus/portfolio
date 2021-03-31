import React from 'react'

import Drawer from '@material-ui/core/Drawer';

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
	ContactMail,
	Menu
} from '@material-ui/icons'



 const styles = {
 menuSliderContainer:{
	width: 150,
	background:'#511',
	height:'100%'
 },
 listColor:{
	 color:'tan'
 }
 };

export default class MarerialUIDrawer
	extends React.Component {
constructor(props) {
	super(props);
	this.state = {
	isDrawerOpened: false,

	};
}
toggleDrawerStatus = () => {
	this.setState({
	isDrawerOpened: true,
	
	})
}
closeDrawer = () => {
	this.setState({
	isDrawerOpened: false,
	})
}


render() {
	const { isDrawerOpened } = this.state;
	return (
		<>
			<Box component='nav' 
			
			>
				<AppBar style={{background:'#222'}}>
					<Toolbar style={{display:'flex'}}>
						<IconButton onClick={this.toggleDrawerStatus} style={{display:'flex'}}>
						<Menu style={{color:'tomato'}}/> 
						</IconButton>
						<Typography style={{color:'tan'}}>
							Portfolio
						</Typography>
					
							<Divider/>
							<Box component='div' >
								<Drawer
								variant="temporary"
								open={isDrawerOpened} 
								anchor={"right"}
								onClose={this.closeDrawer}
								>
									
								<List component='nav' style={styles.menuSliderContainer}>
									<ListItem button key='Home' >
										<ListItemIcon><Home/>
										</ListItemIcon>
										<ListItemText  style={styles.listColor} primary='Home' />
									</ListItem>
									<ListItem button key='Apps'>
										<ListItemIcon><Apps/>
										</ListItemIcon>
										<ListItemText primary='Apps' style={styles.listColor} />
									</ListItem>
									<ListItem button key='contact'>
										<ListItemIcon><ContactMail/>
										</ListItemIcon>
										<ListItemText primary=' Contacts' style={styles.listColor} />
									</ListItem>

									<ListItem button key='Resume'>
									<ListItemIcon>
										<AssignmentInd />
									</ListItemIcon>
									<ListItemText primary='Resume' style={styles.listColor} />
									</ListItem>

									</List>
								</Drawer>
							</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</>
		
	);
}
}
