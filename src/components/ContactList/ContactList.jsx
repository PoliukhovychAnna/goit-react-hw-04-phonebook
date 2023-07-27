import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List } from './Styled.List';
export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      );
    })}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete:PropTypes.func.isRequired,
};
