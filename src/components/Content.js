import {Route, Routes} from "react-router";
import MyPage1 from "../pages/MyPage1";
import MyPage2 from "../pages/MyPage2";

const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route path='' element={<MyPage1 />} />
                <Route path='/myinfo' element={<MyPage2 />} />
            </Routes>
        </div>
    );
}

export default Content;