import './App.css';
import {Routes, Route} from "react-router-dom";
import {ProductAll} from "./pages/ProductAll";
import {Login} from "./pages/Login";
import {Navbar} from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {PrivateRoute} from "./routes/PrivateRoute";
import { Container } from "react-bootstrap";
import {isMobile} from "react-device-detect";

/*TODO:
   1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
    1-1. navigation-bar 만들기
   2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
   3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
   4. 상품 디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인 페이지가 먼저 나온다.
   5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
   6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고, 다시 로그인 페이지로 이동한다.
   7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
   8. 상품을 검색할 수 있다.

*/
function App() {

    const [auth, setAuth] = useState(false);
    return (
        <Container>
            <Navbar auth={auth} setAuth={setAuth} isMobile={isMobile}/>
            <Routes>
                <Route path="/" element={<ProductAll/>}/>
                <Route path="/login" element={<Login setAuth={setAuth} />}  />
                <Route path="/product/:id" element={<PrivateRoute auth={auth}/>} />
            </Routes>

        </Container>
    );
}

export default App;
