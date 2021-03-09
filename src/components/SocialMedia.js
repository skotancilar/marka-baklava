import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import './SocialMedia.scss';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   icon: {
      marginRight: theme.spacing(1)
   }
}));

const SocialMedia = ({ href, text }) => {
   const classes = useStyles();
   return (
      <a className="navbar__socialMedia" href={href}>
         <InstagramIcon className={classes.icon} />
         <span className="navbar__socialMedia__brand">{text}</span>
      </a>
   )
}

export default SocialMedia;
