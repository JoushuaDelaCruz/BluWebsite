import React, { useState } from "react";
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaHeart,
} from "react-icons/fa";

const NewsCard = () => {
  const [like, setLike] = useState(false);
  const [likeIsClicked, setLikeIsClicked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);
  const [numComments, setNumComments] = useState(0);

  const liked = () => {
    setLike(!like);
    setLikeIsClicked(true);
    setNumLikes(numLikes + 1);
  };

  const unlike = () => {
    setLike(!like);
    setNumLikes(numLikes - 1);
  };

  return (
    <section className="newsCard-container">
      <h2 className="newsCard-header">A Few Things Before You Read</h2>
      <span className="newsCard-date">July 22, 2022</span>
      <p className="newsCard-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...
      </p>
      <div className="newsCard-buttons-container">
        <div className="newsCard-icon-container">
          {like ? (
            <FaHeart size="1.25rem" className="text-red-600" onClick={unlike} />
          ) : (
            <FaRegHeart size="1.25rem" onClick={liked} />
          )}
          <span className="text-sm"> {numLikes} </span>
        </div>
        <div className="newsCard-icon-container">
          <FaRegComment size="1.25rem" />
          <span> {numComments} </span>
        </div>
        <div className="newsCard-icon-container">
          <FaRegPaperPlane size="1.15rem" />
          <span> Share </span>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
