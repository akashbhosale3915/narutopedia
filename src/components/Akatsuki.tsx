import { akatsukiUrl } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { AkatsukisResponse } from "../types/akatsuki";
import Card from "./Card";
import Loader from "./Loader";

const Akatsuki = () => {
  const { data, loading }: { data: AkatsukisResponse; loading: boolean } =
    useFetch(akatsukiUrl);

  if (loading)
    return (
      <div className='loader'>
        <Loader />
      </div>
    );

  return (
    <div className='main-grid'>
      {data?.akatsuki?.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Akatsuki;
