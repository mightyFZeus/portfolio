import React from 'react'
import Typed from 'react-typed'
import {
Typography,
Avatar,
Grid,
Box
} from '@material-ui/core'
import avatar from '../avatar.png';

function Header() {
    return (
        <Box style={styles.typedContainer}>
            <Grid conatiner justify='center'>
                <Avatar src={avatar} alt='Olabisi' style={styles.avatar} />
            </Grid>
            
          
            <Typography variant='h4' style={styles.HeadStyle}>
               <Typed  strings={['Bolarin olabisi']} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant='h5' style={styles.subHeadStyle} >
               <Typed  strings={['Web Design', 'Web Development', 'Fronend Engineering']} 
               typeSpeed={40}
                backSpeed={60}
                loop
                />
                
            </Typography>
        </Box>
    )
}

const styles ={
    
    HeadStyle:{
        color:'tomato',
        marginTop: '10px'
},
    subHeadStyle:{
        color: 'tan',
        marginBottom: '3rem'
    },

    typedContainer:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        width:'100vw',
        textAlign:'center',
        zIndex:1
    },
    avatar:{
        marginLeft:'8em',
        height:'100px',
        width:'80px'
        
    }
}


export default Header
