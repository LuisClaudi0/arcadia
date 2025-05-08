import useFetch from "../../hooks/useGetData";

const Cards = () => {
  
  const { data } = useFetch('/assets/cards.json')
  let cardsList = data?.cards || [];

  return(
    <div className="flex flex-col lg:flex-row lg:gap-20 justify-center">
      {cardsList.map((card, index) => (
        <div key={index} className="card-container">
          <section>
            <img src={card.img} className="w-auto h-40" />
          </section>

          <section className="flex flex-col gap-1">
            <h1 className="font-bold mx-1">{card.text}</h1>
            <h3 className="text-sm">{card.char}</h3>
          </section>
        </div>
      ))}
    </div>
  )
}

export default Cards