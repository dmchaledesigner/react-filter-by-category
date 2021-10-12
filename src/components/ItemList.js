import React from 'react';
import Item from './Item';

function ItemList({ filteredData }) {
    return (
        <div className="item">
            {
                filteredData.map((post) => (
                    <Item post={post} key={post.id} />
                ))
            }

        </div>
    )
}

export default ItemList
