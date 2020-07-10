import React from 'react';
import PropTypes from 'prop-types';

export const ItemList = ({ items, keyFn, contentFn, actionButtonText, onAction }) => {

  return (
    <ul>
      {items.map(item => <li key={keyFn(item)}>
        {contentFn(item)}
        {onAction && <button type="button" onClick={() => onAction(keyFn(item))}>
          {actionButtonText}
        </button>}
      </li>)}
    </ul>
  );

};

ItemList.defaultProps = {
  items: [],
  keyFn: item => item.id,
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  })),
  keyFn: PropTypes.func,
  contentFn: PropTypes.func.isRequired,
  actionButtonText: PropTypes.string,
  onAction: PropTypes.func,
};
