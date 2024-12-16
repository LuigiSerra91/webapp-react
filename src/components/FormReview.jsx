// Importa l'hook useState per la gestione dello stato
import { useState } from "react";

// Componente per il modulo di recensione
export default function FormReview({ movie_id, addReview }) {
    // Stati per memorizzare i valori dei campi del modulo e i messaggi di errore/successo
    const [name, setName] = useState('');  // Nome dell'utente
    const [text, setText] = useState('');  // Testo della recensione
    const [vote, setVote] = useState(0);  // Voto (da 1 a 5)
    const [errorMessage, setErrorMessage] = useState(null);  // Messaggio di errore
    const [success, setSuccess] = useState(null);  // Messaggio di successo

    // Funzione per mostrare/nascondere il modulo quando si clicca il bottone
    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none');  // Aggiungi o rimuovi la classe 'd-none' per mostrare/nascondere il modulo
    }

    // Funzione per gestire l'invio del modulo
    function HandleFormSubmit(e) {
        e.preventDefault();  // Impedisce il comportamento di default del modulo (invio della pagina)

        // Verifica se i campi obbligatori sono compilati correttamente
        if (name.length < 2 || vote === 0 || text.length < 5) {
            setErrorMessage('Please fill all fields in the form');  // Mostra un messaggio di errore se i campi non sono validi
        } else {
            setErrorMessage(null);  // Resetta il messaggio di errore se tutto è valido

            // Crea un oggetto con i dati del modulo
            const formData = {
                name,
                vote,
                text,
            };

            // URL dell'API per inviare la recensione per il film specificato
            const base_movie_api_url = `http://localhost:3009/api/movies/${movie_id}/review`;

            // Esegui la richiesta POST per inviare i dati del modulo al server
            fetch(base_movie_api_url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())  // Converte la risposta in formato JSON
                .then((data) => {
                    if (data.success) {  // Se la recensione è stata inviata con successo
                        setSuccess('Thanks for your review');  // Mostra il messaggio di successo

                        // Aggiungi la recensione appena inviata alla lista delle recensioni
                        addReview({ ...formData, id: data.id });  // Usa l'ID restituito dal server per aggiungere la recensione alla lista

                        // Nascondi il modulo dopo un secondo
                        setTimeout(HandleFormToggle, 1000);
                        // Resetta il messaggio di successo dopo 3 secondi
                        setTimeout(() => setSuccess(null), 3000);
                    }
                })
                .catch((err) => console.log(err));  // Gestisce gli errori nella fetch

        }

        // Resetta i valori dei campi del modulo dopo l'invio
        setName('');
        setVote(0);
        setText('');
    }

    return (
        <div className="container">
            {/* Mostra il messaggio di successo se presente */}
            {success && <div>{success}</div>}

            {/* Bottone per mostrare o nascondere il modulo */}
            <button onClick={HandleFormToggle} className="btn btn-dark mb-2">
                Write a review
            </button>

            {/* Modulo di recensione che inizialmente è nascosto */}
            <div id="form-card" className="card mb-4 d-none">
                <div className="card-body">
                    <h3>Leave your review</h3>

                    <form onSubmit={HandleFormSubmit}>
                        {/* Campo per il nome dell'utente */}
                        <div className="mb-3">
                            <label htmlFor="username">User name</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Luigi"
                                value={name}
                                onChange={(e) => setName(e.target.value)}  // Aggiorna il valore del nome
                                required
                            />
                        </div>

                        {/* Sezione per il voto (stelle) */}
                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <i
                                    key={n}
                                    className={`bi bi-star${n <= vote ? '-fill' : ''}`}  // Aggiungi "fill" per le stelle selezionate
                                    onClick={() => setVote(n)}  // Aggiorna il voto quando una stella viene cliccata
                                ></i>
                            ))}
                        </div>

                        {/* Campo per il testo della recensione */}
                        <div className="mb-3">
                            <label htmlFor="review">Your review</label>
                            <textarea
                                className="form-control"
                                name="review"
                                id="review"
                                placeholder="leave your review here"
                                value={text}
                                onChange={(e) => setText(e.target.value)}  // Aggiorna il valore del testo
                                required
                            ></textarea>
                        </div>

                        {/* Sezione per il bottone di invio e il messaggio di errore */}
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">
                                Send
                            </button>
                            {errorMessage && (
                                <span className="text-danger">
                                    {" "}
                                    <i className="bi bi-x"></i> {errorMessage}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
