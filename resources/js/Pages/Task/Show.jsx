import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/react";
import { TASK_PIORITY_CLASS_MAP, TASK_PIORITY_TEXT_MAP, TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "../constant";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, task,queryParams , tasks}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
         <div className="flex justify-between">
         <h2 className="text-xl font-semibold leading-tight text-gray-800">
         {`Tasks ${task.name}`}
         </h2>
         <Link
           href={route("task.index")}
           className="text-white px-2 py-1 rounded bg-red-600"
         >
           Back
         </Link>
       </div>
      }
    >
      <Head title={`Tasks ${task.name}`} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div>
                <img
                  src={task.image_path}
                  className="w-full h-64 object-cover"
                  alt=""
                />
              </div>
            <div className="p-6 text-gray-900">
            
              <div className="grid gap-1 grid-cols-2">
                <div>
                  <div>
                    <label className="font-bold">Task Id</label>
                    <p className="mt-1">{task.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Task Name</label>
                    <p className="mt-1">{task.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Task Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          TASK_STATUS_CLASS_MAP[task.status]
                        }
                      >
                        {TASK_STATUS_TEXT_MAP[task.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Task Pority</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          TASK_PIORITY_CLASS_MAP[task.piority]
                        }
                      >
                        {TASK_PIORITY_TEXT_MAP[task.piority]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Task Created By</label>
                    <p className="mt-1">{task.created_by.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold">Created At</label>
                    <p className="mt-1">{task.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Updated At</label>
                    <p className="mt-1">{task.updated_by.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Assigned User</label>
                    <p className="mt-1">{task.assignedUser.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Due Date</label>
                    <p className="mt-1">{task.due_date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                    <label className="font-bold">Description</label>
                    <p className="mt-1">{task.description}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>


    </AuthenticatedLayout>
  );
}
