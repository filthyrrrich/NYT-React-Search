import React from "react";
import "./Results.css";
// commponents from reactstrap
import { Card, CardHeader, CardBody } from 'reactstrap';

const Results = props => (
    <Card className="search-results" id="results">
        <CardHeader>
            <h2 className="card-header">Search Results</h2>
        </CardHeader>
        <CardBody>
            <ul className="list-group">{props.children}</ul>
        </CardBody>
    </Card>
);

export default Results;