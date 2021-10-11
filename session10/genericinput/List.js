import React from 'react'


const List = ({stories}) => {
    return (
        <div>
            
                {stories.map(function(items){
                    return(
                        <li>
                            <span> 
                                <a href={items.url}>{items.title}</a>
                            </span>
                            <span>     {items.author}</span>
                            <span>  {items.num_comments}</span>
                            <span>     {items.points}</span>
                            <span>{new Date(items.createdAt).toUTCString()}</span>
                            </li>
                    )
                })}
           
        </div>
    );
}

export default List
