import React, {useEffect} from 'react';
import DimensionPageTemplate from '../components/DimensionPageTemplate';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';

const SpiritualSelf: React.FC = () => {

  const { playTrack, currentTrack } = useMusicPlayer();
    useEffect(() => {
      if (!currentTrack || currentTrack.url !== TRACKS.SPIRITUAL.url) {
        playTrack(TRACKS.SPIRITUAL);
      }
    }, [currentTrack, playTrack]);

  const images = [
    './images/spiritual/spiritual1.jpg',
    './images/spiritual/spiritual2.jpg',
    './images/spiritual/spiritual3.jpg',
    './images/spiritual/spiritual4.jpg',
  ]


  return (
    <DimensionPageTemplate
      title="Spiritual Self"
      description="My Spiritual Journey"
      contentTitle="Life as a Christian"
      contentBody={
        <>
          <p className="mb-8">
            Ever since I was young, I have been exposed to the Christian faith through my parents. <br/>
            My parents are faithful Catholics and have guided me to follow in the footsteps of God as well.<br/>
          </p>

          <p className="mb-8">
            I do sometimes waver and doubt, my purpose, existence, and faith, but everytime I struggle, <br/>
            I find guidance and strength in my faith. I am very lucky to have been part of my family and I am very proud of them, <br/>
            because they love me so much and show me how God works in wonderful ways in our world.
          </p>

          <p>
            Everyday is a constant journey of discovery for me, a quest to find my meaning and purpose in life. I find harmony<br/> in knowing that I may never
            fully understand everything, but through love from friends and family, and faith, I can be at peace <br/>if I just try my best anyways.
          </p>
        </>
      }
      images={images}
      accentColor="text-indigo-400"
    />
  );
};

export default SpiritualSelf;