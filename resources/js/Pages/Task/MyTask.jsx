
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {  Head, Link } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({ auth, tasks, queryParams = null }) {
  
 
  
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        
        <div className="flex justify-between">
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Tasks
        </h2>
        <Link
          href={route("task.create")}
          className="text-white px-2 py-1 rounded bg-green-600"
        >
          Create
        </Link>
      </div>
      }
    >
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
             <TasksTable tasks={tasks} queryParams={queryParams} 
            //  routeName={'task.index'}
            hideProjectColomn={true}
             />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
