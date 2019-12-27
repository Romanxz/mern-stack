import posed from 'react-pose'

// export const SHADOW_COLOR = '196, 0, 196,'
export const SHADOW_COLOR = '0, 62, 138,'

const Shadow = posed.div({
  pressable: true,
  enter: {
    y: 0,
    boxShadow: `10px 10px 22px rgba(${SHADOW_COLOR} 0.22), 2px 6px 6px rgba(${SHADOW_COLOR} 0.19)`,
    opacity: 1,
  },
  exit: {
    y: 10,
    boxShadow: `0 0px 0px rgba(${SHADOW_COLOR} 0.22), 0 0px 0px rgba(${SHADOW_COLOR} 0.19)`,
    opacity: 0,
  },
  press: {
    y: ({ nopress }) => (nopress ? 0 : 5),
    opacity: 1,
    boxShadow: ({ nopress }) =>
      nopress
        ? `10px 10px 22px rgba(${SHADOW_COLOR} 0.22), 2px 6px 6px rgba(${SHADOW_COLOR} 0.19)`
        : `5px 5px 11px rgba(${SHADOW_COLOR} 0.3), 1px 3px 3px rgba(${SHADOW_COLOR} 0.25)`,
  },
  divide: {
    y: 0,
    boxShadow: `10px 10px 22px rgba(${SHADOW_COLOR} 0.8), 2px 6px 6px rgba(${SHADOW_COLOR} 0.8)`,
    opacity: 1,
  },
})

export default Shadow
