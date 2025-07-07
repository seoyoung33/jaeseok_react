/* 라우터 설정은 첫번째 JSX파일인 App.jsx에서 이루어진다. */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
/* 이미지연결 */
import './assets/images/jaeseok1.png';
/* 컴포넌트 연결 */
import Header from './components/Header'
import Footer from './components/footer'
import Home from './components/Home'
import Intro from './components/Intro'
import Nick from './components/Nick'

function App() {
  return (
    <div id="wrap">
      <Header />
      {/* 링크주소에 따라 컴포넌트 변경하는 위치는 전체를 브라우저 라우터로 묶고 시작해야 한다. */}
      {/* 브라우저라우터 시작위치 */}
      <main>
        {/* gitHub page로 리액트로 작업한 프로젝트를 배포할때는 gitHub저장소명이 gitHub 특성상 주소에 가장 먼저 표시되기 때문에 라우터 경로시작도 basename 속성을 이용해서 저장소명을 시작값으로 설정해야 한다. */}
        <BrowserRouter basename="jaeseok_react">
          {/* 링크설정 */}
          <nav>
            <Link to="/">유재석</Link> {/* 1. 유재석이라는 글자를 누르면 링크 "/"로 연결해라. */}
            <Link to="/intro">인적사항</Link> {/* 편의성을 위해 소문자로 적어주면 좋음 */}
            <Link to="/nick">별명&특징</Link>
          </nav>
          {/* 라우터설정 */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* 2. 위 링크가 "/"이면 element를 실행해라. */}
            <Route path="/intro" element={<Intro />} /> {/* element 안에는 자바스크립트처럼 {}를 써주고 그 안에 <컴포넌트명 />을 쓰기! */}
            <Route path="/nick" element={<Nick />} />
          </Routes>
        </BrowserRouter>
      </main>
      {/* 브라우저라우터 종료위치 */}
      <Footer />
    </div>
  )
}

export default App