import Pagination from "@/Components/Pagination";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/Pages/constant";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, projects, queryParams = null, success=null, danger=null }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("project.index", queryParams));
  };
  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };
  const sortChanage = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("project.index", queryParams));
  };


     const deleteProject = (project)=>{
      router.delete(route("project.destroy", project));
     }           
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Projects Create
          </h2>
          <Link href={route('project.create')} className="px-2 py-1 text-white rounded bg-green-600">Create</Link>
        </div>
      }
    >
      <Head title="Project" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {
            success && (
              <div className="w-full bg-green-500 text-white px-3 py-2 rounded">
          {success}
          </div>
            )
          }
          {
            danger && (
              <div className="w-full bg-red-500 text-white px-3 py-2 rounded">
          {danger}
          </div>
            )
          }
          
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-900">
                  <thead
                    className=" text-gray-50 uppercase bg-gray-600
                   border-b-2 border-gary-500"
                  >
                    <tr className="text-nowrap">
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        ID
                      </TableHeading>
                      <th className="px-3 py-3">Image</th>
                      <TableHeading
                        name="name"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Name
                      </TableHeading>

                      <TableHeading
                        name="status"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Status
                      </TableHeading>
                      <TableHeading
                        name="created_at"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Created Date
                      </TableHeading>
                      <TableHeading
                        name="due_date"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Due Date
                      </TableHeading>
                      <TableHeading
                        name="created_by"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Created By
                      </TableHeading>
                      <th className="px-3 py-3">Actions</th>
                    </tr>
                  </thead>
                  <thead
                    className=" text-gray-50 uppercase bg-gray-600
                   border-b-2 border-gary-500"
                  >
                    <tr className="text-nowrap">
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">
                        <TextInput
                          defaultValue={queryParams.name}
                          className="w-full bg-gray-800"
                          placeholder="Project Name"
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th className="px-3 py-3">
                        <SelectInput
                          defaultValue={queryParams.status}
                          className="w-full bg-gray-800"
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Select </option>
                          <option value="pending">Pending </option>
                          <option value="in_progess">Progess </option>
                          <option value="completed">Completed </option>
                        </SelectInput>
                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        key={project.id}
                        className="bg-white border-b light:bg-gray-800  light:border-gray-700"
                      >
                        <th className="px-3 py-2">{project.id}</th>
                        <td className="px-3 py-2">
                          <img src={project.image_path} style={{width:60}} alt="" />
                        </td>
                        <th className="px-3 py-2 hover:underline">
                          <Link href={route("project.show", project.id)}>
                            {project.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded  " +
                              PROJECT_STATUS_CLASS_MAP[project.status]
                            }
                          >
                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2">{project.created_at}</td>
                        <td className="px-3 py-2">{project.due_date}</td>
                        <td className="px-3 py-2">{project.created_by.name}</td>
                        <td className="px-3 py-2">
                          <Link
                            href={route("project.edit", project.id)}
                            className="font-medium text-blue-600 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button onClick={e => deleteProject(project)}
                            className="font-medium text-red-600  hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={projects.meta.links} />
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
