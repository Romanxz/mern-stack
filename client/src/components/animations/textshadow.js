import posed from 'react-pose'
import { SHADOW_COLOR } from './shadow'

const TextShadow = posed.div({
  enter: {
    left: 0,
    scale: 1,
    opacity: 1,
    textShadow: ({ noshadow }) =>
      !noshadow
        ? `8px 8px 8px rgba(${SHADOW_COLOR} 0.18), 4px 4px 8px rgba(${SHADOW_COLOR} 0.15)`
        : `0px 0px 0px rgba(${SHADOW_COLOR} 0.22), 0px 0px 0px rgba(${SHADOW_COLOR} 0.19)`,
  },
  exit: {
    left: ({ direction }) =>
      direction === 'right' ? 200 : direction === 'left' ? -200 : 0,
    opacity: 0,
    textShadow: `0px 0px 0px rgba(${SHADOW_COLOR} 0.22), 0px 0px 0px rgba(${SHADOW_COLOR} 0.19)`,
  },
})

export default TextShadow
