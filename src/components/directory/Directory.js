import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

Directory.propTypes = {
  sections: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps)(Directory);
