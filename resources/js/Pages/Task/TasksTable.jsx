import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";

import {
    TASK_STATUS_CLASS_MAP,
    TASK_STATUS_TEXT_MAP,
  } from "@/Pages/constant";
import {  Link,router } from "@inertiajs/react";

export default function TasksTable ({tasks,routeName,hideProjectColomn = false,  queryParams = null}){
    queryParams = queryParams || {};
     const searchFieldChanged = (name, value) => {
        if (value) {
          queryParams[name] = value;
        } else {
          delete queryParams[name];
        }
        router.get(route("task.index", queryParams));
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
        router.get(route("task.index", queryParams));
      };
    return (
        <>
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
                      {hideProjectColomn && <th className="px-3 py-3">Project Name</th>}
                      
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
                      {hideProjectColomn && <th className="px-3 py-3"></th>}
                      
                      <th className="px-3 py-3">
                        <TextInput
                          defaultValue={queryParams.name}
                          className="w-full bg-gray-800"
                          placeholder="Task Name"
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
                    {tasks.data.map((task) => (
                      <tr
                        key={task.id}
                        className="bg-white border-b light:bg-gray-800  light:border-gray-700"
                      >
                        <th className="px-3 py-2">{task.id}</th>
                        <td className="px-3 py-2">
                          {/* <img src={task.image_path} style={{width:60}} alt="" /> */}
                        </td>
                        {hideProjectColomn &&
                        <td className="px-3 py-2">{task.project.name}</td>}
                        <th className="px-3 py-2 hover:underline">
                          <Link href={route("task.show", task.id)}>
                            {task.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded  " +
                              TASK_STATUS_CLASS_MAP[task.status]
                            }
                          >
                            {TASK_STATUS_TEXT_MAP[task.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2">{task.created_at}</td>
                        <td className="px-3 py-2">{task.due_date}</td>
                        <td className="px-3 py-2">{task.created_by.name}</td>
                        <td className="px-3 py-2">
                          <Link
                            href={route("task.edit", task.id)}
                            className="font-medium text-blue-600 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <Link
                            href={route("task.destroy", task.id)}
                            className="font-medium text-red-600  hover:underline mx-1"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={tasks.meta.links} />
        </>
    )
}