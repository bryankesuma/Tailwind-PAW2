import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function PublicLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <ThemeSwap />
            <main className='flex flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout