import React from "react";
import "./Search.css";
// components from reactstrap 
import { Card, Form, FormGroup, Input, Label, Button, CardHeader, CardBody, } from 'reactstrap';

const Search = props => {
  return (
    <div>
      <Card className="search-form" id="search-form">
        
        <CardHeader>
            <h1 className="card-header">Search  For Articles</h1>
        </CardHeader>

        <CardBody>
            <Form>
                <FormGroup>
                    <Label for="genre" className="form-label">Genre:</Label>
                    <Input
                        value={props.query}
                        onChange={props.handleInputChange}
                        type="text" 
                        name="query" 
                        id="articleGenre" 
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="startYear" className="form-label">Start Year:</Label>
                    <Input 
                        value={props.start}
                        onChange={props.handleInputChange}
                        type="text" 
                        name="startYear" 
                        id="startYear" 
                        placeholder="(YYYY)" 
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="endYear" className="form-label">End Year:</Label>
                    <Input 
                        value={props.end}
                        onChange={props.handleInputChange}
                        type="text" 
                        name="endYear" 
                        id="endYear" 
                        placeholder="(YYYY)" 
                    />
                </FormGroup>

                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn btn-success">
                    Search
                </Button>
            </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Search;