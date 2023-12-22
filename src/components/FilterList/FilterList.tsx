import { ChangeEventHandler } from 'react';
import { FilterItem } from '../FilterItem/FilterItem'

type filterListProps = {
  onABVChange: ChangeEventHandler<HTMLInputElement>;
  onClassicRangeChange: ChangeEventHandler<HTMLInputElement>;
  onAcidityChange: ChangeEventHandler<HTMLInputElement>;
}

export const FilterList = ({onABVChange, onAcidityChange, onClassicRangeChange} : filterListProps) => {
  return (
    <section>
        <FilterItem onChange={onABVChange} label='High ABV (>6.0%)'/>
        <FilterItem onChange={onAcidityChange} label='Classic Range'/>
        <FilterItem onChange={onClassicRangeChange} label='Acidic (pH < 4)'/>
    </section>
  )
}
