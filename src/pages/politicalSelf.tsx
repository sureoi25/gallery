import React, {useEffect} from 'react';
import DimensionPageTemplate from '../components/DimensionPageTemplate';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';

const PoliticalSelf: React.FC = () => {

  const { playTrack, currentTrack } = useMusicPlayer();
    useEffect(() => {
      if (!currentTrack || currentTrack.url !== TRACKS.POLITICAL.url) {
        playTrack(TRACKS.POLITICAL);
      }
    }, [currentTrack, playTrack]);

  const images = [
    '/gallery/images/political/world government.jpg',
    '/gallery/images/political/leni.jpg',
    '/gallery/images/political/political3.png',
    '/gallery/images/political/political4.jpg',
  ];

  return (
    <DimensionPageTemplate
      title="Political Self"
      description="My beliefs, values, and ideologies"
      contentTitle="My political alignment and identity"
      contentBody={
        <>
          <p className="mb-4">
            I am quite a liberal person, as I believe in progressive changes, although I do not fully align with liberalism as there are somethings I do not support.
            I also believe in the separation of church and state, even though I am a catholic, I still think there should be distinction in the scope of each entity.
            I am not very politically active, and admittedly I am also not too politically aware. As I believe that most of the time, all candidates are the same, corrupt and incompetent.
            But I do believe that it is important to be aware of the political landscape in our country and the world.
          </p>
          <p className="mb-4">
            Last presidential election, I was unable to vote, but I did support Leni because I believed that she was the best choice. I also stayed out of 
            political debates in digital spaces during that time because I thought a lot of them were toxic and unproductive.
            I try to stay informed about current events, but I am still not very knowledgeable about politics.
          </p>
          <p>
            This area of myself is one that I am still exploring, I am actively trying to improve upon this because I do know just how
            important it is to be involved politically, because it affects everyone. Our nation's future is at stake, and I want to be
            a part of the solution.
          </p>
        </>
      }
      images={images}
      accentColor="text-red-400"
    />
  );
};

export default PoliticalSelf;