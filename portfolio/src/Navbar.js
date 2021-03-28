import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

// css styles

const useStyles = makeStyles(theme=>({
    menuSliderContainer:{
        width: 250,
        background:'#511',
        height:'30rem'
    },
    avatar:{
        display:'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    
    },
    listItemColor:{
        color:'tan'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps/>,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts'
    },
    
]

function Navbar() {
    const [SideBar, setSideBar] = useState({
        right:false
    })


    const toggleSlider = (slider, open)=> (event) =>{
        
        setSideBar({...SideBar, [slider]: open})
    }
    const classes = useStyles();

    const sideList= (slider) =>{
        <Box component='div' className={classes.menuSliderContainer}>
        <Avatar className={classes.avatar} src='' alt=''/>
        <Divider />
        <List>
            {menuItems.map((Item, key) =>(
                
            <ListItem button  key={key}>
                <ListItemIcon className={classes.listItemColor}>
                    {Item.listIcon}
                </ListItemIcon >
                <ListItemText className={classes.listItemColor} primary={Item.listText} />
            </ListItem>
            ))}
             
        </List>
    </Box>
    }
    return (
        <>
           
      
          <Box component='nav'>
                <AppBar position= 'static' style={{background:'#000'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                        <ArrowBack style={{color:'#fff'}} /> 
                        </IconButton>
                        <Typography variant='h5'>
                            Portfolio
                        </Typography>
                        
                        <Drawer 
                        variant='temporary'
                         open={SideBar.right} >
                        {sideList('right')}
                        </Drawer>
                        
                    </Toolbar>
                </AppBar>
            </Box> 
          
      
     
           
        </>
    )
}

export default Navbar
