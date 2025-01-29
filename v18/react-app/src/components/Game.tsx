import produce from "immer";
import { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick = () => {
    setGame(
      produce((draft) => {
        draft.player.name = "Alex";
      })
    );

    // setGame({ ...game, player: { ...game.player, name: "Alex" } });
  };
  return (
    <>
      <div>Game {game.player.name}</div>
      <button onClick={handleClick}>Watch</button>
    </>
  );
};

export default Game;
