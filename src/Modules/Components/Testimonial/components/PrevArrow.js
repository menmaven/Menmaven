import React from 'react';
import PropTypes from 'prop-types';

export function PrevArrow(props) {
  const {style} = props;
  return (
    <div
      className={props.styleClass}
      style={{ ...style}}
      onClick={props.onClick}
    >
        <img src={props.image ? props.image : 'https://cdn.venuemonk.com/noun-arrow.png'} alt='prev'  style={{transform: 'rotate(180deg)'}}/>
    </div>
  );
}

PrevArrow.contextTypes = {
  router: PropTypes.object,
};

PrevArrow.propTypes = {};

export default PrevArrow;
