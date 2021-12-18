import React, {useState} from 'react';
import {connect} from 'react-redux';
import {show} from './store/reducers/modal';
import Modal from './components/modal';
const App = ({isVisible, show}) => {
  return (
    <>
      <button onClick={()=>{show('search');}}>검색창 열기</button>
      <Modal/>
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