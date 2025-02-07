import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

type Post = {
  id: number;
  content: string;
  imageLink: string;
  videoLink: string;
};

type PostProps = {
  post: Post;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="border border-red-500 h-auto mb-5 w-[40vw] rounded-xl p-6 relative">
      {/* User Profile */}
      <div className="flex items-center justify-between mb-4 pr-4">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/11/48/01/1148010bc6df885075a558384b3dbc6b.jpg"
            className="rounded-full me-3"
            width={50}
            alt=""
          />
          <div>
            <div className="font-semibold">User</div>
            <div className="text-xs">2 mins ago</div>
          </div>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="p-2">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 w-40 bg-black border border-gray-300 shadow-md rounded-md z-10">
              <button className="block w-full text-left px-4 py-2 hover:bg-red-400">Edit</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-red-400">Delete</button>
            </div>
          )}
        </div>
      </div>

      {/* Contents */}
      <div className="w-full flex justify-center mb-7">
        {post.content?.trim() && (
          <div className="w-full">
            <div>{post.content}</div>
          </div>
        )}

        {post.imageLink && (
          <div>
            <img src={post.imageLink} alt="Post image" className="rounded-xl" />
          </div>
        )}
        {post.videoLink && <video src={post.videoLink} controls />}
      </div>

      {/* Buttons */}
      <div className="flex text-sm w-full">
        <button className="reaction-button">Fire</button>
        <button className="reaction-button w-[9vw]">Comment</button>
        <button className="reaction-button w-[7vw]">Share</button>
      </div>
    </div>
  );
};

export default Post;
