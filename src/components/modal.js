import React from 'react';
import {connect} from 'react-redux';
import {drop} from '../store/reducers/modal';
import {useEffect} from 'react';
import * as modals from './modals';
import styles from './modal.module.css'
const Modal = ({isVisible, content, drop}) => {
  const checkEsc = (e) => {
    if (e.code == 'Escape')
      drop();
  }
  const Content = modals[content];
  useEffect(()=>{
    if(isVisible)
    {
      window.addEventListener('keydown', checkEsc);

    }
    else
      window.removeEventListener('keydown',checkEsc);
    return ()=>{window.removeEventListener('keydown',checkEsc)};
  }, [isVisible])
  


  return (
    <>
    {isVisible && 
    <div className={styles.modalContainer}>
      <div className={styles.closeBar}>
        <button onClick={drop}>XXXX</button>
      </div>
      <Content drop ={drop} />
    </div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  isVisible: state.modal.isVisible,
  content: state.modal.content
});

const mapDispatchToProps = (dispatch) => ({
  drop: () => dispatch(drop()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);