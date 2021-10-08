import React from "react";
import styled from "styled-components";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement
} from "@stripe/react-stripe-js";

const MainFormContainer = styled.div`
  width: 100%;
  font-family: Sans-Serif;
`;

const GroupCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;

  @media (max-width: 767.98px) {
    flex-flow: row wrap;
  }
`;

const GroupNumber = styled.div`
  flex: 0 1 50%;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 767.98px) {
    flex: 0 1 100%;
  }
`;

const GroupExpired = styled.div`
  flex: 0 1 25%;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 767.98px) {
    flex: 0 1 50%;
  }
`;

const GroupCvv = styled.div`
  flex: 0 1 25%;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 767.98px) {
    flex: 0 1 50%;
  }
`;

const InputFormWrap = styled.div`
  border: 1px solid #DBDBDB;
  border-radius: 6px;
  padding: 12px 20px;
  transition: .3s;

  &:hover {
    border-color: #BDBDBD;
  }
`;

const LabelCard = styled.label`
 color: #202020;
 font-size: 16px;
 margin-bottom: 8px;
 display: block;
`;

const TitleHeading = styled.h5`
  color: #202020;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CardDetails = () => {
  return (
  <MainFormContainer>
    <div style={{ padding: 8 }}>
      <TitleHeading>Card</TitleHeading>
    </div>

    <GroupCardContainer>
      <GroupNumber>
        <LabelCard>Card number</LabelCard>
        <InputFormWrap>
          <CardNumberElement
            options={{
              iconStyle: "solid",
              showIcon: true,
              style: {
                base: {
                  fontSize: "20px"
                }
              }
            }}
          />
        </InputFormWrap>
      </GroupNumber>

      <GroupExpired>
      <LabelCard>Valid thru</LabelCard>
        <InputFormWrap>
          <CardExpiryElement
            options={{
              style: {
                base: {
                  fontSize: "20px",
                }
              },
              placeholder: 'MM/YY'
            }}
          />
        </InputFormWrap>
      </GroupExpired>

      <GroupCvv>
      <LabelCard>Secure code</LabelCard>
        <InputFormWrap>
          <CardCvcElement
            options={{
              style: {
                base: {
                  fontSize: "20px"
                }
              },
              placeholder: 'CVV'
            }}
          />
        </InputFormWrap>
      </GroupCvv>
    </GroupCardContainer>
  </MainFormContainer>
  );
};

export default CardDetails;
