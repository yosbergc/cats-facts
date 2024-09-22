import { useEffect, useState } from "react"
function App() {
    const [fact, setFact] = useState('')
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
        
    }, [fact])
    return (
        <>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
        </>
    )
}
export { App }