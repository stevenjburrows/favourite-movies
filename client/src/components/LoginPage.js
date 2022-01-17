import React from 'react'

function LoginPage({login, error}) {

    const handleSubmit = (event) => {
        login(event.target.username.value, event.target.password.value)
        event.preventDefault();

    }

    return (
        <div className='mainWrapper'>
            <div className='loginWrapper'>
            <h1>Login</h1>
            <div className='loginForm'>
                <form onSubmit={handleSubmit}>
                    <div className='userInput'>
                        <input type="text" name="username" placeholder="username" />
                    </div>

                    <div className='userInput'>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <div className='formError'>
                        {error}
                    </div>
                    
                    <input type="submit" value="Log in" />
                </form>
            </div>
            </div>

        </div>
    )
}

export default LoginPage
