import {Component} from 'react'

import Cookies from 'js-cookie'

import Navbar from '../Navbar'

import JobsBody from '../JobsBody'

const profileDetailsStatus = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILURE: 'failure',
}

const jobsStatus = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILURE: 'failure',
  NOJOBS: 'noJobs',
}

class Jobs extends Component {
  state = {
    searchText: '',
    profileDetails: null,
    profileDetailsFetchStatus: profileDetailsStatus.PENDING,
    checkedEmploymentTypes: [],
    salaryRange: '',
    jobs: [],
    jobsFetchingStatus: jobsStatus.PENDING,
  }

  componentDidMount() {
    this.fetchProfileDetails()
    this.fetchAllJobs()
  }

  fetchProfileDetails = async () => {
    this.setState({profileDetailsFetchStatus: profileDetailsStatus.PENDING})
    const profileUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(profileUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      if (data) {
        const profileDetails = {
          name: data.profile_details.name,
          profileImageUrl: data.profile_details.profile_image_url,
          shortBio: data.profile_details.short_bio,
        }
        this.setState({
          profileDetails,
          profileDetailsFetchStatus: profileDetailsStatus.SUCCESS,
        })
      } else {
        this.setState({profileDetailsFetchStatus: profileDetailsStatus.FAILURE})
      }
    } else {
      this.setState({profileDetailsFetchStatus: profileDetailsStatus.FAILURE})
    }
  }

  fetchAllJobs = async () => {
    this.setState({jobsFetchingStatus: jobsStatus.PENDING})
    const {checkedEmploymentTypes, salaryRange} = this.state
    let apiUrl = 'https://apis.ccbp.in/jobs'

    if (checkedEmploymentTypes.length > 0) {
      const employmentType = checkedEmploymentTypes.join(',')
      apiUrl += `?employment_type=${employmentType}`
    }
    if (salaryRange) {
      apiUrl += apiUrl.includes('?')
        ? `&minimum_package=${salaryRange}`
        : `?minimum_package=${salaryRange}`
    }

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    console.log(response, 'this is response')

    if (response.ok) {
      const data = await response.json()
      const {jobs} = data
      if (jobs.length > 0) {
        this.setState({jobs, jobsFetchingStatus: jobsStatus.SUCCESS})
      } else {
        this.setState({jobsFetchingStatus: jobsStatus.NOJOBS})
      }
    } else {
      this.setState({jobsFetchingStatus: jobsStatus.FAILURE})
    }
  }

  onChangeSearchInput = searchText => this.setState({searchText})

  userSearch = async searchText => {
    this.setState({jobsFetchingStatus: jobsStatus.PENDING})
    const {checkedEmploymentTypes, salaryRange} = this.state
    let apiUrl = `https://apis.ccbp.in/jobs?search=${searchText}`

    if (checkedEmploymentTypes.length > 0) {
      const employmentType = checkedEmploymentTypes.join(',')
      apiUrl += `&employment_type=${employmentType}`
    }
    if (salaryRange) {
      apiUrl += `&minimum_package=${salaryRange}`
    }

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    console.log(response, 'this is response')

    if (response.ok) {
      const data = await response.json()
      const {jobs} = data
      if (jobs.length > 0) {
        this.setState({jobs, jobsFetchingStatus: jobsStatus.SUCCESS})
      } else {
        this.setState({jobsFetchingStatus: jobsStatus.NOJOBS})
      }
    } else {
      this.setState({jobsFetchingStatus: jobsStatus.FAILURE})
    }
  }

  onClickEmploymentType = async type => {
    await this.setState(prevState => {
      if (prevState.checkedEmploymentTypes.includes(type)) {
        return {
          checkedEmploymentTypes: prevState.checkedEmploymentTypes.filter(
            each => each !== type,
          ),
        }
      }

      return {
        checkedEmploymentTypes: [...prevState.checkedEmploymentTypes, type],
      }
    })
    this.fetchAllJobs()
  }

  onClickSalaryRange = async salaryRange => {
    await this.setState({salaryRange})
    this.fetchAllJobs()
  }

  render() {
    const {employmentTypesList, salaryRangesList} = this.props

    const {
      searchText,
      profileDetails,
      profileDetailsFetchStatus,

      jobs,
      jobsFetchingStatus,
    } = this.state
    return (
      <>
        <Navbar />
        <JobsBody
          employmentTypesList={employmentTypesList}
          salaryRangesList={salaryRangesList}
          onChangeSearchInput={this.onChangeSearchInput}
          searchText={searchText}
          userSearch={this.userSearch}
          profileDetails={profileDetails}
          profileDetailsFetchStatus={profileDetailsFetchStatus}
          fetchProfileDetails={this.fetchProfileDetails}
          onClickEmploymentType={this.onClickEmploymentType}
          onClickSalaryRange={this.onClickSalaryRange}
          jobs={jobs}
          jobsFetchingStatus={jobsFetchingStatus}
          fetchAllJobs={this.fetchAllJobs}
        />
      </>
    )
  }
}

export default Jobs
