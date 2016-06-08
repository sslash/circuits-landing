/*
* HomePage
*
* This is the first thing users see of our App, at the '/' route
*
* NOTE: while this component should technically be a stateless functional
* component (SFC), hot reloading does not currently support SFCs. If hot
* reloading is not a neccessity for you then you can refactor it and remove
* the linting exception.
*/

import React from 'react';
import BackgroundImage from './BackgroundImage';
import Stl from './home.css';
import cn from 'classnames';
import Modal from 'boron/ScaleModal';
import req from 'axios';
import '../../containers/App/styles.css';

// const source = 'https://static.pexels.com/photos/39688/training-train-lime-barbell-39688-large.jpeg';
const source ='http://s33.postimg.org/6yyfpsl7z/image.jpg'; // TODO: put this image somewhere
const baseUrl = '/api/signup';

var modalStyle = {};



/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

    state = { windowWidth: window.innerWidth };

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleClick = () => {
        this.refs.modal.show();
    }
    handleClose = () => {
        this.refs.modal.hide();
    }

    onSubmit = (e) => {
        e.preventDefault();
        req.post(baseUrl, {
            email: this._input.value
        });

        this.handleClose();
    }

    renderModal = () => {
        if (this.state.windowWidth < 992) {
            modalStyle.width = '85%';
        } else {
            delete modalStyle.width;
        }

        return (
            <Modal
                ref="modal"
                keyboard
                modalStyle={modalStyle}
                >
                <div className={Stl.modalInner}>
                    <button className={Stl.modalExit} onClick={this.handleClose}>
                        <img src={require('./imgs/exit@3x.png')} className={Stl.modalExitImg} />
                    </button>
                    <p>Sign up for our newsletter!</p>
                        <form onSubmit={this.onSubmit}>
                            <input ref={ref => this._input = ref} className={Stl.input} placeholder="Email" type="email" />
                            <input type="submit" role="button" className={cn([Stl.btn, Stl.inputButton])} value="Sign up" />
                        </form>
                    </div>
            </Modal>
        );
    }

    render() {
        const localImage = '';

        return (
            <BackgroundImage src={source} placeholder={localImage} className={Stl.bg}>
                {this.renderModal()}
                <div className={Stl.overlay} />
                <div className={Stl.content}>
                    <div className={cn(Stl.footer, Stl.flex, Stl.column, Stl.fullHR)}>
                        <div className={cn(Stl.flex, Stl['justify-space-between'], Stl['align-items-center'])}>
                            <img src={require('./imgs/icon@3x.png')} style={{width:50, height: 50, margin: 20}} />
                            <div style={{marginRight: 20}}>
                                <a href="/"><img src={require('./imgs/instagram@3x.png')} style={{width:25, height: 25, margin: 10}} /></a>
                                <a href="/"><img src={require('./imgs/facebook@3x.png')} style={{width:25, height: 25, margin: 10}} /></a>
                            </div>
                        </div>
                        <div 
                            className={cn(Stl.flex, Stl.rRow, Stl['justify-center'], Stl['align-items-center'], Stl.fullHR)} 
                            style={{marginBottom: '5%', paddingLeft: 50, paddingRight:50}}>
                            <div>
                                <div className={Stl.headerWrap}>
                                    <h1 className={Stl.header}>Sap dap yearnal megstar which came through foo.</h1>
                                    <div className={Stl.subHeader}>
                                        <strong className={Stl.strong}>CIRCUITS </strong>
                                        <span>is the super app dapp outcome of all timers which increases lol yoloers stap dapersn.</span>
                                    </div>
                                    <div style={{margin: 'auto', textAlign: 'center'}}>
                                        <button className={Stl.btn} onClick={this.handleClick}>Sign up for Circuits news</button>
                                    </div>
                                </div>
                            </div>
                            <div className={Stl.phone}>
                                <a href="/"><img src={require('./imgs/iphone.png')} className={Stl.phoneImg} /></a>
                                <a href="/"><img src={require('./imgs/appstore.png')} className={cn(Stl.phoneImg, Stl.appStoreImg)} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        );
    }
}
