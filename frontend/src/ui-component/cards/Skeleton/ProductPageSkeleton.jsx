import React from 'react'
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import ProductPlaceholder from './ProductPlaceholder'

const ProductPageSkeleton = () => {
  return (
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductPlaceholder />
                </Grid>
            </Grid>
  )
}

export default ProductPageSkeleton
