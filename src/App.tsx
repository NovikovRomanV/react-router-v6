import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {S} from './components/pages/_styled'
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/price',
} as const

function App() {
    // const stylesNavLinkPage = (isActive: boolean)=> isActive ? styles.activeNavLink : styles.navLink

return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div><NavLink to={PATH.page1} className={({isActive})=>stylesNavLinkPage(isActive)}>adidas</NavLink></div>*/}
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>price</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path='/*' element={<Navigate to={'error404'}/>}/>
                        <Route path="/error404" element={<Error404/>}/>
                        {/*<Route path={PATH.adidasModel} element={<Model/>}/>*/}
                        {/*<Route path={PATH.pumaModel} element={<Model/>}/>*/}
                        <Route path='/:model/:id' element={<Model/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
