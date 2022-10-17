import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ramal from '../images/ramal.jpg'
import React, { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardNews = () => {
    const [expanded, setExpanded] =useState(false);
    const [favorite, setFavorite] =useState(false);
  
    const handleExpandClick = () =>  setExpanded(!expanded)
    const handleaddFavorite = () => setFavorite(!favorite)
    
    return (
        <Card sx={{ maxWidth: 360 }} className="shadow mvcenter">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[600] }} aria-label="recipe">
                  A
                </Avatar>
              }
              
              title="Autopista Amozoc-Perote"
              subheader="Octubre 17, 2022"
            />
            <CardMedia
              component="img"
              height="194"
              image={_ramal}
              alt="Paella dish"
            />
            <CardContent>
                <Typography paragraph className="mb-0">
                La nueva autopista tiene una longitud de 105 kilómetros y permite circular a velocidades de hasta 110 Km./hora con mas seguridad. 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleaddFavorite}>
                    <FavoriteIcon className={ favorite ? "Cliked" :"noCliked" } />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className='text-dark'>
                    <Typography paragraph >
                    A la disminución del tiempo de recorrido se suman otros beneficios como menor emisión de contaminantes, ahorros en el mantenimiento vehicular y menor fatiga al conducir.
                    </Typography>
                    <Typography paragraph>
                    Con la apertura de grandes obras carreteras como la Amozoc-Perote, el Ex-presidente de la república, el Lic. Felipe Calderón Hinojosa aceleró el desarrollo y la competitividad de México.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
  }

  export default CardNews