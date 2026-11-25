import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function PublicLayout() {
    return (
        <div>
            <Navbar />
            <ThemeSwap />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout