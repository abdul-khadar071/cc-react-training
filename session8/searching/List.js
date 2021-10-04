import React from 'react'


const List = ({stories}) => {
    return (
        <div>
            
                {stories.map(function(items){
                    return(
                        <li>
                            <span> link      :
                                <a href={items.url}>{items.title}</a>
                            </span>
                            <span>    ,author name    :{items.author}</span>
                            <span>   ,no of coments  :{items.num_comments}</span>
                            <span>     ,points     :{items.points}</span>
                            <span> {new Date(items.createdAt).toUTCString()}</span>
                            </li>
                    )
                })}
            
        </div>
    );
}

export default List
