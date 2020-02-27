import React from 'react';
import '../scss/ListItem.scss'

const ListItem = props => {
    console.log(props);
    return (
        <article>
            <p className="note">{props.text}</p>
        </article>
    );
}

export default ListItem;
