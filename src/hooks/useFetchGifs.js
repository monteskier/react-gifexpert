import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        setImages(await getGifs(category));
        setIsLoading(false);
    }

    useEffect( ()=>{
        getImages();
    },[ ] );
    
    return {
        images,
        isLoading
    }
}
