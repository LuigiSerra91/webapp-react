import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import ReviewCard from "../components/ReviewCard"


export default function SingleMovie() {
    const { id } = useParams()

    const movieReviews = [
        {
            id: 1,
            username: "Federico",
            date: "2023-11-15T12:00:00.000Z",
            review: "Un film sorprendente che mi ha tenuto con il fiato sospeso fino alla fine.",
            vote: 5
        },
        {
            id: 2,
            username: "Manuel",
            date: "2023-11-16T14:00:00.000Z",
            review: "Un capolavoro! La trama, i personaggi e la regia sono eccezionali.",
            vote: 5
        },
        {
            id: 3,
            username: "Giorgia",
            date: "2023-11-17T16:00:00.000Z",
            review: "Mi aspettavo di più, ma la performance degli attori è stata comunque notevole.",
            vote: 3
        },
        {
            id: 4,
            username: "Luca",
            date: "2023-11-18T10:00:00.000Z",
            review: "Un film che ti fa riflettere sulla natura umana e sul caos della società.",
            vote: 4
        },
        {
            id: 5,
            username: "Sofia",
            date: "2023-11-19T09:30:00.000Z",
            review: "La colonna sonora è fantastica, ma la trama mi è sembrata un po' prevedibile.",
            vote: 3
        },
        {
            id: 6,
            username: "Marco",
            date: "2023-11-20T11:15:00.000Z",
            review: "Un'esperienza visiva incredibile, ma la storia non mi ha emozionato abbastanza.",
            vote: 4
        },
        {
            id: 7,
            username: "Alessandra",
            date: "2023-11-21T13:00:00.000Z",
            review: "Perfetto in ogni aspetto, uno dei migliori film che abbia mai visto!",
            vote: 5
        },
        {
            id: 8,
            username: "Giovanni",
            date: "2023-11-22T08:45:00.000Z",
            review: "Un film emozionante con una trama intensa che ti fa riflettere sulla vita.",
            vote: 4
        },
        {
            id: 9,
            username: "Elena",
            date: "2023-11-23T18:30:00.000Z",
            review: "Un po' lungo, ma con una trama coinvolgente e interpretazioni straordinarie.",
            vote: 4
        },
        {
            id: 10,
            username: "Simone",
            date: "2023-11-24T15:00:00.000Z",
            review: "Mi aspettavo di più da un film così famoso, ma è comunque un buon intrattenimento.",
            vote: 3
        }
    ];


    return (

        <>


            <Banner title="movie Title" subtitle="By Author name" leadtext="lorem ipsum dolor" />

            <section className="reviews">
                <div className="container">
                    {/* All reviews here */}

                    {movieReviews.map((review) => <ReviewCard key={review.id} review={review} />)}


                </div>
            </section>



        </>

    )
}