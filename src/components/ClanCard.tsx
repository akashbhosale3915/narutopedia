import { Clan } from "../types/clan";

const ClanCard = ({ name }: Clan) => {
  return (
    <div className='clan__card'>
      <h1 className='clan__card__name'>{name}</h1>
      <div className='clan__card__characters'></div>
    </div>
  );
};

export default ClanCard;
