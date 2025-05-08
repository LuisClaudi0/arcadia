const Question = ({question}) => {

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return(
    <section className="question__container">
      <h1 className="question">{decodeHTML(question)}</h1>
    </section>
  )
}

export default Question;