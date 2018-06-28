import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import '../assets/fa/css/fontawesome.min.css'
import '../assets/fa/css/fa-brands.min.css'
import favicon from '../assets/bunnymoji.png'

import Header from '../components/Header'
import Footer from '../components/Footer'

// TODO: Transfer this and the rest of the reset to typography.js (yikes)
injectGlobal`
/* This is global styling,  do not add specific styles here */

  body {
    font-family: Work Sans, sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }
 
  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -.25em;
  }
  sup {
    top: -.5em;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  optgroup {
    font-weight: 700;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type=reset],
  [type=submit],
  button,
  html [type=button] {
    -webkit-appearance: button;
  }
  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type=button]:-moz-focusring,
  [type=reset]:-moz-focusring,
  [type=submit]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type=checkbox],
  [type=radio] {
    box-sizing: border-box;
    padding: 0;
  }
  [type=number]::-webkit-inner-spin-button,
  [type=number]::-webkit-outer-spin-button {
    height: auto;
  }
  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type=search]::-webkit-search-cancel-button,
  [type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`
const TemplateWrapper = ({ data, children, location }) => {
  return <div id="outer-container">
      <Helmet title="Sluttish - exploring female sexuality" meta={[{ name: 'description', content: 'Sluttish aims to explore female sexuality and fight slut shaming by creating and curating adult sex ed, feminist and alternative porn, practical sex tips, and everything that turns us on and needs exploring' }, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/> 
      <Header data={data} location={location} />
      <div id="page-wrap">
        <div>{children()}</div>
      </div>
      <Footer data={data} />
    </div>
}

TemplateWrapper.propTypes = {
  data: PropTypes.object,
  children: PropTypes.func,
  location: PropTypes.object
}

export default TemplateWrapper

export const navigationQuery = graphql`
  query NavigationQuery{
    allContentfulCategory(limit: 5) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }

    allContentfulPage(limit: 2) {
      edges {
        node {
          id
          slug
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
