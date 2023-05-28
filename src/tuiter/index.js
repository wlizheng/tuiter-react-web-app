import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list/ index";
import TuitSummaryList from "./tuit-summary-list";

function Tuiter() {
  return (
      <div>
        <Nav/>
        <div className="row">
          <div className="col-2">
            <NavigationSidebar/>
          </div>
          <div className="col-lg-7 col-9">
            <Routes>
              <Route path="/home" element={<HomeScreen/>}/>
              <Route path="/explore" element={<ExploreScreen/>}/>
              <Route path="/bookmarks" element={<BookmarksScreen/>}/>
              <Route path="/profile" element={<ProfileScreen/>}/>
            </Routes>
            {/*<TuitSummaryList/>*/}
          </div>
          <div className="d-none d-lg-block col-3">
            <WhoToFollowList/>
          </div>
        </div>
      </div>
  );
}

export default Tuiter;