import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import './SocialMedia.scss';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   icon: {
      // marginRight: theme.spacing(1),
      fontSize: '5rem'
   }
}));

const SocialMedia = ({ href, text }) => {
   const classes = useStyles();
   return (
      <a className="navbar__socialMedia" target='_blank' rel="noreferrer" href={href}>
         <InstagramIcon className={classes.icon} />
         <span className="navbar__socialMedia__brand">{text}</span>
      </a>
   )
}

export default SocialMedia;
