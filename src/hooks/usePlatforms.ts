import platforms from "../data/platforms";
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

const usePlatforms = () => {
  return { data: platforms.results, error: null };
};

export default usePlatforms;
