import LocationPinIcon from '@mui/icons-material/LocationPin';
import  "./Outlet.css";

export default function Header(){

    return(
        <>
        <div className="container bg-gray-100">
            <div>
                <p>Track Order</p>
            </div>
            <div>

                <LocationPinIcon/>
                <a href="#" className='mr-5 text-blue-700'>Store locator</a>
                
                <a href="#" className='mr-5'>Sample Kit</a>
                <button className='btn btn-primary btn-sm'>Business Solution</button>
            </div>
        </div>
        </>
    )
}