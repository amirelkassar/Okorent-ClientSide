import React from "react";
import ReviewsListProfileAdmin from "./reviewsListProfileAdmin";
import ReviewsListProfileGuest from "./reviewsListProfileGuest";

function ReviewsProfile({
  editAdmin = false,
  userName = "User",
  userID = "",
}: {
  editAdmin?: boolean;
  userName?: string;
  userID: string;
}) {


  return (
    <div className=" mt-10 relative">
      <h2 className="text-2xl  lg:text-3xl mb-7">
        Customer Reviews about <span className="font-Bold">{userName}</span>
      </h2>
      {editAdmin ? (
        <ReviewsListProfileAdmin userID={userID} />
      ) : (
        <ReviewsListProfileGuest userID={userID} />
      )}
    </div>
  );
}

export default ReviewsProfile;
