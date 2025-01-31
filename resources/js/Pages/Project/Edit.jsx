import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth ,project}) {
  const { data, setData, post, errors, reset } = useForm({
      image: "",
    name: project.name || "",
    image_path: project.image_path || "",
    status: project.status || "",
    description: project.description || "",
    due_date: project.due_date || "",
    _method : 'PUT',
  });
  const onSubmit = (e) => {
    e.preventDefault();

    post(route("project.update" , project.id));
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Project Edit
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
      <Head title="Project Create" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8  shadow sm:runded-lg"
            >
                <div className="mb-4">
                    <img src={project.image_path} alt="" />
                </div>
              <div>
                <InputLabel
                  htmlFor="project_image_path"
                  value={"Project Image"}
                />
                <TextInput
                  id="project_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="project_name"
                  value={"Project Name"}
                />
                <TextInput
                  id="project_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="project_due_date"
                  value={"Project Dedline"}
                />
                <TextInput
                  id="project_due_date"
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
                  htmlFor="project_description"
                  value={"Project Description"}
                />
                <TextAreaInput
                  id="project_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full border"
                  onChange={(e) => setData("description", e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="project_status"
                  value={"Project Status"}
                />
                <SelectInput
                  id="project_status"
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
              <div className="mt-4 text-right">
                <button className="px-3 py-2 text-white bg-green-500">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
