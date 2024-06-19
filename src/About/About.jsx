import React from "react";
import gif from "./gif.gif";
import image2 from "./image2.jpg";
import img3 from "./img3.jpg";
import img4 from   "./img4.jpg";
import img5 from   "./img5.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './About.css';


function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    const Data = [
        {
          name:"Rahul Gangwar",
          img:"img7.jpg",
          about:"Rahul is a skilled front-end developer who crafts seamless and interactive user interfaces.His expertise in HTML, CSS, and JavaScript ensures high-quality and responsive web designs."
        },
        {
          name:"Alima Usmani",
          img:"img11.jpg",
          about:"Alima brings her front-end development skills to life with vibrant and dynamic web pages.She specializes in utilizing modern frameworks like React to enhance user experience."
        },
        {
          name:"Archana singh",
          img:"img8.jpg",
          about:"Archana excels at building intuitive and user-friendly front-end applications.Her proficiency in front-end technologies makes her a key player in our development team."
        },
        {
          name:"Saina Sharma",
          img:"img6.png",
          about:"Saina is a front-end developer with a knack for creating visually appealing web interfaces.Her attention to detail and design ensures that every project meets high aesthetic standards."
        }
    ];
     
  return (
    <>
      <div className="container">
        {/* <h1>About Us</h1>
        <p>Welcome to our e-learning platform</p> */}

        <section>
          <div className="container1">
            <img src={gif} alt="" className="image" />
            <div className="title">
              <p id="title">
                Our mission is to provide a free, world-class education for
                anyone, anywhere.
              </p>
            </div>
            <div className="content">
              <h1 id="heading">
                A personalized learning resource for all ages
              </h1>
              <p>
                Welcome to e-learning, your ultimate destination for mastering
                coding skills online. Our mission is to empower aspiring
                developers with accessible and affordable coding courses in
                various programming languages. Founded in 2020, we believe in a
                hands-on approach to learning. Our curriculum is designed to be
                engaging and practical, ensuring that you can apply what you
                learn to real-world projects. With a variety of courses covering
                languages like Html, CSS, Python, JavaScript, and React, we
                cater to beginners and advanced learners alike. We provide a
                vibrant learning community, expert instructors, and hands-on
                projects. Join us to unlock your potential and turn your coding
                dreams into reality. Together, let's code the future!
              </p>
              <img src={img10} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="content2">
            <div className="mission">
              <h1>Our Mission</h1>
              <p>
                We're here to develop the best education in the world and make
                it universally available. Our global team works together to make
                language learning fun, free, and effective for anyone who wants
                to learn, wherever they are.Our mission is to make coding education 
                accessible and engaging for everyone, from beginners to advanced 
                developers. We offer a wide range of high-quality courses that focus 
                on practical skills and real-world applications.By utilizing the latest
                technology, we create interactive and immersive learning experiences. 
                Our goal is to inspire a passion for coding and empower individuals to 
                succeed in the tech industry.
              </p>
              <img src={image2} alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="content3">
              <h1>Our services</h1>
            <div className="service">
              <div className="first">
                <img src={img3} alt="" />
                <h2>Online courses</h2>
                <p>"Master the art of coding with our immersive
                   online courses. Learn from seasoned developers
                   and industry leaders. Build real-world projects
                   and enhance your problem-solving skills. 
                   Join our coding community and kickstart your
                   tech career today!"</p>
              </div>
              <div className="second">
                <img src={img4} alt="" />
                <h2>Course Progress Tracking</h2>
                <p>"Stay on top of your learning with our
                   course progress tracking. Monitor your
                   achievements and milestones in real-time.
                   Set goals and visualize your journey with 
                   detailed analytics. Keep motivated and on track
                   to complete your courses efficiently!"</p>
              </div>
              <div className="third">
                <img src={img5} alt="" />
                <h2>Assignment & Projects</h2>
                <p>"Master the art of coding with our immersive
                   online courses. Learn from seasoned developers
                   and industry leaders. Build real-world projects
                   and enhance your problem-solving skills. 
                   Join our coding community and kickstart your
                   tech career today!"</p>
              </div>
              <div className="forth">
                <img src={img9} alt="" />
                <h2>Mentorship and Tutoring</h2>
                <p>"Unlock your potential with personalized mentorship
                    and tutorials. Our experienced mentors provide one-on-one
                    guidance tailored to your learning pace and goals.
                    Benefit from in-depth tutorials that cover both 
                    fundamental and advanced topics."</p>
              </div>
            </div>
          </div>
        </section>

        <div className="outer">
          <h1>Our Team</h1>
          <div className="inner">
            <Slider {...settings}>
            {Data.map((d, index) => (
                 <div className="team" key= {index}>
                    <div className="team-image">
                      <img src={d.img} alt=""  />
                    </div>
                    <div className="team-info">
                      <p id="name">{d.name}</p>
                      <p>{d.about}</p>
                    </div>
                 </div>
            ))}
            </Slider>
          </div>
        </div>
      
        <section>
          <div className="content5">
            <h1>Latest News</h1>
            <p>Get our latest courses, trends and techniques used in learning.</p>

            <div className="news">
              <div className="div1">
                <img src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/blog-image-1.jpg" alt="Connect Between Self-Portraits and identity." />
                <a href="https://victorthemes.com/themes/rouen/connection-between-self-portraits-and-identity/"><p>Connect Between Self-Portraits and identity.</p></a>

                <div className="icon">
                  <img src="https://secure.gravatar.com/avatar/dc1427ca90db1152ccec33b95a63eb15?s=96&a"/>
                  <span>Antony Wills</span>
                </div>
              </div>

              <div className="div2">
                <img src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/blog-image-2.jpg"/>
                <a href="https://victorthemes.com/themes/rouen/i-turned-a-challenge-into-a-positive-thing/"><p>I Turned A Challenge Into A Positive Thing</p></a>
                <div className="icon">
                  <img src="https://secure.gravatar.com/avatar/b0fafc9680625bd3318db833d8427df8?s=96&d=mm&r=g"/>
                  <span>Jhon Florance</span>
                </div>
              </div>

              <div className="div3">
                <img src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/blog-image-4.jpg" alt="" />
                <a href="https://victorthemes.com/themes/rouen/choose-the-right-place-at-the-right-time/"><p>Choose The Right Place, At The Right Time</p></a>

                <div className="icon">
                  <img src="https://secure.gravatar.com/avatar/dc1427ca90db1152ccec33b95a63eb15?s=96&a"/>
                  <span>Antony Wills</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
