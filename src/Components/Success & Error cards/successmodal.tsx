import './modals.css'
// import { Basebutton } from './button'
export const Success = () =>
{
    return (
        <div className="modal-overlay">
            <div className='modal'>
                <img src="" alt="" />
                <button type='reset'></button>
                <h3>Success!</h3>
                <p>Your action was completed successfully.
                    Your NexusStore account has been updated and the changes are now live.
                </p>
                {/* <Basebutton /> */}
            </div>
        </div>
    )
} 