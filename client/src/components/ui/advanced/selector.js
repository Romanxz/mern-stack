import React from 'react'
import Checkbox from '../basic/checkbox'
import { Grid } from '@material-ui/core'

const Selector = ({ theme, onChange }) => {
  return (
    <Grid item container direction="row" justify="center" alignItems="center">
      <Grid
        style={{ width: '50%', height: 60 }}
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Checkbox
          key={1}
          name="White"
          checked={theme === 'White' ? true : false}
          onChange={onChange}
        />
        <Checkbox
          key={2}
          name="Black"
          checked={theme === 'Black' ? true : false}
          onChange={onChange}
        />
      </Grid>
      <Grid
        style={{ width: '50%', height: 60 }}
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Checkbox
            key={3}
            name="Gradient"
            checked={theme === 'Gradient' ? true : false}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <Checkbox
            key={4}
            name="Custom"
            checked={theme === 'Custom' ? true : false}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Selector
