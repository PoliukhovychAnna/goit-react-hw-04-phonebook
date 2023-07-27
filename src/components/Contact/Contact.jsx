import PropTypes from 'prop-types';
import { StyledContact } from './Styled.Contact';
export const Contact = ({ id, name, number, onDelete }) => (
  <StyledContact key={id}>
    <span>{name}</span>
    <span>{number}</span>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </StyledContact>
);


Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete:PropTypes.func.isRequired,
}