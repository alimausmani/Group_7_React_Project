import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import CourseCards from './CourseCard';
import Something from './Something';
import Statistics from './Statistics';
import TrainerSection from './TrainerSection';
import Testimonials from './TestimonialsData';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CourseCards />
      <Something />
      <Statistics />
      <TrainerSection />
      <Testimonials/>
      <Footer />
    </>
  );
}

export default Home;
