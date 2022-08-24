import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doChangeTime, doDeletePlayer } from "../redux/PlayerReducer";

const GetAllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const { players: playersData, time: Datatime } = useSelector(
    (state) => state.PLAYER
  );
  const [time, setTime] = useState(Datatime / 60000);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setPlayers(playersData);
  }, [playersData]);

  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <div className="px-6">
      <div className="gap-2 py-1">
        <p>שנה זמן בדקות (זיכרון)</p>
        <label className="relative">
          <input
            min={1}
            onChange={(e) => setTime(parseInt(e.target.value))}
            value={time || ""}
            type="number"
            className="h-10 w-60 bg-gray-300 border-2 border-gray-400 text-center text-xl rounded-lg"
          />
        </label>
        <div className="py-1"></div>
        <button
          disabled={!time > 0}
          className={`bg-blue-300 ${
            time > 0 ? "hover:bg-blue-500" : ""
          } text-white font-bold py-2 px-4 rounded`}
          onClick={() => {time > 0 && dispatch(doChangeTime(time * 60000))}}
        >
          שמור
        </button>
      </div>
      <div className="py-2"></div>
      <div style={{ backgroundColor: "gray" }} className="py-2">
        <p className="italic hover:not-italic font-bold">Players ID</p>
      </div>
      {players.map((player, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-1 border border-gray-300"
          >
            <h3
              onClick={() => navigate(`/mainPage/getDataPlayer/${player.id}`)}
              className="shadow-1 p-8 rounded-lg w-full cursor-pointer hover:shadow-2xl hover:bg-blue-100 transition"
            >
              {player.id}
            </h3>
            <button
              onClick={() => dispatch(doDeletePlayer(player.id))}
              className="bg-red-300 hover:bg-red-500 rounded"
            >
              מחק שחקן
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllPlayers;
