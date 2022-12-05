import { useContext } from 'react';
import { RoomVoteContext } from './../context/RoomVoteContext';

export function useRoomVote() {
  const value = useContext(RoomVoteContext)

  return value;
}