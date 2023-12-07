import { clansUrl } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { ClansResponse } from "../types/clan";
import ClanCard from "./ClanCard";

const Clans = () => {
  const { data, loading }: { data: ClansResponse; loading: boolean } =
    useFetch(clansUrl);

  return (
    <div>
      {loading && <div className='loader'>Loading...</div>}
      {data?.clans?.map((clan) => (
        <ClanCard {...clan} key={clan.id} />
      ))}
    </div>
  );
};

export default Clans;
