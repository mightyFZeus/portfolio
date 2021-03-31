import React from 'react'

import Drawer from '@material-ui/core/Drawer';

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
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
    ContactMail
} from '@material-ui/icons'



 const styles = {
 menuSliderContainer:{
	width: 150,
	background:'#511',
	height:'30rem'
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

drawerHeightChanged = () => {
	this.setState({
		Style:{height: 'calc(100% - 64px)', top: 64}
	})
}
render() {
	const { isDrawerOpened } = this.state;
	return (
		<>
			<Box component='nav' 
			
			>
				<AppBar>
					<Toolbar style={{display:'flex'}}>
						<IconButton onClick={this.toggleDrawerStatus} style={{display:'flex'}}>
						<ArrowBack/> 
						</IconButton>
						<Typography>
							Portfolio
						</Typography>
					
							<Divider/>
							<Box component='div' >
								<Drawer
								variant="temporary"
								open={isDrawerOpened} 
								anchor={"top"}
								onClose={this.closeDrawer}
							
								>
									
								<List component='nav' >
									<ListItem button key='Home' >
										<ListItemIcon><Home/>
										</ListItemIcon>
										<ListItemText primary='Home' />
									</ListItem>
								<ListItem button key='Apps'>
									<ListItemIcon><Apps/>
									</ListItemIcon>
									<ListItemText primary='Apps' />
								</ListItem>
								<ListItem button key='contact'>
									<ListItemIcon><ContactMail/>
									</ListItemIcon>
									<ListItemText primary=' Contacts' />
								</ListItem>

								<ListItem button key='Resume'>
								<ListItemIcon>
									<AssignmentInd />
								</ListItemIcon>
								<ListItemText primary='Resume' />
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
