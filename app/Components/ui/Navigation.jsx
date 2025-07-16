import Logo  from "../Logo";
import NavLink from '../NavLink';

export default function Navigation(){
    return (
        <nav className="bg-teal-900 text-white shadow-md text-lg">
            <div className="mx-auto h-[48px] flex px-8 md:px-16">
                <div className="flex gap-8">
                    <Logo className="text-white"/>
                    <div className="flex gap-8">
                        <NavLink href="/courses" text="Courses"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}