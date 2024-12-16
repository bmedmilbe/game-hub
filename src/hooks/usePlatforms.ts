import platforms from "../data/platforms";
import useData from "./useData";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return { data: platforms.results, error: null };
};

export default usePlatforms;
