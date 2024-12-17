import { HomeMyCourse } from '@/components/Home/home-course'
import HomeHeader from '@/components/Home/HomeHeader'

const LandingPage: React.FC = () => {
  return (
    <div className="px-6">
      <HomeHeader />
      <HomeMyCourse />
    </div>
  )
}

export default LandingPage
