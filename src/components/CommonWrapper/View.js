import React, { Component } from 'react'
import logo from '../../statics/imgs/logo.png'
import man from '../../statics/imgs/man.png'
import Footer from './components/Footer'
import './style.css'

export default class CommonWrapper extends Component {
	render() {
		return (
			<div className="common">
				<header className="main-header">
          <img src={logo} className="main-logo" alt="logo" />
          <h1 className="main-title">Scholar 博客</h1>
          <img src={man} className="main-man" alt="man" />
	        <ul className="nav navbar-top-links pull-right">
	          <li className="nav-info">{'网站首页'}</li>
	         	<li className="nav-info">{'新资讯'}</li>
	          <li className="nav-info">{'黑科技'}</li>
	          <li className="nav-info">{'探讨区'}</li>
	         	<li className="nav-info">{'关于我'}</li>
	        </ul>
        </header>
        <Footer/>
			</div>
		)
	}
}
