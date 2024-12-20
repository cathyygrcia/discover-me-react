import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export function ArtistInfo() {
  const location = useLocation();
  const { artist } = location.state || {};

  if (!artist) {
    return <p>No artist data available.</p>;
  }

  return (
    <>
      <Navbar
        text={
          <Link to="/" className="text-white font-reggae">
            Discover Me
          </Link>
        }
        section="Artist Info"
      />
      <div className="flex justify-center flex-col items-center mt-12">
        <h1 className="text-white font-reggae text-3xl mb-10">{artist.name}</h1>
        <div className="w-5/12 ">
          <img
            src={artist.images[0].url}
            alt={artist.name}
            className="h-full w-full rounded-lg-3xl"
          />
          <div className="text-white text-center text-3xl mt-8">
            <p className="font-reggae">
              Genre: {artist.classifications[0].genre.name}
            </p>
          </div>
          <div className="sm:flex flex-row justify-around mt-4 w-full">
            <div className="flex justify-center items-center mb-3 p-6 rounded-lg  bg-white bg-opacity-25 w-full sm:w-2/5 lg:w-2/5">
              <a
                href={artist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-center text-white"
              >
                Upcoming Events
              </a>
            </div>

            {artist.externalLinks?.musicbrainz?.[0]?.id ? (
              <div className="flex justify-center items-center mb-3 p-6 rounded-lg  bg-white bg-opacity-25 w-full sm:w-2/5 lg:w-2/5">
                <a
                  href={`https://listenbrainz.org/artist/${artist.externalLinks.musicbrainz[0].id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Discover
                </a>
              </div>
            ) : (
              <div className="flex justify-center items-center mb-3 p-6  w-full sm:w-2/5 lg:w-2/5 sm:block hidden"></div>
            )}
          </div>
          <div className="sm:flex flex-row justify-around mt-4 w-full ">
            {artist.externalLinks?.youtube?.[0]?.url ? (
              <div className="flex justify-center items-center mb-3 p-6 rounded-lg   bg-white bg-opacity-25 w-full sm:w-2/5 lg:w-2/5">
                <a
                  href={artist.externalLinks?.youtube?.[0]?.url}
                  target="_blank"
                  className="text-white"
                >
                  YouTube
                </a>
              </div>
            ) : (
              <div className="flex justify-center items-center mb-3 p-6  w-full sm:w-2/5 lg:w-2/5 sm:block hidden"></div>
            )}
            <div className="flex justify-center items-center mb-3 p-6  w-full sm:w-2/5 lg:w-2/5 sm:block hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
}
