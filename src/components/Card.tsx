import { Character } from "../types/character";
import notAvailable from "../assets/not-available.jpeg";

const Card = (data: Character) => {
  const { images, name, personal } = data;
  return (
    <div className='anime__card'>
      <div className='anime__card__image'>
        <img src={images[0] || notAvailable} alt='anime-character' />
      </div>
      <div className='anime__card__details'>
        <h1>
          <span>Name</span> : {name}
        </h1>
        <h2>
          <span>Clan</span> : {personal?.clan || "N/A"}
        </h2>
        <h3>
          Classification : <span>{!personal?.classification && "N/A"}</span>
          <br />
        </h3>
        <ul className='classification'>
          {Array.isArray(personal?.classification) ? (
            personal.classification.map((classification) => (
              <li key={classification}>{classification}</li>
            ))
          ) : personal?.classification ? (
            <li>{personal?.classification}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Card;
