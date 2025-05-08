import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";

const HomeContent = () => {
  return(
    <div className="content">
      <section className="home-content__title">
        <img src="/assets/img/controle.webp" alt="Controle" className="xl:h-30 h-20 w-auto xl:hover:animate-spin" />
        
        <div className="flex flex-col gap-2 items-center underline">
          <h1 className="title">Welcome to</h1>
          <h1 className="title">Arcadia Quiz!</h1>
        </div>
      </section>

      <section className="home-content__text">
        <h1 className="w-5/6 text-base xl:w-1/2 xl:text-2xl">Here, each question is a phase, each correct answer is an XP gained and each error… well, it's just a respawn towards success!
        Test your knowledge, challenge your friends and show that you are the real boss of the games!</h1>
      </section>

      <Link to="/quiz" className="home-content__link">Let's play?</Link>

      <Cards />

    </div>
  )
}

export default HomeContent;