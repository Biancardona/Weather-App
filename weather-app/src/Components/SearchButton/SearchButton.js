import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchButton() {
  const history = useHistory();
  let input = "";

  const handleChange = (e) => {
    input = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/city/${input}`);
  };

  return (
    <Form onSubmit={handleSubmit} inline>
      <FormControl
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
}
