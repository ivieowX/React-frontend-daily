import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Profile() {
  return (
    <>
      <div className='container'>
        <p>This is My Profile of the user.</p>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </div>
    </>

  )
}

export default Profile