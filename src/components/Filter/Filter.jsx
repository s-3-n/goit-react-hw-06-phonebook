import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterByName } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state=>state.filter);
  
    const handleFilterChange = e => {
       dispatch(filterByName(e.target.value))
     }

     return (
        <FilterLabel>
          Find contacts by name
          <FilterInput type="text" value={filter} onChange={handleFilterChange} />
        </FilterLabel>
      );
    };

export default Filter;