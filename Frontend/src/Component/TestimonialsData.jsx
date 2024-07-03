import './Testimonials.css';

const testimonialsData = [
  {
    text: 'Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.',
    author: 'StackOverflow',
    details: '37,076 responses collected',
    imgSrc: 'https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg',
    link:'https://www.udemy.com/topic/web-development/',
    linkText: 'View Web Development courses'
  },
  {
    text: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    author: 'Alvin Lim',
    details: 'Technical Co-Founder, CTO at Dimensional',
    imgSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
    link: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/',
    linkText: 'View this iOS & Swift course'
  },
  {
    text: 'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.',
    author: 'William A. Wachlin',
    details: 'Partner Account Manager at Amazon Web Services',
    imgSrc: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
    link: 'https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/',
    linkText: 'View this AWS course'
  },
  {
    text: 'With Udemy Business employees are able to marry the two together, technology and consultant soft skills to help drive their careers forward.',
    author: 'Ian Stevens',
    details: 'Head of Capability Development, North America at Publicis Sapient',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1669879870083-677c33ebde06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
    link: 'https://business.udemy.com/case-studies/publicis-sapient/?_sft_resource_type=case-study&ref=ub-home-customerstories--variant-102500&utm_type=mx',
    linkText: 'Read full story'
  }
];

const Testimonials = () => {
  return (
    <div className='whole-container'>
      <h1>See what others are achieving through learning</h1>
    <div className="contain">
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.text}</p>
            <div className="author">
              <img src={testimonial.imgSrc} alt={testimonial.author} />
              <div>
                <div>{testimonial.author}</div>
                <div>{testimonial.details}</div>
              </div>
            </div>
            <a href={testimonial.link}>{testimonial.linkText}</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
