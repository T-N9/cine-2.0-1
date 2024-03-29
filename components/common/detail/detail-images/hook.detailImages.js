import useSWR from "swr";
// import Image from "next/image";
import LazyImage from "../../lazy-image/LazyImage";

/* constants */
import { API_KEY } from "../../../../constants/common";

const Hook = (media_type, id) => {
  let url = `https://api.themoviedb.org/3/${media_type}/${id}/images?api_key=${API_KEY}`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  let backdrops,
    backdropsList,
    view_more = true;
  if (data) {
    if (data?.backdrops.length >= 5) {
      backdrops = data?.backdrops?.slice(0, 5);
    } else {
      backdrops = data?.backdrops;
      view_more = false;
    }

    backdropsList = backdrops.map((item, index) => {
      return (
        <div key={index} className="relative h-[200px] min-w-[350px]">
          <LazyImage
            src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
            alt="backdrops"
            style="w-full object-cover"
          />
        </div>
      );
    });
  } else {
    backdrops = [];
    backdropsList = null;
    view_more = false;
  }

  return {
    data,
    error,
    backdropsList,
    view_more,
  };
};

export default Hook;
