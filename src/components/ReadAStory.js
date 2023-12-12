import React from 'react';

function SubmitButton() {
  return (
    <div className="form_submit">
      <button className="mybutton" type="submit">
        Submit
      </button>
    </div>
  );
}

function InputStoryInfo({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    disabled,
  }) {
    return (
      <div className="input-story-info">
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          aria-label={label}
          className={`peer story-input`}
          disabled={disabled}
        />
        {/* <label
          htmlFor={name}
          className="story-label"
        >
          {label}
        </label> */}
      </div>
    );
  }

const ReadAStory = () => {
    return (
        <div className="form_input">
          <InputStoryInfo name="name" placeholder="What is your name?" type="text" />
          <InputStoryInfo name="age" placeholder="How old are you?" type="number"/>
          <InputStoryInfo name="password" placeholder="Password" type="password" />
          <InputStoryInfo name="not disabled" placeholder="not disabled"/>
          <SubmitButton/>
        </div>
      );
    };

export default ReadAStory;
