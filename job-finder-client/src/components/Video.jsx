import { useState, useEffect, useRef } from "react";
import { LuLoader } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const Video = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleVideoLoad = () => {
      setIsLoading(false);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleVideoLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleVideoLoad);
      }
    };
  }, [src]);

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center h-36">
          <LuLoader className="animate-spin" fontSize="2rem" />
        </div>
      )}
      <iframe
        ref={iframeRef}
        className={`w-full rounded-lg ${isLoading ? "hidden" : ""}`}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
