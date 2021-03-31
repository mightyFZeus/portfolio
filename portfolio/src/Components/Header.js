import React from 'react'
import {
Typography,
Avatar,
Grid,
Box


} from '@material-ui/core'
import avatar from '../avatar.png'
function Header() {
    return (
        <Box>
            <Avatar src={avatar} alt='Olabisi' />
        </Box>
    )
}

export default Header
