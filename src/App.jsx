import './App.css'
import {
  Header,
  Hero,
  DashboardPreview,
  CoreFeatures,
  FeatureDetails,
  CtaBanner,
  Footer
} from './components/LandingPage'

export default function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <DashboardPreview />
        <CoreFeatures />
        <FeatureDetails />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}