const SelectInput = ({name, value, description, error, label, options}) => {

    return( 
        <fieldset class="flex items-center justify-between">

            <label class="ml-4 flex flex-col" for={name}>

                {/* Label of the input */}
                {label}

                {/* If there was an error... this will show the error */}
                <span class="text-sm text-red-500 font-medium">{error}</span>

            </label>

            <div class="relative w-64 h-10">
                <select class="absolute top-0 bottom-0 right-0 left-0 border border-gray-400 rounded-2xl px-4 text-gray-400 pr-8" name={name} id={name} value={value}>

                    {options.map(option => {
                        return (
                            <option value={option.id}>
                                {option.name}
                            </option>
                        );
                    })}

                </select>
                <span class="absolute font-bold text-xs bottom-7 right-4 bg-white text-gray-400 px-2 py-1">{description}</span>
            </div>

        </fieldset>
    )
}

export default SelectInput;