import React, {cloneElement} from 'react'
import { Grid, Typography } from '@mui/material'

const SystemGrid = (props) => {
    const { rowSpacing, columnSpacing, GridItems, style } = props
    return (
        <Grid container 
        rowSpacing={rowSpacing}
        columnSpacing={columnSpacing}
        style={style}
        >
            {
                GridItems.map((item) => {
                    return (
                        <Grid item xs={6}>
                            {item.enableTypography ? <Typography gutterBottom>{item.typography}</Typography> : <></>}
                            {cloneElement(item.children)}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default SystemGrid