export async function getCatFact() {
    try {
        const res = await fetch('https://catfact.ninja/fact')
        if (!res.ok) {
            throw new Error('Hubo un error con la solicitud')
        }
        const data = await res.json()
        return data;
    } catch (error) {
        throw error;
    }
}
export async function getCatImage({ factThreeWords }) {
    return fetch(`https://cataas.com/cat/says/${factThreeWords}`)
    .then(res => res.blob())
    .then(data => {
      const url = URL.createObjectURL(data)
      return url;
    })
}