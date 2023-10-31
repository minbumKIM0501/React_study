import {NavLink} from 'react-router-dom';

function Main() {
    return (
        <div>
            <h1>메인 페이지</h1>
            <nav>
                {/* 
                    <a href="/">HOME</a>
                    <a href="/about">소개</a>
                    <a href="/menu">메뉴목록</a> 
                */}
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">소개</NavLink>
                <NavLink to="/menu">메뉴목록</NavLink>
            </nav>
        </div>
    );
}

export default Main;