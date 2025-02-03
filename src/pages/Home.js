import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/home.css';
import Carousel from '../components/Carousel';
import SwipeableSlide from '../components/SwipeableSlide';
import FeaturedProductSlide from '../components/FeaturedProductSlide';
import Swipeable from '../components/Swipeable';
import story from '../images/our-story.avif'
import image1 from "../images/image1.avif";
import image2 from "../images/image2.avif";
import image3 from "../images/image3.avif";
import env1 from "../images/env1.avif";
import env2 from "../images/env2.avif";
import env3 from "../images/env3.avif";
import env4 from "../images/env4.avif";
import recommand1 from "../images/recommand_1.jpg";
import recommand2 from "../images/recommand_2.webp";
import recommand3 from "../images/recommand_3.webp";
import recommand4 from "../images/recommand_4.webp";
import recommand5 from "../images/recommand_5.jpg";
import recommand6 from "../images/recommand_6.jpg";

const Home = () => {
    const images = [image1, image2, image3];
    const envImages = [env1, env2, env3, env4];
    const recommandImages = [
        recommand1, recommand2, recommand3, recommand4, recommand5, recommand6
      ];
    return (
        <div className='home'>
            <Carousel images={images} />
            <SwipeableSlide images={envImages}/>
            <FeaturedProductSlide />
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <Swipeable>
                    {recommandImages.map((img, index) => (
                    <img key={index} src={img} alt={`網頁設計, React 教學示範圖片-${index + 1}`} />
                    ))}
                </Swipeable>
            </div>
            <div className='image-container'>
                <img src={story} alt='網頁設計, React 教學, 探索故事' />
                <Link to="/about/story"><div className="go-button"><span>探索故事</span></div></Link>
            </div>
        </div>
    )
}

export default Home;