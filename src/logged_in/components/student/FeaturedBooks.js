
import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const FeaturedBooks = () => {
     const [books, setBooks] = useState([]);
    useEffect(() => {
    const getBooks = async () => {
      try {
        const bookResponseJson = await fetch('https://example-data.draftbit.com/books?_limit=20', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const bookResponseData = await bookResponseJson.json();
        setBooks(bookResponseData);
      } catch (e)
      {
        console.log(e)
      }
    }
    getBooks();
    
 },[])
    return (
    <div>
        {/* { books && books.length > 0 ? books.map((book) => (
           <>
     <Card >
      
        <Link to="/#" tabIndex={-1}>
          <img src={book.src}  alt="" />
        </Link>
    
      <Box p={2}>
        <Link
         to="/#"
          // className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Typography variant="h6">
            <span >{book.title}</span>
          </Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
          {book.Quote1}
          <Link to="/#"  tabIndex={-1}>
            <span > read more...</span>
          </Link>
        </Typography>
      </Box>
           </Card>
               </>
        )) : ""} */}
         { books && books.length > 0 ? books.map((book) => (
           <>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
         img={book.src}
        title="green iguana"
      />
      <CardContent>
        <Link
         to="/#"
          // className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Typography variant="h6">
            <span >{book.title}</span>
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
              {book.Quote1}
               <Link to="/#"  tabIndex={-1}>
            <span > read more...</span>
          </Link>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
             </Card>
             </>
              )) : ""}
            </div>
  )
}

export default FeaturedBooks
