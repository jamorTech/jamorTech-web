'use client'

import { useEffect, useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import JobApplicationTable from './components/job-application-table'
import JobApplicationModal from './components/job-application-modal'
import useAxiosPrivate from '@/app/hooks/useAxiosPrivate'

export default function JobApplicationsManager() {
  const [applications, setApplications] = useState([]) // Empty array initially
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [toggling, setToggling] = useState(null) // To track the toggling state

  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {

    const fetchApplications = async () => {
      try {
        const response = await axiosPrivate.get('/users/jobs', {
        })
          setApplications(response.data)
          setError(null)
      } catch (err) {
          setError(`Failed to load applications. Please try again later. ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()

  }, [axiosPrivate])

  const filterTypes = [
    { id: 'all', label: 'All Applications' },
    { id: 'approved', label: 'Approved', icon: FaCheck },
    { id: 'unapproved', label: 'Unapproved', icon: FaTimes },
  ]

  const filteredApplications =
    activeFilter === 'all'
      ? applications
      : applications.filter(app => app.approved === (activeFilter === 'approved'))

  const handleApprovalToggle = async (id) => {
    const updatedApplication = applications.find(app => app._id === id)
    if (!updatedApplication) return

    // Optimistic UI Update
    const originalApplications = [...applications]
    setApplications(applications.map(app =>
      app._id === id ? { ...app, approved: !app.approved } : app
    ))

    setToggling(id) // Indicate toggling for the specific application

    try {
      await axiosPrivate.patch(`/users/updateJob/${id}`, {
        approved: !updatedApplication.approved,
      })
    } catch (err) {
      // Rollback to the original state if the request fails
      setApplications(originalApplications)
      setError('Failed to update application. Please try again.')
    } finally {
      setToggling(null) // Reset toggling state
    }
  }

  if (loading) {
    return <p className="text-center mt-4">Loading applications...</p>
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">{error}</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-[#2E1065]">
              Job Applications Manager
            </h1>
          </div>

          <div className="p-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filterTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`
                    inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
                    ${activeFilter === type.id
                      ? 'bg-[#2E1065] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {type.icon && <type.icon className="w-4 h-4 mr-2" />}
                  {type.label}
                </button>
              ))}
            </div>

            {/* Applications Table */}
            <JobApplicationTable
              applications={filteredApplications}
              onApplicationSelect={setSelectedApplication}
              onApprovalToggle={handleApprovalToggle}
              toggling={toggling}
            />
          </div>
        </div>
      </div>

      {/* Application Detail Modal */}
      <JobApplicationModal
        application={selectedApplication}
        isOpen={!!selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  )
}
