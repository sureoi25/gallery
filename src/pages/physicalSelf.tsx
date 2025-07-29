import React, {useEffect} from 'react';
import DimensionPageTemplate from '../components/DimensionPageTemplate';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';

const PhysicalSelf: React.FC = () => {

  const { playTrack, currentTrack } = useMusicPlayer();
  useEffect(() => {
    if (!currentTrack || currentTrack.url !== TRACKS.PHYSICAL.url) {
      playTrack(TRACKS.PHYSICAL);
    }
  }, [currentTrack, playTrack]);

  const images = [
    '/gallery/images/physical/physical1.jpg',
    '/gallery/images/physical/physical2.jpg',
    '/gallery/images/physical/physical3.jpg',
    '/gallery/images/physical/physical4.jpg',

  ];

  return (
    <DimensionPageTemplate
      title="Physical Self"
      description="How I view myself physically"
      contentTitle="Physical Self"
      contentBody={
        <>
          <p className="mb-4">
            Physically, I would describe myself as slim, lanky, average height, prominent nose, a bit of a hunchback, 
            <br/>tall legs, insanely good proportions, attractive eyes, thick eyebrows, dashing hair, and insanely handsome.
            
          </p>
          <p>
            Fitness wise, I would like to think that I am in the top 1% of people who are fit<br />
            I play basketball,run, walk going home, and do a lot of physical activities.<br/>
            Compared to the average person my height, I am a little bit weaker because I am slim <br/>
            But in everything else, I am confident that I could compete with the worlds best <br/>
            <p className="text-green-500 font-bold text-2xl">BECAUSE I AM MICHAEL LEBRON JORDAN JAMES</p>

          </p>
        </>
      }
      images={images}
      accentColor="text-green-400"
    />
  );
};  

export default PhysicalSelf;