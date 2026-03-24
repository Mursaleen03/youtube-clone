import { VideoCard } from "@/components/VideoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function VideoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null as any);
  const [isLoading, setIsLoading] = useState(true);
  const [recommendedVideo, setRecommendedVideo] = useState([]);
  const id = searchParams.get("id");

  useEffect(() => {
    axios.get("http://localhost:3000/api/videos/" + id).then((response) => {
      setVideoDetails(response.data);
      setIsLoading(false);
    });
  }, [id]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/videos").then((response) => {
      setRecommendedVideo(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: "flex", padding: 50 }}>
      <div>
        <video src={videoDetails.videoUrl}></video>
        <br />
        <div>{videoDetails.title}</div>
        <div>{videoDetails.user.channelName}</div>
        <img src={videoDetails.user.profilePicture} alt="Profile Picture" />
      </div>
      <div>
        {recommendedVideo.map((video) => (
          <VideoCard
            key={video.id}
            // href={`/watch?id=${video.id}`}
            imageUrl={video.thumbnail}
            title={video.title}
            channelImage={video.user.profilePicture}
            channelName={video.user.channelName}
          />
        ))}
      </div>
    </div>
  );
}
