import './modals.css'
// import { Basebutton } from './button'
export const Success = () =>
{
    return (
        <div className="modal-overlay">
                <div className='modal'>
                <img src="" alt="" />
                <button type='reset'></button>
                <h3>Something went wrong</h3>
                <p>We encountered an error while processing your request
                    Please check your connection and try again.
                </p>
                {/* <Basebutton /> */}
                {/* <Basebutton /> */}
            </div>
        </div>
    )
} 

//How to work with json server.
//Consuming endpoints.