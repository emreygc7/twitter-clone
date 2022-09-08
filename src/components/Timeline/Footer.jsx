
const Footer = () => {
  return (
    <footer className='mt-4 pr-6 pl-6 text-sm text-darkgray'>
        <nav className='flex flex-wrap gap-2'>
            <div className='hover:underline'>
                <a href="#">Terms of Service</a>
            </div>
            <div className='hover:underline'>
                <a href="#">Privacy Policy</a>
            </div>
            <div className='hover:underline'>
                <a href="#">Cookie Policy</a>
            </div>
            <div className='hover:underline'>
                <a href="#">Imprint</a>
            </div>
            <div className='hover:underline'>
                <a href="#">Accessibility</a>
            </div>
            <div className='hover:underline'>
                <a href="#">Ads info</a>
            </div>
            <div className='hover:underline'>
                <a href="#">More...</a>
            </div>
        </nav>
        <span className='text-xs'>© 2022 Twitter, Inc.</span>
    </footer>
  )
}

export default Footer