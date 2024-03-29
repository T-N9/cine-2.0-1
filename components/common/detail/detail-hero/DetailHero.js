import Link from "next/link";
import LazyImage from "../../lazy-image/LazyImage";

/* Icons */
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import PeopleIcon from "@mui/icons-material/People";

/* Components */
import Button from "@mui/material/Button";
import DetailTorrent from "../detail-torrent/DetailTorrent";

const DetailHero = ({
  data,
  error,
  loading,
  isSeries,

  title,
  backgroundImage,
  poster,
  releasedYear,
  contentRating,
  genres,
  runtime,
  status,
  tagline,
  overview,
  rating,
  popularity,
  imdbID,

  /* actions */
  open_YTPopUp,
}) => {
  return (
    <>
      <section
        className="detail--hero bg-fixed bg-dark bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="detail--heroWrapper text-white h-full">
          <div className="container pt-8 pb-48 max-w-[90rem] mx-auto px-5 md:px-14">
            <div className="flex mt-8 lg:mt-0 flex-col md:flex-row gap-x-8 gap-y-8 lg:gap-y-0">
              <div className="rounded-md relative h-[14.0625rem] min-h-[225px] min-w-[9.375rem] w-[9.375rem] md:h-[23.4375rem] md:h-p[375px] md:min-w-[15.625rem] md:w-[15.625rem] lg:min-w-[18.75rem] lg:max-h-[450px] lg:h-[28.125rem] lg:w-[18.75rem] overflow-hidden">
                <LazyImage
                  src={poster}
                  alt={`${title}'s poster`}
                  style="w-full object-cover"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-y-8">
                <div className="flex flex-col flex-[6] gap-y-8">
                  <div>
                    <div>
                      <h1 className="text-cfs-5 lg:text-4xl font-heading font-bold mb-2 flex gap-x-4 flex-wrap items-end">
                        <span>{title}</span>
                        <span className="text-cfs-4 lg:text-cfs-5 font-normal">
                          ( {releasedYear} )
                        </span>
                      </h1>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-start lg:justify-start">
                      {contentRating && (
                        <div className="text-[12px] lg:text-cfs-1 border border-solid border-warning text-warning font-bold p-[2px]">
                          <p>{contentRating}</p>
                        </div>
                      )}

                      <p className="">
                        <span className="flex flex-wrap gap-1">
                          {genres?.map((item) => {
                            let type =
                              item.name === "Science Fiction"
                                ? "Sci-fi"
                                : item.name;
                            return (
                              <Link
                                key={item.name}
                                href={`/discover/movies/${type.toLowerCase()}`}
                              >
                                <span className="border border-solid border-light rounded-full text-sm py-[2.5px] px-[5px] cursor-pointer">
                                  {type}
                                </span>
                              </Link>
                            );
                          })}
                        </span>
                      </p>
                      <div>
                        {runtime !== "m" &&
                          runtime !== "undefinedm" &&
                          runtime !== "NaNh NaNm" && (
                            <p className="flex justify-center items-center gap-x-1 text-[0.8rem] lg:text-cfs-1">
                              <AccessTimeSharpIcon className="w-4" />
                              {runtime}
                            </p>
                          )}
                        {status === "In Production" && (
                          <p className="uppercase font-bold text-warning">
                            Coming Soon
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4">
                      <div>
                        {tagline && (
                          <p className="font-bold text-light italic">
                            &ldquo; {tagline} &rdquo;
                          </p>
                        )}
                      </div>
                      <div className="w-fll lg:w-11/12">
                        <h1 className="text-wah text-cfs-3 lg:text-cfs-4 font-bold font-heading mb-1">
                          Overview
                        </h1>
                        <p className="text-sm text-gray">{overview}</p>
                      </div>
                    </div>

                    <div className="flex gap-x-4">
                      <div className="inline-flex gap-y-2">
                        <StarRateRoundedIcon className="w-8" />
                        <p className="text-cfs-2 font-bold  flex justify-center items-center">
                          {rating?.toFixed(1)}
                        </p>
                      </div>

                      <div className="inline-flex gap-y-2">
                        <PeopleIcon className="w-8" />
                        <p className="text-cfs-2 font-bold flex justify-center items-center">
                          {popularity?.toFixed(0)}
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={() => open_YTPopUp()}
                      className="btn-outline"
                    >
                      View Trailer
                    </Button>
                  </div>
                </div>

                {!isSeries && (
                  <div className="flex-[4] lg:self-center">
                    <h1 className="text-gray text-cfs-3 lg:text-cfs-4 font-bold font-heading  mb-1">
                      Download torrent
                    </h1>

                    <DetailTorrent imdbID={imdbID} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {
        loading && (
          <div className="h-[80vh] flex justify-center items-center">
            <CircularProgress/>
          </div>
        )
      } */}
    </>
  );
};

export default DetailHero;
