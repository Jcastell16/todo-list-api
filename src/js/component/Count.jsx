import React from "react";
import PropTypes from "prop-types";

const Count = (props) => {
	return <small className="text-left">{props.items} items left</small>;
};

Count.propTypes = {
	items: PropTypes.number,
};
export default Count;
