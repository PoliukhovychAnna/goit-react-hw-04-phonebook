import PropTypes from 'prop-types';
import { StyledFilter } from './Styled.Filter';
export const Filter = ({ onChange, value }) => (
  <StyledFilter>
    Find contact by name
    <input type="text" name="filter" value={value} onChange={onChange} />
  </StyledFilter>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};