import React from 'react'
import DashboardContent from './DashboardContent'
import DashboardMenu from './DashboardMenu'

export default function () {
  return (
    <div >
        <h1 className="my-1 mb-3">Dashboard</h1>
        <div className="container p-0 shadow bg-body border rounded" style={{"width":"80%","height":"70vh"}}>
            <DashboardMenu/>
            <DashboardContent/>
        </div>
    </div>
  )
}
