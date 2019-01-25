import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
 
  return (
    
    <Card className={classes.card} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Add new Company
          </Typography>
          <Typography component="p">
            Click here to set up a new Company.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Plan
        </Button>
        <Button size="small" color="primary">
          Gather Info
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);