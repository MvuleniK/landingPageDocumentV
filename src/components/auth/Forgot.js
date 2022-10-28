import React from 'react'

function Forgot() {
  return (
    <div className='welcome'>
        <div className="login-register-container">
            <div  className='login-part'>
                <div className='login-form'>
                    <div className='login-input'>
                      <h2>Forgot your credentials?</h2>
                      <p>Enter the email address you used when you joined to get instructions and reset your password.</p>
                      <input
                       type="email"
                       placeholder="Email"
                      />
                    </div>
                    <div>
                        <button className="sign-in-register-button">Back</button>
                        <button className="sign-in-register-button">Back</button>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Forgot