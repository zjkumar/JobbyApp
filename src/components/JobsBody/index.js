import {useMediaQuery} from 'react-responsive'

import ProfileCard from '../ProfileCard'

import SearchBar from '../SearchBar'

import TypesOfEmploymentFilter from '../TypesOfEmploymentFilter'

import SalaryRangeFilter from '../SalaryRangeFilter'

import JobsResults from '../JobsResults'

import './index.css'

const JobsBody = props => {
  const {
    searchText,
    onChangeSearchInput,
    employmentTypesList,
    salaryRangesList,
    userSearch,
    profileDetails,
    profileDetailsFetchStatus,
    fetchProfileDetails,
    onClickEmploymentType,
    onClickSalaryRange,
    jobs,
    jobsFetchingStatus,
    fetchAllJobs,
  } = props

  const isExsmallAndSmallDevice = useMediaQuery({query: '(max-width: 767px)'})

  return isExsmallAndSmallDevice ? (
    <div className="jobs-body-layout-sm">
      <SearchBar
        userSearch={userSearch}
        searchText={searchText}
        onChangeSearchInput={onChangeSearchInput}
      />
      <ProfileCard
        profileDetails={profileDetails}
        profileDetailsFetchStatus={profileDetailsFetchStatus}
        fetchProfileDetails={fetchProfileDetails}
      />
      <TypesOfEmploymentFilter
        onClickEmploymentType={onClickEmploymentType}
        employmentTypesList={employmentTypesList}
      />
      <SalaryRangeFilter
        salaryRangesList={salaryRangesList}
        onClickSalaryRange={onClickSalaryRange}
      />
      <JobsResults
        jobs={jobs}
        jobsFetchingStatus={jobsFetchingStatus}
        fetchAllJobs={fetchAllJobs}
      />
    </div>
  ) : (
    <div className="jobs-body-layout-lg">
      <div className="sidebar-section">
        <ProfileCard
          profileDetails={profileDetails}
          profileDetailsFetchStatus={profileDetailsFetchStatus}
          fetchProfileDetails={fetchProfileDetails}
        />
        <TypesOfEmploymentFilter
          onClickEmploymentType={onClickEmploymentType}
          employmentTypesList={employmentTypesList}
        />
        <SalaryRangeFilter
          salaryRangesList={salaryRangesList}
          onClickSalaryRange={onClickSalaryRange}
        />
      </div>
      <div className="body-section">
        <SearchBar
          userSearch={userSearch}
          searchText={searchText}
          onChangeSearchInput={onChangeSearchInput}
        />

        <JobsResults
          jobs={jobs}
          jobsFetchingStatus={jobsFetchingStatus}
          fetchAllJobs={fetchAllJobs}
        />
      </div>
    </div>
  )
}

export default JobsBody
