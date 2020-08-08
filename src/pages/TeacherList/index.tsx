import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from './../../assets/images/icons/back.svg'

function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={ backIcon } alt="Voltar"/>
                    </Link>
                </div>
                <div className="header-container">
                    <strong>Estes são os proffys disponíveis.</strong>
                </div>
            </header>
        </div>
    )
}

export default TeacherList