import React, {useEffect} from 'react';
import DimensionPageTemplate from '../components/DimensionPageTemplate';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';

const DigitalSelf: React.FC = () => {
  
  const { playTrack, currentTrack } = useMusicPlayer();
  useEffect(() => {
    if (!currentTrack || currentTrack.url !== TRACKS.DIGITAL.url) {
      playTrack(TRACKS.DIGITAL);
    }
  }, [currentTrack, playTrack]);

  const images = [
    'images/digital/digital1.png',
    'images/digital/digital2.png',
    'images/digital/digital3.png',
    'images/digital/digital4.png',
  ];

  return (
    <DimensionPageTemplate
      title="Digital Self"
      description="My online identity and footprint in the virtual space"
      contentTitle="How I present myself online"
      contentBody={
        <>
          <p className="mb-4">
            I chose these four as the representation of my digital self because they are the digital spaces I am most active in currently.
            I am a very lowkey person online, and I don't really post much about myself, I am more of a passive participant and merely react to memes and share
            the occasional story on my Instagram. I don't really get caught up in comparing myself to others online, because I know that for the most part,
            what we see online is not the full picture. I try to focus on my own life.
          </p>
          <p className="mb-4">
            I use discord to talk with friends, and I have recently begun to build up my presence on LinkedIn
            as I need to build my professional network for future opportunities. Instagram is where I post the most about going-ons in my life.
            I sometimes share a cool experience or meme on my story. I even have a highlight for stories about my girlfriend. I think that I am more 
            comfortable sharing here because I can kind of control(though not fully) who sees what I share and I value that very much. I am 
            aware that this is also doable in other sites but I just prefer Instagram for this purpose.
          </p>
          <p>
            The digital space I am most concerned with right now is my GitHub, because as a computer science student we are judged based on this
            profile, I have been trying to build up my profile by building my own projects but admittedly my github page is still unimpressive.
          </p>
        </>
      }
      images={images}
      accentColor="text-blue-400"
    />
  );
};

export default DigitalSelf;