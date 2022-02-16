import React, { Component } from "react";
import PropTypes from "prop-types";

export const Footer = (props) => {
	return (
		<div className="bg-dark mt-5 mb-0">
			<p className="text-white p-4 text-center mb-0">
				<a href={props.link}>
					Copyright &copy; {props.owner} {props.date}
				</a>
			</p>
		</div>
	);
};

Footer.propTypes = {
	owner: PropTypes.string,
	date: PropTypes.string,
	link: PropTypes.string,
};