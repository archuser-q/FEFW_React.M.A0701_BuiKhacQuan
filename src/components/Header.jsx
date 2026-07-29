import {NavLink} from 'react-router-dom'
import { USERS } from '../data/constants'

function Header({ currentUser, onChangeUser }) { 
    const tabClassName = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

    return (
        <nav className='navbar navbar-expand navbar-light bg-white border-bottom py-2'>
            <ul className='nav mr-auto'>
                <li className='nav-item'>
                    <NavLink to="" className={tabClassName}>
                        Messages
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="" className={tabClassName}>
                        Contacts
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="" className={tabClassName}>
                        Preferences
                    </NavLink>
                </li>
            </ul>
            <div className='d-flex align-items-center'>
                <select 
                    name="form-control form-control-sm mr-3" 
                    value={currentUser}
                    onChange={(event)=>onChangeUser(event.target.value)}
                >
                    {USERS.map((user)=>(
                        <option key={user} value={user}>
                            {user}
                        </option>
                    ))}
                </select>
                <button 
                    type='button'
                    className='btn btn-primary btn-sm mx-2'
                    title='Home'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 640 640"
                        fill="currentColor"
                    >
                        <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6ZM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384Z" />
                    </svg>   
                </button>
                <button type='button' className='btn btn-primary btn-sm'>
                    New Message
                </button>
            </div>
        </nav>
    )
}

export default Header