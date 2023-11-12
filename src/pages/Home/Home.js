import React from 'react'
import "./home.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

export default function Home() {
    return (
        <section className='container-fluid'>
            <div className='row parentalRowHOME'>
                <Header />
                <Sidebar />
            </div>
        </section>
    )
}
