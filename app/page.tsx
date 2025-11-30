import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import HighlightsSection from "@/components/HighlightsSection"
import PricingSection from "@/components/PricingSection"
import CallToActionSection from "@/components/CallToActionSection"
import FooterSection from "@/components/FooterSection"

export default function Page() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <PricingSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  )
}
