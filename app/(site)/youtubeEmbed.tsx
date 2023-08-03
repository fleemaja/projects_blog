import React from "react";

type YouTubeEmbedProps = {
  id: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ id }) => (
    <div className="youtube-player mt-8 mb-8 justify-center flex">
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

export default YouTubeEmbed;