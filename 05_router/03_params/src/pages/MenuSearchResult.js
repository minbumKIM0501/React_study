import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import boxStyle from './Menu.module.css';
import {searchMenu} from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';

function MenuSearchResult() {
    const [searchParam] = useSearchParams();
    // console.log(searchParam.get('menuName'));
    const searchMenuName = searchParam.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));
        },
        []
    );

    return (
        <>  
            <h1>'{searchMenuName}' 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                { menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>) }
            </div>
        </>
    );
}

export default MenuSearchResult;