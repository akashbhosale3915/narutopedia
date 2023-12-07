import { tailedBeastsUrl } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { TailedBeastsResponse } from "../types/tailed-beasts";
import Card from "./Card";
import Loader from "./Loader";

const TailedBeasts = () => {
  const { data, loading }: { data: TailedBeastsResponse; loading: boolean } =
    useFetch(tailedBeastsUrl);

  if (loading)
    return (
      <div className='loader'>
        <Loader />
      </div>
    );

  return (
    <div className='main-grid'>
      {data?.["tailed-beasts"]?.map((tailedBeast) => (
        <Card key={tailedBeast.id} {...tailedBeast} />
      ))}
    </div>
  );
};

export default TailedBeasts;
