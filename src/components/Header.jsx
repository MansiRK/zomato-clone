import React from 'react'

const Header = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="mobile-icon">
                            <h6><i class="fa fa-mobile" aria-hidden="true"></i> Get the App</h6>
                        </div>
                        
                    </div>

                    <div className="col-lg-9">
                        <ul className='menu-items'>
                            <li>
                                Investor Relations
                            </li>

                            <li>Add restaurant</li>

                            <li>User</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
