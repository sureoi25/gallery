import React, {useEffect} from 'react';
import DimensionPageTemplate from '../components/DimensionPageTemplate';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';

const SexualSelf: React.FC = () => {

  const { playTrack, currentTrack } = useMusicPlayer();
    useEffect(() => {
      if (!currentTrack || currentTrack.url !== TRACKS.SEXUAL.url) {
        playTrack(TRACKS.SEXUAL);
      }
    }, [currentTrack, playTrack]);

  const images = [
    '/images/sexual/love1.jpg',
    '/images/sexual/love2.png',
    '/images/sexual/love3.jpg',
    '/images/sexual/love4.jpg',

  ];

  return (
    <DimensionPageTemplate
      title="Sexual Self"
      description="My love"
      contentTitle="A glimpse into our love"
      contentBody={
        <>
          <p className="mb-4">
            I am a heterosexual male, and I am a man and am very attracted to my girlfriend. I think that I express myself fairly manly, 
            <br/>but I do sometimes wear women's pants since I can fit into them and they are cheaper, and sometimes look better on <br/>me compared to male pants.
          </p>
          <p className="mb-4">
            For this part of myself, it is going to be mainly about my girlfriend, and our relationship. HAHA <br/>
            I don't think that the sexual parts of ourselves should necessarily be public information. <br/>
            It is a common trend nowadays to overshare and I am of the opinion that it is no longer healthy and I don't want to be a part of it.
          </p>

          <p>
            So this wonderful lady, is Atasha, she is my girlfriend, and I love her very much, <br/>
            I have been with her for 2 years and 3 months, and I am the luckiest to have her in my life.
          </p>

          <p>
            We love to go on dates, watch movies(she loves horror, and barbie movies), and just spend time together.<br/>
            She is the most gorgeous woman in the world, and I am extremely happy to be by her side.<br/>
            She is the person I can share everything to without filter for fear of judgement, and she makes me feel safe.
          </p>
        </>
      }
      images={images}
      accentColor="text-purple-400"
    />
  );
};

export default SexualSelf;