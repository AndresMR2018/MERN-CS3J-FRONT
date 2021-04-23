import React from 'react';
import {API} from '../config';

const ShowImage = ({item, url})=> {

    return(
        
        <div>
        <img 
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.nombre}
        className="mb-3 img-cont"
        style={{maxHeight:"500px", maxWidth:"200px"}}
        />
                </div>
    
)

   
}

export default ShowImage;