import { useState } from "react";

export default function FormReview({ movie_id }) {
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [errorsMessage, setErrorsMessage] = useState(null);
    const [success, setSuccess] = useState(null)

    function HandleFormToggle() {
        document.getElementById("form-card").classList.toggle("d-none")
    }

    function HandleFormSubmit(e) {
        if (username.length < 2 || review.lenght < 5 || rating == 0) {
            setErrorsMessage(`Please fill out the form completely.`);

        } else {
            setErrorsMessage(null)
            const formdata = {
                name,
                vote,
                text
            }
        }
    }


    const movie_api_url = `http://localhost:3001/api/books/${movie_id}/review`
    fetch(movie_api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
    })
        .then(response => response.json())
        .then(data => console.log('Success:', data))


        .catch(error => console.error('Error:', error));


}