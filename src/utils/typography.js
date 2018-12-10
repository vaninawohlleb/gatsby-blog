// General styles and resets
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.57,
  scaleRatio: 1.8,
  googleFonts: [
    {
      name: 'Work Sans',
      styles: ['900', '700', '400'],
    },
    {
      name: 'Cousine',
      styles: ['400', '700'],
    },
  ],
  bodyFontFamily: ['Work Sans', 'sans-serif'],
  bodyWeight: '400',
  headerFontFamily: ['Work Sans', 'sans-serif'],
  headerWeight: '700',
  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    ':root': {
      '--blue': '#1e2ad2',
      '--grey': '#666',
      '--purple': '#755FD8',
      '--spacing': '1.5rem',
      '--big-spacing': '3rem',
      '--monospace-font': "'Cousine', monospace",
    },
    html: {
      '-ms-text-size-adjust': '100%',
      '-webkit-text-size-adjust': '100%',
      'box-sizing': 'border-box',
    },
    '*': {
      'box-sizing': 'inherit',
    },
    '*:before': {
      'box-sizing': 'inherit',
    },
    '*:after': {
      'box-sizing': 'inherit',
    },
    body: {
      overflow: 'hidden',
    },
    a: {
      color: 'var(--grey)',
      'text-decoration': 'none',
      'background-color': 'transparent',
      '-webkit-text-decoration-skip': 'objects',
    },
    'a:active , a:hover': {
      'outline-width': '0',
    },
    'h1 , h2 , h3 , h4': {
      'text-transform': 'uppercase',
    },
    h1: {
      'font-size': '3rem',
    },
    'h2, h3': {
      'line-height': '1.5',
    },
    iframe: {
      'margin-bottom': '0',
    },
    del: {
      'text-decoration': 'none',
      background: 'var(--purple)',
      color: 'white'
    },
    '.bm-menu-wrap': {
      top: '0',
    },
    '.bm-burger-button': {
      width: '30px',
      height: '30px',
      'z-index': '1',
    },
    '.bm-burger-button > button': {
      'max-width': '30px',
      'max-height': '30px',
    },
    '.bm-cross-button': {
      'margin-top': '1.5rem',
      'margin-right': '1rem',
    },
    '.bm-cross': {
      background: 'white',
      height: '25px !important',
      width: '7px !important',
    },
    '.gatsby-image-wrapper': {
      'max-width': '100%',
    },
  }),
})

export { typography as default };