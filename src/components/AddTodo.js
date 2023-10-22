import React, { useState } from 'react';

export const AddTodo = (props) => {
  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title and Desc cant be empty');
    } else {
      props.addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="container mb-3">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
