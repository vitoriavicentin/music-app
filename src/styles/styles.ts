import styled from 'styled-components';

export const ArtistInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ArtistImage = styled.img`
  border-radius: 50%;
  width: 120px; 
  height: 120px;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    text-align: center;

    /* Add styles for the preview button */
    button {
      margin-top: 5px; /* Adjust the margin as needed */
    }
  }
`;

export const ArtistName = styled.h2`
  color: #eb4034;
  margin-bottom: 5px;

  @media screen and (max-width: 600px) {
    margin: 5px 0;
  }
`;

export const PlaylistName = styled.p`
  color: #fff;

  @media screen and (max-width: 600px) {
    margin: 5px 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const TrackList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TrackItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #333;
  -webkit-transition: background-color 1s ease-out;
  &:hover {
    background-color: #333;
  }
`;

export const TrackTitle = styled.span`
  flex-grow: 1;
  color: #fff;
`;

export const PreviewButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const AudioPlayerContainer = styled.div`
  margin-top: 20px;
`;
