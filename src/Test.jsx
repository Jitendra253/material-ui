import { CardActionArea, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
const Test = () => {

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140" over
            sx={{ objectFit: "contain" }}
            image="https://as1.ftcdn.net/v2/jpg/07/85/50/84/1000_F_785508448_lRSjb84AxqOYpOsSThNJUH11h6Opf16H.webp"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
export default Test;