
import Banner from "../components/Banner.jsx"
export default function MoviesPage() {
  const movies = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      overview: 'Un ladro esperto di estrazione di segreti tramite sogni viene incaricato di piantare un\'idea nella mente di un obiettivo.'
    },
    {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      overview: 'La storia della famiglia mafiosa Corleone e del suo patriarca Don Vito, che naviga tra tradimenti e alleanze per proteggere il suo impero.'
    },
    {
      id: 3,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      overview: 'Un uomo ingiustamente incarcerato forma una profonda amicizia con un altro detenuto, mentre cerca di mantenere viva la speranza di fuga.'
    },
    {
      id: 4,
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      overview: 'Batman deve affrontare il folle criminale Joker, che minaccia Gotham City con la sua anarchia e caos.'
    },
    {
      id: 5,
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      overview: 'La storia di un uomo dal cuore semplice che, contro ogni previsione, diventa testimone e protagonista di eventi storici cruciali.'
    },
    {
      id: 6,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      overview: 'Un intreccio di storie che ruotano attorno a gangster, criminali e situazioni al limite della legge, raccontato in modo non lineare.'
    },
    {
      id: 7,
      title: 'The Matrix',
      director: 'The Wachowskis',
      overview: 'Un hacker scopre che la realtà che conosce è una simulazione creata da macchine, e si unisce alla lotta contro il sistema che domina l\'umanità.'
    },
    {
      id: 8,
      title: 'Gladiator',
      director: 'Ridley Scott',
      overview: 'Un generale romano tradito diventa un gladiatore per vendicare la morte della sua famiglia e sfidare l\'imperatore corrotto.'
    },
    {
      id: 9,
      title: 'Schindler\'s List',
      director: 'Steven Spielberg',
      overview: 'La storia vera di Oskar Schindler, un imprenditore che salvò la vita a più di mille ebrei durante l\'Olocausto.'
    },
    {
      id: 10,
      title: 'The Lion King',
      director: 'Roger Allers, Rob Minkoff',
      overview: 'La storia di Simba, un giovane leone destinato a diventare re, ma che deve affrontare la perdita, il tradimento e il ritorno del suo destino.'
    }
  ];

  return (
    <>
      <Banner title={'Movies'} subTitle={'The nerdest book community'} leadtext={'lorem lorem loremo lorem lorem lorem lorem lorem lorem'} />

      <section className="py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">

          </div>
        </div>
      </section>
    </>
  )
}