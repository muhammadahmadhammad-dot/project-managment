import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, task, projects, users }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: task.name || "",
    image_path: task.image_path || "",
    status: task.status || "",
    description: task.description || "",
    due_date: task.due_date || "",
    piority: task.piority || "",
    project: task.project || "",
    assignedUser: task.assignedUser || "",    
    _method: "PUT",
  });
  const onSubmit = (e) => {
    e.preventDefault();

    post(route("task.update", task.id));
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Task Edit
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
      <Head title="Task Create" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8  shadow sm:runded-lg"
            >
              <div className="mb-4">
                <img src={task.image_path} alt="" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_project" value={"Task Porject"} />
                <SelectInput
                  id="task_project"
                  name="project"
                  value={data.project}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("project", e.target.value)}
                >
                  <option value="">Select</option>
                  {projects &&
                    projects.data.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                </SelectInput>
                <InputError message={errors.project} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="task_name" value={"Task Name"} />
                <TextInput
                  id="task_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_image_path" value={"Task Image"} />
                <TextInput
                  id="task_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_due_date" value={"Task Dedline"} />
                <TextInput
                  id="task_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("due_date", e.target.value)}
                />
                <InputError message={errors.due_date} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="task_description"
                  value={"Task Description"}
                />
                <TextAreaInput
                  id="task_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("description", e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_user" value={"Assign Task to User"} />
                <SelectInput
                  id="task_user"
                  name="assignedUser"
                  value={data.assignedUser}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("assignedUser", e.target.value)}
                >
                  <option value="">Select</option>
                  {users &&
                    users.data.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                </SelectInput>
                <InputError message={errors.assignedUser} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_status" value={"Task Status"} />
                <SelectInput
                  id="task_status"
                  name="status"
                  value={data.status}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="pending">Pending</option>
                  <option value="in_progess">In Progess</option>
                  <option value="completed">Completed</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_piority" value={"Task Piority"} />
                <SelectInput
                  id="task_piority"
                  name="piority"
                  value={data.piority}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("piority", e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="high">In High</option>
                  <option value="medium">Medium</option>
                </SelectInput>
                <InputError message={errors.piority} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <button className="px-3 py-2 text-white bg-green-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
