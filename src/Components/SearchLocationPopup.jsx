/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Popup from '../global/Popup';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";

const StSearchLocationPopupWrapper = styled.div`
  position: relative;
`;

const StSearchLocationPopup = styled(Popup)`
  top: 14px;
  left: 0;
  border-radius: 30px;
  padding: 40px 0;
  min-height: 150px;
  min-width: 400px;
  color: ${({ theme }) => theme.color.black};
`;

const StSearchLocationList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StFlexButton=styled.div`
    margin-top:20px;
    margin-left:30px;
    border-radius:80px;
    border : 1px solid lightgray;
    width: 340px;
    height: 60px;
    
    box-shadow: rgba(0, 0, 0, 0.1) 0px 16px 32px;
    &:hover {
        border: 1px solid lightgray;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
            rgba(0, 0, 0, 0.1) 0px 3px 8px;
    }
`;
const StFlexButtonSection=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:10px 20px 10px 20px;
    font-weight:900;
    font-size: 20px;
`;
const StFlexButtonText=styled.span`
    background: linear-gradient(90deg, rgb(111, 1, 156) 0%, rgb(198, 1, 126) 135.12%);
    color: transparent;
    -webkit-background-clip: text;
    font-weight:900;
    font-size: 20px;
`;

const StSubTitleText = styled.span`
  padding: 30px;
  margin-top:60px;
  font-weight:bold;
  font-size:12px;
  white-space: nowrap;
`;

const StItemText = styled.span`
  white-space: nowrap;
`;

const SearchLocationPopup = forwardRef(
  ({ type, changeType, searchData, locationResult, changeSearchData }, ref) => {
    const { location } = searchData;
    return (
      <StSearchLocationPopupWrapper>
        <StSearchLocationPopup
          popupState={type === 'location'}
        >
            <StSubTitleText>언제 어디로든 떠나는 여행</StSubTitleText>
          <StSearchLocationList >
              <StFlexButton>
                  <StFlexButtonSection>
                      <StFlexButtonText>유연한 검색</StFlexButtonText>
                      <AiOutlineRight  size="35"  color="#C6017E"/>
                  </StFlexButtonSection>
              </StFlexButton>
            {/*{locationResult.map((item, index) => {*/}
            {/*  return (*/}
            {/*    <StSearchLocationItem*/}
            {/*      key={index}*/}
            {/*      onClick={() => {*/}
            {/*        changeSearchData('location', item);*/}
            {/*        changeType('checkIn');*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <StSearchLocationIconWrapper>*/}
            {/*        <FaMapMarkerAlt></FaMapMarkerAlt>*/}
            {/*      </StSearchLocationIconWrapper>*/}
            {/*      <StItemText>{item}</StItemText>*/}
            {/*    </StSearchLocationItem>*/}
            {/*  );*/}
            {/*})}*/}
          </StSearchLocationList>
        </StSearchLocationPopup>
      </StSearchLocationPopupWrapper>
    );
  },
);

export default SearchLocationPopup;
