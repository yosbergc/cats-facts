import { useState, useEffect } from "react";

function useCatPic({ fact }) {
    const [factImageSrc, setFactImageSrc] = useState('')
    
    useEffect(() => {
        if (fact.length === 0) return;
        const factThreeWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${factThreeWords}`)
          .then(res => res.blob())
          .then(data => {
            const url = URL.createObjectURL(data)
            setFactImageSrc(url)
          })
    }, [fact])

    return { factImageSrc }
}
export { useCatPic }