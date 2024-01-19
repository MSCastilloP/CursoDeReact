import { React } from "react";
import PropTypes from "prop-types";

const HolaMundo = (a, b) => {
  return a + b;
};
//rafc
const newMessage = "Santiago";
export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>

      <h1>{HolaMundo(1, 10)}</h1>
      <div>{newMessage}</div>
      <p>Soy un subtitulo</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay title",
};
