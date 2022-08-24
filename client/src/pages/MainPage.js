import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { doGetAllPlayers } from "../redux/PlayerReducer";
import { GetAll } from "./utils";

const url = "http://localhost:8000/api/player";

const MainPage = () => {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.PLAYER);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await GetAll(url);
      dispatch(doGetAllPlayers(data));
    };
    fetchData();
    console.log("Once !");
  }, [dispatch]);

  useEffect(() => {
    console.log(time);
  }, [time]);


  useEffect(() => {
      const interval = setInterval(async () => {
        const { data } = await GetAll(url);
        dispatch(doGetAllPlayers(data));
        console.log(`${time / 60000} minutes passed !`);
      }, time);
      return () => clearInterval(interval);
  }, [dispatch, time])
  

  // setInterval(() => {
  //   const fetchDataEveryFiveMinutes = async () => {
  //     const { data } = await GetAll(url);
  //     dispatch(doGetAllPlayers(data));
  //   };
  //   fetchDataEveryFiveMinutes();
  //   console.log(`${time / 60000} minutes passed !`);
  // }, time);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainPage;
