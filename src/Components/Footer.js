import React from 'react'
import {BottomNavigation, BottomNavigationAction, FormHelperText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const styles = makeStyles({
    body: {
        background: "#4f25f7",
        marginTop: 70,
    },
    // root:{
    //     display: "flex",
    //     justifyContent:"center",
    //     height: "60px",
    //     width: "60px",
    //     background: "#fff",
    //     borderRadius: 50, 
    // }
})

export default function Footer() {
    const classes = styles()
  return (
    <BottomNavigation className={classes.body}>
          <BottomNavigationAction  color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
          <BottomNavigationAction  label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction  label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
          <BottomNavigationAction  label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} />
    </BottomNavigation>
  )
}
