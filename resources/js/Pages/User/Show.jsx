import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/react";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "../constant";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, user,queryParams , tasks}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
         <div className="flex justify-between">
         <h2 className="text-xl font-semibold leading-tight text-gray-800">
         {`Users ${user.name}`}
         </h2>
         <Link
           href={route("user.index")}
           className="text-white px-2 py-1 rounded bg-red-600"
         >
           Back
         </Link>
       </div>
      }
    >
      <Head title={`Users ${user.name}`} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div>
                <img
                  src={user.image_path}
                  className="w-full h-64 object-cover"
                  alt=""
                />
              </div>
            <div className="p-6 text-gray-900">
            
              <div className="grid gap-1 grid-cols-2">
                <div>
                  <div>
                    <label className="font-bold">User Id</label>
                    <p className="mt-1">{user.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">User Name</label>
                    <p className="mt-1">{user.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">User Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          USER_STATUS_CLASS_MAP[user.status]
                        }
                      >
                        {USER_STATUS_TEXT_MAP[user.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">User Created By</label>
                    <p className="mt-1">{user.created_by.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold">Created At</label>
                    <p className="mt-1">{user.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Updated At</label>
                    <p className="mt-1">{user.updated_by.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Due Date</label>
                    <p className="mt-1">{user.due_date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                    <label className="font-bold">Description</label>
                    <p className="mt-1">{user.description}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white p-2  shadow-sm sm:rounded-lg">
           <TasksTable tasks={tasks} queryParams={queryParams}
            // routeName="user.show" 
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
