import React from "react";
import styled from "styled-components";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement
} from "@stripe/react-stripe-js";

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

const CardDetails = () => {
  return (
    <GroupCardContainer>
      <GroupNumber>
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
  );
};

export default CardDetails;
