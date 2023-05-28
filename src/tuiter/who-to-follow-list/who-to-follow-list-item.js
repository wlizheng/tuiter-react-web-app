import React from "react";

const WhoToFollowListItem = (
    {
      who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.jpg'}
    }
) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-3">
            <img className="rounded-circle" height={48}
                 src={`/image/${who.avatarIcon}`}/>
          </div>
          <div className="col-7">
            <div className="fw-bold">{who.userName}</div>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary rounded-pill float-end">Follow
            </button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;