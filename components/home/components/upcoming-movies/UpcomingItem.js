// import Image from "next/image";
import LazyImage from "../../../common/lazy-image/LazyImage";
import Link from "next/link";
import moment from "moment";

const UpcomingItem = ({ id, title, poster_path, overview, release_date }) => {
  const route_type = "movies";

  return (
    <div className="bg-wah rounded-md overflow-hidden cus-box-shadow">
      <div className=" flex h-full">
        <div className="flex-[2] md:flex-2">
          <div className="flex relative w-[100px] md:w-auto h-[180px]">
            <LazyImage
              style="w-[100px] h-full w-full object-cover"
              src={`https://www.themoviedb.org/t/p/w185/${poster_path}`}
              alt={`${title} poster`}
            />
          </div>
        </div>
        <div className="flex-[8] px-3 py-5 flex flex-col justify-between items-start">
          <Link href={`/${route_type}/${id}`}>
            <a>
              <div className="cursor-pointer">
                <h1 className="text-dark inline-block text-[1.2rem] lg:text-xl relative font-heading upcoming-title mb-4">
                  {title}
                </h1>

                <p className="text-primary font-bold font-special">
                  {moment(release_date).format("D MMM, YYYY")}
                </p>
              </div>
            </a>
          </Link>

          <p className="line-clamp-3 overflow-ellipsis text-sm text-dark">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingItem;
