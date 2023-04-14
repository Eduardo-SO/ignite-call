import { globalCss } from '@izuka/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
   
  body: {
    backgroundColor: 'Peru',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  }
})