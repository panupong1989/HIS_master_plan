import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Page1PatientJourney from './pages/Page1PatientJourney'
import Page2Registration from './pages/Page2Registration'
import Page3OPD from './pages/Page3OPD'
import Page4LabRadiology from './pages/Page4LabRadiology'
import Page5Pharmacy from './pages/Page5Pharmacy'
import Page6IPD from './pages/Page6IPD'
import Page7Finance from './pages/Page7Finance'
import Page8Integration from './pages/Page8Integration'
import PageTeam from './pages/PageTeam'
import PagePlan from './pages/PagePlan'
import PageDashboard from './pages/PageDashboard'
import PageHISExample from './pages/PageHISExample'
import PageHISIntro from './pages/PageHISIntro'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/his-example/intro" replace />} />
        <Route path="/patient-journey" element={<Page1PatientJourney />} />
        <Route path="/registration" element={<Page2Registration />} />
        <Route path="/opd" element={<Page3OPD />} />
        <Route path="/lab" element={<Page4LabRadiology />} />
        <Route path="/pharmacy" element={<Page5Pharmacy />} />
        <Route path="/ipd" element={<Page6IPD />} />
        <Route path="/finance" element={<Page7Finance />} />
        <Route path="/integration" element={<Page8Integration />} />
        <Route path="/team" element={<PageTeam />} />
        <Route path="/plan" element={<PagePlan />} />
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/his-example" element={<Navigate to="/his-example/intro" replace />} />
        <Route path="/his-example/intro" element={<PageHISIntro />} />
        <Route path="/his-example/:screenId" element={<PageHISExample />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
