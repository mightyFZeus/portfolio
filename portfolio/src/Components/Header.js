import React from 'react'
import Typed from 'react-typed'
import {
Typography,
Avatar,
Grid,
Box


} from '@material-ui/core'
import avatar from '../logo.svg';
function Header() {
    return (
        <Box>
            <Avatar src={avatar} alt='Olabisi' />
          
            <Typography variant='h4' style={styles.TypoMargin}>
               <Typed  strings={['Bolarin olabisi']} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant='h5' >
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
    TypoMargin :{
        marginTop: '10px'
    },
    HeadStyle:{
        color:'tomato'
},
    subHeadStyle:{
        color: 'tan',
        marginBottom: '3rem'
    }
}


export default Header
