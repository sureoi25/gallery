import React, {useEffect} from 'react';
import DimensionPageTemplate from '../components/DimensionPageTemplate';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { TRACKS } from '../constants/tracks';


const MaterialSelf: React.FC = () => {

  const { playTrack, currentTrack } = useMusicPlayer();
  useEffect(() => {
    if (!currentTrack || currentTrack.url !== TRACKS.MATERIAL.url) {
      playTrack(TRACKS.MATERIAL);
    }
  }, [currentTrack, playTrack]);
  
  const images = [
    './images/material/material1.jpg',
    './images/material/material2.jpg',
    './images/material/material3.jpg',
    './images/material/material5.jpg',
  ];

  return (
    <DimensionPageTemplate
      title="Material Self"
      description="The material possessions that give the clearest glimpse into who I am"
      contentTitle="The important things"
      contentBody={
        <>
          <p className="mb-4">
            These possessions of mine are external manifestations of my self.
            These are the things I hold dear, and the items that truly grasp the essence of who I am.
          </p>
          <p className="mb-4">
            My pair of worn-out basketball shoes, was actually a birthday gift from my parents. It
            is a symbol of my love for the sport of basketball, and it is a reminder of my parents' love.<br/>
          </p>

          <p className="mb-4">
            Reading Dostoevsky works is a recent addition to my repertoire. During my highschool years, I would
            pick up a few books here and there, like Mitch Albom and Percy Jackson books, but recently I have been influenced 
            by a friend to read Dostoevsky, and have been enjoying it ever since. It represents how I am still growing and learning to love new things.<br/>
          </p>

          <p className="mb-4">
            My computer and laptop are the quintessential tools of my computer science student/gamer self. Although now, I have since relegated the duty of gaming to my computer only, and reserved work for my laptop.
            My laptop is a recent acquisition because I kept getting distracted when I try to work on my computer and also since portability was much more of a need than I first thought.
            I think that they are the best representation of my passion for software engineering, and my love for gaming. The charmander lego on my desk is also something my girlfriend and I built together in one of our dates. 
            The keyboard is a gift from my sister or rather an acquisition from her, because I convinced her to give it to me HHAHAA.
          </p>

          <p>
            My high school diploma covered in relics from my girlfriend(letters and pictures), are a reminder of my highschool years. It signifies how far I have come, and how
            much more there is left for me to experience and learn from. It is covered by my girlfriend's relics because she was the highlight of my senior high school
            years.
          </p>
        </>
      }
      images={images}
      accentColor="text-amber-400"
    />
  );
};

export default MaterialSelf;