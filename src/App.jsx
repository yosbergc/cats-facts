import { useCatFact } from "./hooks/useCatFact"
import { useCatPic } from "./hooks/useCatPic"
import './app.css'
function App() {
    const {fact, loading} = useCatFact()
    const { factImageSrc } = useCatPic({ fact })
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