import React from 'react';

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
          className={`peer story-input ${disabled ? "story-input-disabled" : ""}`}
          disabled={disabled}
        />
        <label
          htmlFor={name}
          className="story-label"
        >
          {label}
        </label>
      </div>
    );
  }

const ReadAStory = () => {
    return (
        <div className="flex flex-col w-full p-5 sm:p-10 gap-8 rounded-md">
          <InputStoryInfo name="name" label="What is your name?" type="text" />
          <InputStoryInfo name="address" label="Address" />
          <InputStoryInfo name="password" label="Password" type="password" />
          <InputStoryInfo name="disabled" label="disabled" disabled />
        </div>
      );
    };

export default ReadAStory;
