import React  from 'react';

const AddItemFormComponent = ({createFunction, onSuccess}) => {
    const submitHandler = async (e) => {
        e.preventDefault();
        const newItem = await createFunction(e.currentTarget.name.value);
        if(!newItem) {
            console.error('Item already exists!');
            return;
        }
        onSuccess();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name='name' />
            </div>
            
            <div className='form-control'>
                <button type='submit'>Create</button>
            </div>
        </form>
    );
}
 
export default AddItemFormComponent;
