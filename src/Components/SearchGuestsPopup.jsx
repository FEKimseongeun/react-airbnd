/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import Popup from '../global/Popup';
import Button from '../global/Button';
import { FiPlus, FiMinus } from 'react-icons/fi';

const StSearchGuestsPopupWrapper = styled.div`
  position: relative;
`;

const StSearchGuestsPopup = styled(Popup)`
  top: 46px;
  right: 0px;
  border-radius: 20px;
  padding: 20px;
  min-width: 360px;
  color: ${({ theme }) => theme.color.black};
`;

const StSearchGuestsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StSearchGuestsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
  }
`;

const StSearchGuestsTextWrapper = styled.div``;

const StSearchGuestsType = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const StSearchPetSpan= styled.span`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 8px;  
  text-decoration:underline;
`;

const StSearchGuestsTypeAge = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StSearchGuestsCountWrapper = styled.div``;

const StSearchGuestsCountBtn = styled(Button)`
  border-color: ${({ theme }) => theme.color.gray};
  &:hover {
    border-color: ${({ theme }) => theme.color.black};
  }
  ${({ minusBtn, guestCount }) =>
    minusBtn &&
    !guestCount &&
    css`
      border-color: ${({ theme }) => theme.color.line};
      color: ${({ theme }) => theme.color.line};
      cursor: not-allowed;
      &:hover {
        border-color: ${({ theme }) => theme.color.line};
      }
    `}
`;

const StSearchGuestsCount = styled.span`
  display: inline-block;
  text-align: center;
  width: 30px;
`;

const SearchGuestsPopup = forwardRef(
  ({ type, searchData, increaseGuestCount, decreaseGuestCount }, ref) => {
    const { guests } = searchData;
    const { adult, child, infant, pet } = guests;

    return (
      <StSearchGuestsPopupWrapper ref={ref}>
        <StSearchGuestsPopup popupState={type === 'guests'}>
          <StSearchGuestsList>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>??????</StSearchGuestsType>
                <StSearchGuestsTypeAge>??? 13??? ??????</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  minusBtn
                  guestCount={adult}
                  onClick={() => decreaseGuestCount(guests, 'adult')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{adult}</StSearchGuestsCount>

                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() => increaseGuestCount(guests, 'adult')}
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>?????????</StSearchGuestsType>
                <StSearchGuestsTypeAge>2~12???</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  minusBtn
                  guestCount={child}
                  onClick={() => decreaseGuestCount(guests, 'child')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{child}</StSearchGuestsCount>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() => increaseGuestCount(searchData.guests, 'child')}
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>??????</StSearchGuestsType>
                <StSearchGuestsTypeAge>2??? ??????</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  minusBtn
                  guestCount={infant}
                  onClick={() => decreaseGuestCount(guests, 'infant')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{infant}</StSearchGuestsCount>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() =>
                    increaseGuestCount(searchData.guests, 'infant')
                  }
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>????????????</StSearchGuestsType>
                <StSearchPetSpan>?????? ????????? ???????????????????</StSearchPetSpan>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                    btnType="circle"
                    minusBtn
                    guestCount={pet}
                    onClick={() => decreaseGuestCount(guests, 'pet')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{pet}</StSearchGuestsCount>
                <StSearchGuestsCountBtn
                    btnType="circle"
                    onClick={() =>
                        increaseGuestCount(searchData.guests, 'pet')
                    }
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
          </StSearchGuestsList>
        </StSearchGuestsPopup>
      </StSearchGuestsPopupWrapper>
    );
  },
);

export default React.memo(SearchGuestsPopup);
