// Funzione AppStars che restituisce una serie di stelle in base al voto passato come argomento
export default function AppStars(vote) {

    // Calcola un valore da 1 a 5 (arrotondato per eccesso) in base al voto dato.
    // Il voto viene moltiplicato per 0.5 e poi arrotondato per ottenere un valore fra 1 e 5
    const oneToFive = Math.ceil(vote * 0.5)

    // Crea un array che conterrà gli elementi delle stelle
    const stars = []

    // Ciclo che crea 5 stelle, una per ogni valore da 1 a 5
    for (let i = 1; i <= 5; i++) {
        // Se l'indice della stella è minore o uguale al numero calcolato, aggiungi una stella piena
        if (i <= oneToFive) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
        } else {
            // Se l'indice è maggiore del numero calcolato, aggiungi una stella vuota
            stars.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
        }
    }

    // Restituisce l'array di stelle
    return stars
}
