import { useEffect, useState } from "react"
import { useCatFact } from "./hooks/useCatFact"
import './app.css'
function App() {
    const {fact, factThreeWords, loading} = useCatFact()
    const [factImageSrc, setFactImageSrc] = useState('')

    useEffect(() => {
        if (fact.length === 0) return;
        fetch(`https://cataas.com/cat/says/${factThreeWords}`)
          .then(res => res.blob())
          .then(data => {
            const url = URL.createObjectURL(data)
            setFactImageSrc(url)
          })
    }, [fact])
    return (
        <>
            <h1>App de gatitos</h1>
            {loading && <p>Cargando...</p>}
            {fact && <p>{fact}</p>}
            {factImageSrc && <img src={factImageSrc} className="photo"/>}
        </>
    )
}
export { App }