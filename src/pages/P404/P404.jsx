import { Link } from "react-router-dom"

const P404 = () => {
  return(
    <div className="content lg:bg-[url(/assets/img/wallpaper-404.png)] bg-[url(/assets/img/wallpaper-404-mobile.png)]">
      <img className="w-auto h-40 lg:h-100 mt-5" src="/assets/img/404.png" />

      <section className="mt-10 text-center mx-5">
        <h1 className="mb-5 text-xl">We can't seem to find the page you're looking for.</h1>
        <Link to="/" className="home-content__link px-10">Return</Link>
      </section>

    </div>
  )
}

export default P404