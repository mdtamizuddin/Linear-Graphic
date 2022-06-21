import React, { useState } from 'react'

const useImage = () => {
    const [image , setImage] = useState([])

    return[image , setImage]
}

export default useImage