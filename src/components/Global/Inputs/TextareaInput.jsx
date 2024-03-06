import React from 'react';

const TextareaInput = ({ name, error, description, value, label }) => {
  return (
    <fieldset class="flex flex-col justify-between space-y-2">
        <label class="ml-4" for={name}>
            {label}
            <span class="text-sm text-red-500 font-medium">{ error }</span>
        </label>
        <p class="text-sm font-medium text-gray-400">
            {description}
        </p>
        <textarea class="w-full h-48 border border-gray-400 rounded-2xl p-4 resize-none" name={name} id={name}>
                {value}
        </textarea>
    </fieldset>


  );
};

export default TextareaInput;
