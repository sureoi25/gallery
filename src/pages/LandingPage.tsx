import React, {useEffect} from 'react';
import RadialNavigationButton from '../components/radialNavigationButton';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';


const LandingPage: React.FC = () => {

  const { playTrack, currentTrack } = useMusicPlayer();

  useEffect(() => {
    if (!currentTrack || currentTrack.url !== TRACKS.LANDING.url) {
      playTrack(TRACKS.LANDING);
    }
  }, [currentTrack, playTrack]);


  const navItems = [
    { label: 'Physical', path: '/physical-self' },
    { label: 'Material', path: '/material-self' },
    { label: 'Sexual', path: '/sexual-self' },
    { label: 'Political', path: '/political-self' },
    { label: 'Spiritual', path: '/spiritual-self' },
    { label: 'Digital', path: '/digital-self' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-dark-gray p-8">
      {/*header*/}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-spotify-green mb-4">Me, Myself, and I</h1>
        <p className="text-2xl text-spotify-text-gray">Different layers of me</p>
      </header>

      {/*intro*/}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-spotify-light-gray rounded-xl p-8 mb-6 hover:bg-spotify-light-gray/80 transition-all duration-300 shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">About I, Judd N. Tagalog</h2>
          
          <div className="text-spotify-text-gray leading-relaxed space-y-4">
            <p className="text-xl">
              Who is Judd? 
            </p>
            
            <p className="font-bold text-green-500 text-xl">
              If you thought 6 foot 5 inches, insanely handsome, chiseled jawline, insanely hot
            </p>

            <p className="text-xl">
              Then you are 50% correct....... I think
            </p>

            <p className="text-xl">
              I still don't really know myself either so your guess is as good as mine
            </p>

            <p className="text-3xl mt-250 font-bold">
              joke ra gani,
            </p>

            <p className="text-3xl mt-50 font-bold">
              of course not,
            </p>

            <p className="text-3xl mt-50 font-bold">
              I know myself a little better than you do
            </p>
            
            <p className="text-center text-spotify-light-green font-medium">
              Press the circle below to navigate between the layers of Judd
            </p>
          </div>
        </div>
      </div>

      {/*radial navigation circle button*/}
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="mb-10">
        </div>
        
        <RadialNavigationButton items={navItems} radius={160} />
      </div>

      {/*footer*/}
      <footer className="text-center text-spotify-text-gray mt-20">
        <div className="max-w-2xl mx-auto border-t border-spotify-light-gray pt-8">
          <p className="mb-4 italic">
            A quote I try to live by: <br/>
            "One can't understand everything at once, we can't begin with perfection all at once! In order to reach perfection one must begin by being ignorant of a great deal. And if we understand things too quickly, perhaps we shan't understand them thoroughly".- Fyodor Dostoevsky from The Idiot
          </p>
          <p className="text-sm">
            @2025 shoutout mama, papa, friends, and my lalabs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;