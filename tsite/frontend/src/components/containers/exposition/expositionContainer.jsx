import React from "react";
import Exposition from "../../layouts/exposition/exposition";
import { useEffect } from "react";
import { getExposition } from "../../../actions/exposition";
import { useDispatch, useSelector } from "react-redux";

// ###################################
const Preloader = () => {
  return <div>LOADING...</div>;
};

const NotFound = () => {
  return <div>404:PAGE NOT FOUND</div>;
};
// ###################################

const ExpositionContainer = () => {

  const dispatch = useDispatch();
  const expositionState = useSelector(state => state.expositionReducer);

  const preloaderOr404 =
    expositionState.fetching == 404 ? <NotFound /> : <Preloader />;

  useEffect(() => {
    dispatch(getExposition());
  }, []);

  return expositionState.fetching ? (
    preloaderOr404
  ) : (
    <Exposition data={expositionState.exposition} />
  );
};

export default ExpositionContainer;
