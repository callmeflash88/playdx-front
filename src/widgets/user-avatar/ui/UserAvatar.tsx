import React from "react";

const UserAvatar = () => {
  return (
    <div className="flex items-center">
      <button className="ml-4 p-2 rounded-full bg-gray-200">
        <span className="sr-only">Profile</span>
        <div className="h-8 w-8 rounded-full bg-gray-400"></div>
      </button>
    </div>
  );
};

export default UserAvatar;
