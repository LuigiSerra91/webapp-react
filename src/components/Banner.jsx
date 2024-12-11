export default function Banner({ title, subTitle, leadtext }) {
    return (
        <div className="banner bg-black text-white py-4 mb-5">
            <div className="container-lg">
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
                <p className="lead">
                    {leadtext}
                </p>

            </div>
        </div>
    )
}