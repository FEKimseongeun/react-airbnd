import React from 'react';
import styled from 'styled-components';
import Button from '../global/Button';


const StBackgroundWrapper = styled.div`
  z-index: -1;
  height: 100%;
  min-height: 650px;
  background-size: cover;
  background-color:black;
  padding: 275px 80px 0 80px;
  @media ${({ theme }) => theme.size.iPad} {
    height: 100%;
    min-height: 520px;
    padding: 275px 40px 0px 40px;
    background-image: url('https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=720');
  }
`;

const StBox=styled.div`
  z-index: 0;
    min-height:380px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: rgb(255, 56, 92);
    border-radius:10px;
`;

const StDomesticTripSection = styled.section`
  color: ${({ theme }) => theme.color.white};
`;

const StDomesticHeader=styled.h1`
   font-weight: bold;
  font-size: 30px;
  width: 100%;
  margin-bottom: 15px;
  line-height: 40px;
`;

const StDomesticTripHeader = styled.h2`
  font-weight: bold;
  font-size: 30px;
  width: 270px;
  margin-bottom: 15px;
  line-height: 40px;
`;

const StDomesticTripContent = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

const Background = () => {
  return (
    <StBackgroundWrapper>
      <StBox>
        <StDomesticHeader>
          10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요
        </StDomesticHeader>
      </StBox>
      <StDomesticTripSection>
        <StDomesticTripHeader>
          가까운 곳에서 즐기는 색다른 여행
        </StDomesticTripHeader>
        <StDomesticTripContent>
          그동안 몰랐던 국내 여행지의 아름다움을 발견해보세요.
        </StDomesticTripContent>
        <Button border="none" transition>
          알아보기
        </Button>
      </StDomesticTripSection>
    </StBackgroundWrapper>
  );
};

export default Background;
