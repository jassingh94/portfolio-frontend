

import { Avatar } from '@mui/material'
import self from '../../assets/self.png'
export default function AvatarImg () {
    return (
        <Avatar style={{ height: '300px', width: '300px', boxShadow: '#918a8a59 0px 5px 15px' }} src={self}/>
    )
}