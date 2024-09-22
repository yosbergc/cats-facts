import { useEffect, useState } from "react"
import { getCatFact } from '../services/catFact'

function useCatFact() {
    const [fact, setFact] = useState('')
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

    return {fact, loading}
}
export { useCatFact }