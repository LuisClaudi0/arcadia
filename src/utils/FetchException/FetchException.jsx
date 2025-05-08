const FetchException = ({loading, error}) => {
  return(
    <div>
      {loading && <p className="error-message">Loading...</p>}
      {error && <div className="flex flex-col items-center">
          <p className="error-message">Error loading data: {error.message}</p>
          <img className="w-2/5 xl:w-1/7" src="/assets/img/controle-2.webp" />
        </div>}
    </div>
  )
}

export default FetchException