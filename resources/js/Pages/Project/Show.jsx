import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/react";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "../constant";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, project,queryParams , tasks}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
         <div className="flex justify-between">
         <h2 className="text-xl font-semibold leading-tight text-gray-800">
         {`Projects ${project.name}`}
         </h2>
         <Link
           href={route("project.index")}
           className="text-white px-2 py-1 rounded bg-red-600"
         >
           Back
         </Link>
       </div>
      }
    >
      <Head title={`Projects ${project.name}`} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div>
                <img
                  src={project.image_path}
                  className="w-full h-64 object-cover"
                  alt=""
                />
              </div>
            <div className="p-6 text-gray-900">
            
              <div className="grid gap-1 grid-cols-2">
                <div>
                  <div>
                    <label className="font-bold">Project Id</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Project Name</label>
                    <p className="mt-1">{project.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Project Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Project Created By</label>
                    <p className="mt-1">{project.created_by.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold">Created At</label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Updated At</label>
                    <p className="mt-1">{project.updated_by.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold">Due Date</label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                    <label className="font-bold">Description</label>
                    <p className="mt-1">{project.description}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white p-2  shadow-sm sm:rounded-lg">
           <TasksTable tasks={tasks} queryParams={queryParams}
            // routeName="project.show" 
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
