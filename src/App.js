import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {show} from './store/reducers/modal';
import Modal from './components/modal';
import OpenModalWithPortal  from './components/openModalWithPortal';
const App = ({isVisible, show}) => {
  

  return (
    <>
      <button onClick={()=>{show('search');}}>Redux로 검색창 열기</button>
      <div id='modal'></div>
      
      <Modal/>
      <OpenModalWithPortal/>
    </>
  )
}
const mapStateToProps = (state) => ({
	isVisible: state.modal.isVisible
});

const mapDispatchToProps = (dispatch) => ({
	show: (content) => dispatch(show({content})),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);