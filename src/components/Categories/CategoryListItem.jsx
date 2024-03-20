/**
 * @param {object} props - The props for the component.
 * @param {object} props.category - The category object.
 * @param {boolean} props.active - Whether the category is active.
 * @param {function} props.clickHandler - The function to handle the click event.
 * @returns {JSX.Element} The CategoryListItem component.
 */
const CategoryListItem = ({category, active, clickHandler}) => 
{
    /**
     * These are the classes that it will be used in this component.
     */
    let defaultClasses = "flex items-center justify-between w-full px-4 py-2 font-medium transition duration-100 cursor-pointer hover:bg-light-primary hover:text-blue-primary rounded-4xl text-light-auxiliary"
    let activeClasses = "flex items-center justify-between w-full px-4 py-2 font-medium transition duration-100 cursor-pointer bg-light-primary text-blue-primary rounded-4xl";

    /**
     * Setting the default class and check if it is an active item, than its state.
     */
    let className = defaultClasses;
    if (active) 
    {
        className = activeClasses;
    }
        
    /**
     * Function to handle the click event.
     * @param {string} categoryId - The ID of the category.
     */
    function handleClick(categoryId) 
    {
        clickHandler(categoryId)    
    }

    return(
        <div key={category.id} className={className} onClick={() => handleClick(category.id)}>
            <span>{category.name}</span>

            {/* Here we show how many content is created for this specific category */}
            <span></span>
        </div>
    );
}

export default CategoryListItem;
