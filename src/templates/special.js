import React, { Component } from 'react'
import styled, { extend } from 'styled-components'
import PropTypes from 'prop-types'
// import Fade from 'react-reveal/Fade';

let InnerHTML
import Helmet from 'react-helmet'
import favicon from '../assets/bunnymoji.png'

if (typeof window !== `undefined`) {
  InnerHTML = require('script-inner-html')
}
const Special = styled.div`
  text-align: center;
`

const SpecialBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    margin: 0 auto var(--spacing);
  }

  p,
  h3,
  h1 {
    margin: 2rem;

    @media(min-width: 600px) {
      margin: 2rem 4rem;
    }

    @media(min-width: 850px) {
      margin: 2rem 8rem;
    }
  }

  a,
  h3 {
    color: var(--blue);
  }
`

const SpecialCard = styled.div`
  display: flex;
  padding: 11% 0;
  text-align: initial;

  &:first-child {
    border: 15px solid var(--blue);

    p {
      font-size: 1.1em;
      line-height: 1.6;

      @media (min-width: 600px) {
        font-size: 1.7em;
      }
    }

    > div {
      width: 100%;
    }
  }

  &:nth-child(2) {
    background: var(--blue);
    color: white;

    a {
      color: #FBFF12;
    }

    p {
      font-size: 1.1em;
      line-height: 1.6;

      @media (min-width: 600px) {
        font-size: 1.7em;
      }
    }
  }

  &:nth-child(3) {
    p {
      font-size: 1.1em;

      @media (min-width: 600px) {
        font-size: 1.3em;
      }
    }
  }

  &:nth-child(4) {
    background: #FBFF12;

    p {
      font-size: 1.1em;

      @media (min-width: 600px) {
        font-size: 1.3em;
      }
    }

    span {
      font-size: .7em;
    }
    
    a {
      color: var(--blue);
    }
  }

  &:nth-child(5) {
    padding: 12.5% 0 0;
    margin-bottom: -10%;
    z-index: 1;
    border: 14px solid var(--blue);

    p {
      font-size: 1.1em;

      @media (min-width: 600px) {
        font-size: 1.3em;
      }
    }

    .photos {
      width: 100%;
      overflow: hidden;
      margin: var(--big-spacing) auto 0;
      padding: 10px;
      display: grid;
      // grid-template-columns: 100% 100%;
      grid-gap: var(--spacing);

      @media (min-width: 480px) {
        padding: var(--spacing) var(--spacing) 0;
      }

      @media (min-width: 850px) {
        grid-template-columns: 49% 49%;
      }

      .photo-link {
        background: var(--blue);
        border-top: 5px solid transparent;
        a {
          span {
            position: absolute;
            margin: 5rem 2rem;
            font-size: 2rem;
            color: #FBFF12;
            z-index: 1;
            width: 350px;
          }
          img {
            opacity: 0.3;
          }
        }

        &:hover {
          border-top: 5px solid #FBFF12;
        }
      }
    }
  }

  &:nth-child(6) {
    background: var(--blue);
    color: white;
    border-bottom: 2px solid white;

    a {
      color: #FBFF12;
    }

    p {
      font-size: 1.1em;

      @media (min-width: 600px) {
        font-size: 1.3em;
      }
    }

    .video {
      padding: 0 8%;
    }

    .gatsby-resp-iframe-wrapper {
      padding-bottom: 50% !important;
    }

    p {
      &:nth-child(2) {
        margin-top: 10%;
      }
    }
  }

  h1 {
    color: var(--blue);
    font-size: 2.5rem;
    line-height: 1;

    @media (min-width: 600px) {
      font-size: 4rem;
      line-height: 1.2;
    }
  }

  a {
    font-family: 'Cousine', cursive;
    font-weight: 700;
  }

`

const SpecialPage = ({data}) => {
  const special = data.contentfulSpecial
 
  return <Special>
      <Helmet title={special.title} meta={[{ name: 'description', content: special.title}, 
      { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/>
      {typeof window !== 'undefined' && (
        <SpecialBody>
          <SpecialCard>
            {/* <Fade clear> */}
              <InnerHTML html={ special.bodyBlock1.childMarkdownRemark.html } />
            {/* </Fade> */}
          </SpecialCard>
          <SpecialCard>
            {/* <Fade clear> */}
              <InnerHTML html={ special.bodyBlock2.childMarkdownRemark.html } />
            {/* </Fade>   */}
          </SpecialCard>
          <SpecialCard>
            {/* <Fade clear> */}
              <InnerHTML html={ special.bodyBlock3.childMarkdownRemark.html } />
            {/* </Fade> */}
          </SpecialCard>
          <SpecialCard>
            {/* <Fade clear> */}
              <InnerHTML html={ special.bodyBlock5.childMarkdownRemark.html } />
            {/* </Fade> */}
          </SpecialCard>
          <SpecialCard>
            {/* <Fade bottom> */}
              <InnerHTML html={ special.bodyBlock6.childMarkdownRemark.html } />
            {/* </Fade>     */}
          </SpecialCard>
          {/* <SpecialCard>
            {/* <Fade bottom> */}
              {/* <InnerHTML html={ special.bodyBlock7.childMarkdownRemark.html } /> */}
            {/* </Fade>     */}
          {/* </SpecialCard> */}
        </SpecialBody>
      )}
    </Special>
}

SpecialPage.propTypes = {
  data: PropTypes.object,
}

export default SpecialPage

// Query Contentful for content type Special
export const postQuery = graphql`
  query specialQuery($slug: String!){
    contentfulSpecial(slug: { eq: $slug }) {
      id
      title 
      bodyBlock1 {
        childMarkdownRemark {
          html
        }
      }
      bodyBlock2 {
        childMarkdownRemark {
          html
        }
      }
      bodyBlock3 {
        childMarkdownRemark {
          html
        }
      }
      bodyBlock4 {
        childMarkdownRemark {
          html
        }
      }
      bodyBlock5 {
        childMarkdownRemark {
          html
        }
      }
      bodyBlock6 {
        childMarkdownRemark {
          html
        }
      }
      bodyBlock7 {
        childMarkdownRemark {
          html
        }
      }      
      bodyBlock8 {
        childMarkdownRemark {
          html
        }
      }
      updatedAt
    }
  }
`
