import { useState } from "react";

export default function FormReview({ movie_id }) {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [vote, setVote] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [success, setSuccess] = useState(null)


    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }



    function HandleFormSubmit(e) {
        e.preventDefault()




        if (name.length < 2 || vote == 0 || text.length < 5) {
            setErrorMessage('Please fill all fileds in the form')

        } else {
            setErrorMessage(null)

            const formData = {
                name,
                vote,
                text
            }




            // make an ajax request to the book id enpoing
            const base_movie_api_url = `http://localhost:3009/api/movies/${movie_id}/review`

            fetch(base_movie_api_url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.success) {
                        setSuccess('Thanks for your review')


                        setTimeout(HandleFormToggle, 1000)


                        setTimeout(() => setSuccess(null), 3000)


                    }

                }).finally(() => {
                    console.log(success);

                })
                .catch(err => console.log(err))

        }


        setName('')
        setText('')
        setVote(0)

    }



    return (

        <div className="container">

            {success && <div>{success}</div>}
            <button onClick={HandleFormToggle} className="btn btn-dark mb-2" >Write a review</button>


            <div id="form-card" className="card mb-4 d-none">
                <div className="card-body">

                    <h3>Leave your review</h3>

                    <form onSubmit={HandleFormSubmit}>

                        {/* input username */}
                        <div className="mb-3">
                            <label htmlFor="username">User name</label>
                            <input name="name" id="name" type="text" className="form-control" placeholder="mario" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        {/* rating stars */}
                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? '-fill' : ''} `} onClick={() => setVote(n)}></i>)}
                        </div>

                        {/* textarea review */}
                        <div className="mb-3">
                            <label htmlFor="review">Your review</label>
                            <textarea className="form-control" name="review" id="review" placeholder="leave your review here " value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send</button>
                            {errorMessage && <span className="text-danger"> <i className="bi bi-x"></i> {errorMessage}</span>}
                        </div>

                    </form>



                </div>
            </div>
        </div>
    )

}