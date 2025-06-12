import Header from "./_components/Header"
import HeroSection from "./_components/HeroSection"
import Features from "./_components/Features"
import Review from "./_components/Review"
import Footer from "./_components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Features />
      <Review />
      <Footer />
    </div>
  )
}
