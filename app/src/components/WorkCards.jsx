

function workCards({ id, title, slug, year, published, role, summary, techniques, poster, posteralt, isSelected, onToggleSelect }) {



    return (




        
                <div className="work-card">

                        <h3 className='work-title'>{title}</h3>
                        <p>{summary}</p>
                        {role} · {year} · {published}


                        {/* One tag for each theme, produced by map(). */}
                        <ul className="workul">
                        {techniques.map((theme) => (
                                <li key={theme}>{theme}</li>
                            ))}

                        </ul>


                        <button type="button" 
                            className={isSelected ? 'work-Card--Select' : 'work-card-Nselect'}
                            onClick={() => onToggleSelect(id)}>

                            {isSelected ? "Seen" : "See More"}
                        </button>


                


                    <div className="photo-card">

                        {/* No artwork, so the card has to cope. */}
                        {poster ? (
                            <img className="film-card__poster" src={poster} alt={posteralt} />
                        ) : (
                            <div className="film-card__poster film-card__poster--missing">
                                No artwork
                            </div>
                        )}
                    </div>
                
            



        </div>




    );

}

export default workCards;