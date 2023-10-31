import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getMenuDetails } from '../api/MenuAPI';

function MenuDetails() {

    const {menuCode} = useParams();
    // console.log(menuCode);
    // console.log(useParams());

    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    useEffect(
        () => {
            setMenu(getMenuDetails(menuCode));
        }
        ,[]
    );

    return (
        <>
            <h2>메뉴 상세</h2>
            <h3>메뉴 이름: {menu.menuName}</h3>
            <h3>메뉴 가격: {menu.menuPrice}</h3>
            <h3>메뉴 종류: {menu.categoryName}</h3>
            <h3>메뉴 설명: {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{ maxWidth: 500 }}/>
        </>
    );
}

export default MenuDetails;