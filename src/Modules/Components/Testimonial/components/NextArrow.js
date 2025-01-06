import React from 'react';
import PropTypes from 'prop-types';

export function NextArrow(props) {
  const { style } = props;
  return (
    <div className={props.styleClass} style={{ ...style }} onClick={props.onClick}>
      <img src={props.image ? props.image : 'https://cdn.venuemonk.com/noun-arrow.png'} alt='next' />
    </div>
  );
}

NextArrow.contextTypes = {
  router: PropTypes.object,
};

NextArrow.propTypes = {};

export default NextArrow;
