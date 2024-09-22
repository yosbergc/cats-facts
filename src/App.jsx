import { useEffect, useState } from "react"
function App() {
    const [fact, setFact] = useState('')
    const factThreeWords = fact.split(' ', 3).join(' ')
    const [factImageSrc, setFactImageSrc] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://catfact.ninja/fact')
          .then(res => {
            if (!res.ok) {
                throw new Error('Hubo un error con la solicitud')
            }
            return res.json()
          })
          .then(data => setFact(data.fact))
          .catch(error => {
            console.log(error)
          })
          .finally(() => setLoading(false))
    }, [])

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
            {factImageSrc && <img src={factImageSrc} />}
        </>
    )
}
export { App }