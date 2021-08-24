// import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import selectors from '../../redux/selectors/contactsSelectors';

import * as actions from '../../redux/actions/contacts';

import { FilterLabel, FilterInput } from './Filter.styles';

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

export default Filter;
