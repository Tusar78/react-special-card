import React from 'react';

const Toggle = () => {
  return (
    <div className='toggle__content'>
      <label className='toggle__label'>
        <input type="checkbox" className='toggle__check' />

        <div className="toggle__rail">
          <span className="toggle__circle"></span>
          <span className="toggle__border"></span>
        </div>
      </label>
    </div>
  );
};

export default Toggle;