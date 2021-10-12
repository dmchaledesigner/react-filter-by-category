import React from 'react';

const Item = ({ post }) => {
    return (
        <div className="item-con">
            <div className="item-container">
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </div>
        </div>
    )
}

export default Item
