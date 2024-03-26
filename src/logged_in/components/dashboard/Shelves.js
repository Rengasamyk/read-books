import React from "react";
import Bookshelf from "./Bookshelf";
import { Grid, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import RateCard from "./RateCard";

const Shelves = ({ books, onShelfChange }) => {
    const history=useHistory()
	const currentlyReading = books.filter(
		(fetchedBook) => fetchedBook.shelf === "currentlyReading"
	);
	const wantToRead = books.filter(
		(fetchedBook) => fetchedBook.shelf === "wantToRead"
	);
	const read = books.filter((fetchedBook) => fetchedBook.shelf === "read");

	return (
        <div className='list-books-content'>
            <Grid item xs={12} sm={12} style={{display:"flex",alignContent:"flex-end",justifyContent:"flex-end"}}>
         <Button  variant="contained" color="secondary" onClick={()=>history.push("/good-reads/search")}>Add Book</Button>
        </Grid>
			<div>
				<Bookshelf
					fetchedBooks={currentlyReading}
					shelfTitle='Currently Reading'
					onShelfChange={onShelfChange}
				/>
				<Bookshelf
					fetchedBooks={wantToRead}
					shelfTitle='Want to Read'
					onShelfChange={onShelfChange}
				/>
				<Bookshelf
					fetchedBooks={read}
					shelfTitle='Read'
					onShelfChange={onShelfChange}
				/>
				
			</div>
		</div>
	);
};

export default Shelves;
