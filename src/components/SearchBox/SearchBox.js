import { PropTypes } from 'prop-types';

import {
  Form,
  Wrapper,
  Input,
  Button,
  Label,
} from './SearchBox.styled';

import { useState } from 'react';

export const SearchBox = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onChange(searchQuery);
    setSearchQuery('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>
        <Input
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
          onChange={handleInput}
        />
      </Form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
