import Image from 'next/image';
// PwaAeexNNEPfN4PhECaOwwDi39urbzo6VklPZxCwbZ4miPz2SfvwBNDm

export default function Navigation(){
    return (
        <nav class="bg-white shadow-md text-sm">
            <div class="mx-auto h-[56px] flex justify-between px-8 md:px-16">
                <div class="flex gap-4">
                    <div class="flex">
                        <Image src="/logo.png" width="50" height="50" alt="Logo"/>
                    </div>
                    <div class="flex">
                        {/* left links */}
                        MK
                    </div>
                </div>
                <div class="flex">
                    RK
                    {/* right links */}
                </div>
            </div>
        </nav>
    )
}