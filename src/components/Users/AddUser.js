import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserhandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'please enter a valid age (>0).',
      });

      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserhandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' ref={nameInputRef} />
            <label htmlFor='age'>Age (Years)</label>
            <input id='username' type='number' ref={ageInputRef} />
            <Button type='submit'>Add User</Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddUser;
