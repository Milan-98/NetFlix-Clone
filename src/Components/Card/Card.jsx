import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ image_src, image_alt, id }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  });

  return loading ? (
    <div className="relative mx-[.22rem] h-[9.7rem] w-[6.6rem] animate-pulse space-y-5  overflow-hidden rounded-md bg-gray-800 bg-gradient-to-r  from-transparent via-gray-600 to-transparent pb-2 shadow-xl  shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent md:w-[16rem]">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton duration={2} />
        </p>
      </SkeletonTheme>
    </div>
  ) : (
    <Link to={`/movie/${id}`}>
      <div className="mx-[.22rem]  w-[6.6rem] md:w-[16rem]">
        <img
          className='"> h-[9.7rem] rounded-md  md:rounded-sm'
          src={image_src}
          alt={image_alt}
        />
      </div>
    </Link>
  );
};

export default Card;
