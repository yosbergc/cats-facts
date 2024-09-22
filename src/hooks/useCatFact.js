import { useEffect, useState } from "react"
import { getCatFact } from '../services/catFact'

function useCatFact() {
    const [fact, setFact] = useState('')
    const factThreeWords = fact.split(' ', 3).join(' ')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getCatFact()
          .then(data => {
            setFact(data.fact)
          })
          .finally(setLoading(false))
          .catch(error => console.log(error))
    }, [])

    return {fact, factThreeWords, loading}
}
export { useCatFact }