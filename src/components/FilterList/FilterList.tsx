import React from 'react'
import { FilterItem } from '../FilterItem/FilterItem'

export const FilterList = () => {
  return (
    <section>
        <FilterItem label='High ABV (>6.0%)'/>
        <FilterItem label='Classic Range'/>
        <FilterItem label='Acidic (pH < 4)'/>
    </section>
  )
}
