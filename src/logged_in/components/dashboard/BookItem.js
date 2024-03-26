import React from "react";
import ChangeShelf from "./ChangeShelf";
import RateCard from "./RateCard";

const BookItem = ({ book, onShelfChange }) => {
	return (
		<li key={book.id}>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 250,
							height: 200,
							backgroundImage: `url(${
								book.imageLinks ? book.imageLinks.thumbnail : ""
							})`,
						}}
					/>
					<ChangeShelf book={book} onShelfChange={onShelfChange} />
				</div>
				<div className='book-title'>{book.title ? book.title : ""}</div>
				<div className='book-authors'>{book.authors ? book.authors : ""}</div>
				<div>
					<RateCard/>
				</div>
			</div>
		</li>
	);
};

export default BookItem;
