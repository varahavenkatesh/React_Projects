import React from 'react';

const formThree = () => {

    return (
        <div className='container'>
            <div className='col-md-12 mt-5'>
                <form>

                    <label htmlFor='firstname'>First Name</label>
                    <input className='form-control' type='text' name='firstname'/>

                    <hr className="mb-4"/>
                    <button className='btn btn-primary btg-lg btn-block' type ='submit'>
                        Submit
                     </button>
                </form>
            
            </div>    
        </div>
    );
}

export default formThree;