import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({myTasks,pendingMy,pendingTotal,progessMy,progessTotal,completedMy,completedTotal}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 gap-2 g">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                           <p>Pending Tasks</p>
                           <span>{pendingMy}</span>
                           <span className='mx-2'>/</span>
                           <span>{pendingTotal}</span>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                           <p>Progess Tasks</p>
                           <span>{progessMy}</span>
                           <span className='mx-2'>/</span>
                           <span>{progessTotal}</span>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                           <p>Completed Tasks</p>
                           <span>{completedMy}</span>
                           <span className='mx-2'>/</span>
                           <span>{completedTotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
