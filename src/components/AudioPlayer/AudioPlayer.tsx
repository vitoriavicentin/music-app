// AudioPlayer.tsx
import React, { useRef, useEffect } from 'react';
import { StyledAudioPlayer } from './style'

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.load();
    }
  }, [src]);

  return (
    <StyledAudioPlayer>
      <audio ref={audioRef} controls={true} style={{ width: '100%' }} autoPlay={true}/>
    </StyledAudioPlayer>
  );
};

export default AudioPlayer;
