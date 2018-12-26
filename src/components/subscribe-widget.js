import React from 'react'
import styled from 'styled-components'


const Subscribe = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  // background-image: linear-gradient(135deg, #92ffc0 10%, #002661 100%);
  //background-image: linear-gradient(135deg, #1904e5 10%, #fab2ff 100%);
  // background-image: linear-gradient(135deg, #1e2ad2 10%, #ff7af5 100%);
  background-image: linear-gradient(135deg, #1e2ad2 10%, #ee9ae5 100%);

  padding: var(--big-spacing);
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`
const SubscribeText = styled.div`
  flex-grow: 1;
  max-width: 450px;
`

const SubscribeForm = styled.div`
  flex-grow: 2;
`

const H1Bold = styled.h1`
  font-weight: 900;
  color: white;
`
export default() => {
  return <Subscribe>
    <SubscribeText>
      <H1Bold>
        Subscribe to <span>our Newsletter</span>
      </H1Bold>
    </SubscribeText>

    <SubscribeForm>
      <iframe 
        title="newsletter"
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0" 
        marginWidth="0" 
        src="https://app.mailjet.com/widget/iframe/2W2D/67J" 
        width="100%" 
        height="166"
        fontFamily="Work Sans" />
    </SubscribeForm>
    </Subscribe>
}