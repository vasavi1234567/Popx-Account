import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-card">
        <h5>Account Settings</h5>
        <div className="profile-description">
          <div>
            <img className="profile-image" src='https://img.freepik.com/free-photo/cheerful-business-woman-standing-isolated_171337-8493.jpg?ga=GA1.1.594824954.1748935995&semt=ais_items_boosted&w=740' alt='profile-image' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="12" width="12" fill="#ffffff">
              <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
            </svg>
            <div className="d-flex flex-column">
              <p className="mb-0 name">Marry Doe</p>
              <p>Marry@Gmail.Com</p>
            </div>
          </div>
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        <hr className="hr-line" />
      </div>
    </div>
  )
}

export default Profile
