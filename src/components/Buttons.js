import React from 'react';



const Buttons = ({ categories, filterByCategory }) => {
    console.log(categories);
    return (
        <div className="buttons">
            {
                categories.map((cat, index) => (
                    <button
                        type="button"
                        className="btn"
                        onClick={() => filterByCategory(cat)} key={index}>{cat}</button>
                ))
            }
        </div>
    )
}

export default Buttons
