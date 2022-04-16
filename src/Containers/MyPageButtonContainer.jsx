import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom';
//import { openModal } from '../Modules/modal';
import MyPageButton from '../Components/MyPageButton';
// import MyPagePopup from '../../Components/Main/MyPagePopup';
// import LoginModalContainer from './LoginModalContainer';
// import SignupMenuModalContainer from './SignupMenuModalContainer';
// import SignupEmailModalContainer from './SignupEmailModalContainer';

const MyPageButtonContainer = ({ isScrollTop }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const closePopup = () => {
    setPopupVisible(false);
  };

  const togglePopup = () => {
    setPopupVisible(prevState => !prevState);
  };




  return (
    <>
      <MyPageButton
        isScrollTop={isScrollTop}
        togglePopup={togglePopup}
      ></MyPageButton>
      {/*<MyPagePopup*/}
      {/*  popupVisible={popupVisible}*/}
      {/*  closePopup={closePopup}*/}
      {/*  openModalByName={openModalByName}*/}
      {/*  movePage={movePage}*/}
      {/*></MyPagePopup>*/}
      {/*<LoginModalContainer />*/}
      {/*<SignupMenuModalContainer />*/}
      {/*<SignupEmailModalContainer />*/}
    </>
  );
};

export default React.memo(MyPageButtonContainer);
