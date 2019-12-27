import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core'
import Spacer from '../basic/spacer'
import Text from './text-fx/variants/text'
import Subheader from './text-fx/variants/subheader'

const TableRow = props => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Grid
      item
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      style={{ width: '100%' }}
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        xs={12}
        sm={6}
        md={5}
        lg={5}
        xl={4}
        style={{ height: smUp ? '100%' : 'inherit' }}
      >
        <Subheader appear="left">{props.subheader}</Subheader>
      </Grid>
      <Hidden smUp>
        <Spacer size={1} />
      </Hidden>
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        xs={12}
        sm={6}
        md={7}
        lg={7}
        xl={8}
      >
        {props.strings.map((value, id) => (
          <>
            <Text appear="right" bold size={18} key={id} uppercase>
              {value.string}
            </Text>
            <Spacer size={1} />
          </>
        ))}
      </Grid>
    </Grid>
  )
}

export default TableRow
