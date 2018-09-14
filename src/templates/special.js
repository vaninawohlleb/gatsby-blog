import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import moment from 'moment'
// import InstagramEmbed from 'react-instagram-embed'
let InnerHTML
import Helmet from 'react-helmet'
import favicon from '../assets/bunnymoji.png'

if (typeof window !== `undefined`) {
  InnerHTML = require('script-inner-html')
}
const Special = styled.div`
  text-align: center;
`

const H1 = styled.h1`
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
    margin: 2rem 8rem;
  }

  blockquote {
    font-size: 17px;
    border: 5px transparent solid;
    border-image: linear-gradient(
      to right,
      #1e2ad2 10%,
      #ee9ae5 100%,
      #1e2ad2 10%,
      #ee9ae5 100%
    );
    border-image-slice: 1;
    text-transform: uppercase;
    color: #1e2ad2;
    font-weight: 700;
    margin: 1.3rem;

    @media (min-width: 520px) {
      padding: var(--big-spacing);
    }
  }

  blockquote {
    * {
      &:last-child {
        margin-bottom: 1.57rem;
      }
    }
  }

  a,
  h3 {
    color: var(--purple);
  }
`

const SpecialCard = styled.div`
  display: flex;
  padding: 12.5% 0;
  text-align: initial;

  &:first-child {
    // border: 10px solid var(--blue);
    border: 10px transparent solid;
    border-image: linear-gradient(
      to left,
      #1e2ad2 10%,
      #755FD8 100%,
      #1e2ad2 10%,
      #755FD8 100%
    );
    border-image-slice: 1;

    p {
      font-size: 1.7em;
      line-height: 1.6;
    }
  }

  &:nth-child(2) {
    background: var(--blue);
    color: white;

    a {
      color: #6bf4a9;
    }

    p {
      font-size: 1.7em;
      line-height: 1.6;
    }
  }

  &:nth-child(3) {
    border: 10px transparent solid;
    border-image: linear-gradient(
      to right,
      #1e2ad2 5%,
      #6bf4a9 100%,
      #1e2ad2 100%,
      #6bf4a9 100%
    );
    border-image-slice: 1;

    p {
      font-size: 1.3em;
    }
  }

  &:nth-child(4) {
    background: #6bf4a9;

    p {
      font-size: 1.3em;
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
    font-size: 1.3em;
    border-top: 10px solid #755FD8;

    .photos {
      max-width: 1400px;
      width: 100%;
      overflow: hidden;
      margin: var(--big-spacing) auto 0;
      padding: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(620px, 2fr));
      grid-gap: var(--spacing);

      @media (min-width: 480px) {
        padding: var(--spacing) var(--spacing) 0;
      }

      .photo-link {
      }
    }
  }

  &:nth-child(6) {
    font-size: 1.3em;
    background: var(--blue);
    color: white;
    border-bottom: 2px solid white;

    a {
      color: #6bf4a9;
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
    font-size: 4rem;
    line-height: 1.2;
    // font-family: 'Cousine', cursive;
  }

  a {
    font-family: 'Cousine', cursive;
    font-weight: 700;
  }

`

const SpecialPage = ({data}) => {
  const special = data.contentfulSpecial
  const date = moment(`${special.updatedAt}`).format('DD MMMM')
 
  return <Special>
      <Helmet title={special.title} meta={[{ name: 'description', content: special.title}, 
      { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/>
      {typeof window !== 'undefined' && (
        <SpecialBody>
            <SpecialCard><InnerHTML html={ special.bodyBlock1.childMarkdownRemark.html } /></SpecialCard>
            <SpecialCard><InnerHTML html={ special.bodyBlock2.childMarkdownRemark.html } /></SpecialCard>
            <SpecialCard><InnerHTML html={ special.bodyBlock3.childMarkdownRemark.html } /></SpecialCard>
            {/* <SpecialCard><InnerHTML html={ special.bodyBlock4.childMarkdownRemark.html } /></SpecialCard> */}
            <SpecialCard><InnerHTML html={ special.bodyBlock5.childMarkdownRemark.html } /></SpecialCard>
            <SpecialCard><InnerHTML html={ special.bodyBlock6.childMarkdownRemark.html } /></SpecialCard>
            <SpecialCard><InnerHTML html={ special.bodyBlock7.childMarkdownRemark.html } /></SpecialCard>
            {/* <SpecialCard><InnerHTML html={ special.bodyBlock8.childMarkdownRemark.html } /></SpecialCard> */}
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
