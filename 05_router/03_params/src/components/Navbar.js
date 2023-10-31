import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'blue',
        color: 'white'
    };

    return (
        <div>
            <ul>
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle: undefined}>HOME</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined}>LOGIN</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>MY PAGE</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive? activeStyle: undefined}>ABOUT</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle: undefined}>MENU LIST</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;