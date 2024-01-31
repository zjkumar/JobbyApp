import Loader from 'react-loader-spinner'

import './index.css'

const ProfileCard = props => {
  const {profileDetails, fetchProfileDetails, profileDetailsFetchStatus} = props
  const reloadProfileDetails = () => {
    fetchProfileDetails()
  }
  //   console.log(profileDetails)
  if (profileDetailsFetchStatus === 'pending') {
    return (
      <>
        <div className="profile-details-loading-container">
          <Loader width={50} height={50} />
        </div>
        <hr className="breakline" />
      </>
    )
  }
  if (profileDetailsFetchStatus === 'success') {
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <>
        <div className="profile-card">
          <img src={profileImageUrl} alt="avatar" className="profile-avatar" />
          <h1 className="profile-name">{name}</h1>
          <p className="profile-shortbio">{shortBio}</p>
        </div>
        <hr className="breakline" />
      </>
    )
  }
  return (
    <>
      <div className="reload-profile-details-container">
        <button
          className="reload-profile-details-btn"
          onClick={reloadProfileDetails}
          type="button"
        >
          Retry
        </button>
      </div>

      <hr className="breakline" />
    </>
  )
}

export default ProfileCard
