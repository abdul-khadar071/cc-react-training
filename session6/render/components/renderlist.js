import React from 'react'

const Renderlist = () => {
    const colours=['blue','green','red','orange','yellow','black'];
    return (<center>
        <div>
            <h1> List Component that renders a list of items from an array. The list could be any list of your choice.
</h1> <h2>
      {
        colours.map((colour)=>{
          return (<ol style={{color:'red',textAlign:'center',fontWeight:'bold' }}>{colour}</ol>)
        })
      }</h2>
        </div>
        </center>
    )
}

export default Renderlist
