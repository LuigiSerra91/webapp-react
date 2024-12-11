export default function Footer() {
    return (
        <footer className="bg-black py-5 text-white">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">

                    <div className="col">
                        <h3>Movies</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cumque veniam exercitationem, dignissimos nihil inventore tenetur!
                        </p>

                        <div className="social d-flex">
                            <i className="m-2 bi bi-facebook"></i>
                            <i className="m-2 bi bi-twitter"></i>
                            <i className="m-2 bi bi-instagram"></i>
                        </div>

                    </div>

                    <div className="col">
                        <h4>Menu</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Link 1</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                        </ul>

                    </div>

                    <div className="col">
                        <h4>Legal stuff</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Link 1</a></li>
                            <li><a href="#" className="text-white">Link 2</a></li>
                        </ul>

                    </div>
                </div>
            </div>

        </footer>
    )
}