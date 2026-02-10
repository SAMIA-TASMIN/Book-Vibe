import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { author, bookName, image,bookId, review, category, rating,
        totalPages,
        yearOfPublishing,
        tags

    } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 border p-6 shadow">
                <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-around'>
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className='border-1 border-dashed'>

                    </div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{
                            category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt></FaStarHalfAlt></div>
                    </div>
                </div>
            </div></Link>
    );
};

export default Book;