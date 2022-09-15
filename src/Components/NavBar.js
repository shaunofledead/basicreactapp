import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "100%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        height: "100%",
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
})

const linkstyle = {
    color: 'inherit',
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
    textDecoration: 'none',
};

const imgstyle = {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
};

export default function Navbar() {
    const classes = styles()
    return (
    <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   

                <Link style={imgstyle} to="/">
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/></Link>
                <Link style={linkstyle} to="/about">
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography></Link>
                <Link style={linkstyle} to="/blog">
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography></Link>
                <Link style={linkstyle} to="/Careers">
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography></Link>
                <Link style={linkstyle} to="/Demos">
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography></Link>
                <Link style={linkstyle} to="/blog">
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography></Link>
                <a href="https://google.com" style={linkstyle} rel="noreferrer">
                <CustomBtn txt="Try Our Product"/>
                </a>
            </Toolbar>
  )
}


// target="_blank"