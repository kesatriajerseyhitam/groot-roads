import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }

  .title {
    color: var(--mainBlack);
  }

  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{ title }</span>
        <span>{ subtitle }</span>
      </h4>
    </TitleWrapper>
  )
}

export default Title
