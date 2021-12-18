import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useEffect} from 'react';
import styles from './modal.module.css'
import Search from './modals/search';
const ModalView = ({children, open, drop}) => {
  const checkEsc = (e) => {
    if (e.code == 'Escape')
      drop();
  }
  const el = document.getElementById('modal');
  // 렌더링 안됐을 경우 오류 막기 위해
  // https://velog.io/@yukyung/React-Portal-Target-container-is-not-a-DOM-element-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
  if (!el) return null;


  useEffect(()=>{
    
    if(open)
    {
      window.addEventListener('keydown', checkEsc);
    }
    else
      window.removeEventListener('keydown',checkEsc);
    return ()=>{window.removeEventListener('keydown',checkEsc)};
  }, [open])

  
  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.closeBar}>
        <button onClick={drop}>XXXX</button>
      </div>
      {children}
    </div>, el);
}


const CustomComponents = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = ()=> {
    setOpen(!open);
  }
  return (
    <>
    <button onClick={toggleOpen}>Portal로 검색창 열기</button>
    {open && <ModalView open={open} drop={toggleOpen} children={<Search drop={toggleOpen}/>}/>}
    
    </>
  )
}

export default CustomComponents;