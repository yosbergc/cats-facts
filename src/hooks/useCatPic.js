import { useState, useEffect } from "react";
import { getCatImage } from "../services/catFact";
function useCatPic({ fact }) {
    const [factImageSrc, setFactImageSrc] = useState('')
    useEffect(() => {
        if (fact.length === 0) return;
        const factThreeWords = fact.split(' ', 3).join(' ')
        getCatImage({ factThreeWords })
          .then(data => setFactImageSrc(data))
    }, [fact])

    return { factImageSrc }
}
export { useCatPic }