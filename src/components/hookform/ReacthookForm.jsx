import React from 'react'

const ReacthookForm = () => {
    return (
        <div>
            <form action="" autoComplete="false">
                <div className="ui form">
                    <div className="field">
                        <label htmlFor="">User Name</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="field">
                        <label htmlFor="">User Email</label>
                        <input type="email" name="useremail" />
                    </div>
                    <div className="field">
                        <label htmlFor="">User password</label>
                        <input type="password" name="userpassword" />
                    </div>
                    <button className="field ui button"> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReacthookForm
