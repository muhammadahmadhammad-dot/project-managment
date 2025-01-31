import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import TableHeading from "@/Components/TableHeading";

export default function Index({
  auth,
  users,
  queryParams = null,
  success = null,
  danger = null,
}) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("user.index", queryParams));
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
    router.get(route("user.index", queryParams));
  };

  const deleteUser = (user) => {
    router.delete(route("user.destroy", user));
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Users Create
          </h2>
          <Link
            href={route("user.create")}
            className="px-2 py-1 text-white rounded bg-green-600"
          >
            Create
          </Link>
        </div>
      }
    >
      <Head title="User" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {success && (
            <div className="w-full bg-green-500 text-white px-3 py-2 rounded">
              {success}
            </div>
          )}
          {danger && (
            <div className="w-full bg-red-500 text-white px-3 py-2 rounded">
              {danger}
            </div>
          )}

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
                      <TableHeading
                        name="name"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Name
                      </TableHeading>

                      <TableHeading
                        name="email"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Email
                      </TableHeading>
                      <TableHeading
                        name="created_at"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanage={sortChanage}
                      >
                        Created Date
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
                      <th className="px-3 py-3">
                        <TextInput
                          defaultValue={queryParams.name}
                          className="w-full bg-gray-800"
                          placeholder="User Name"
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th className="px-3 py-3">
                        <TextInput
                          defaultValue={queryParams.email}
                          className="w-full bg-gray-800"
                          placeholder="User Email"
                          onBlur={(e) =>
                            searchFieldChanged("email", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("email", e)}
                        />
                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.data.map((user) => (
                      <tr
                        key={user.id}
                        className="bg-white border-b light:bg-gray-800  light:border-gray-700"
                      >
                        <th className="px-3 py-2">{user.id}</th>
                        <th className="px-3 py-2 ">{user.name}</th>
                        <th className="px-3 py-2 ">{user.email}</th>
                        <td className="px-3 py-2">{user.created_at}</td>
                        <td className="px-3 py-2">
                          <Link
                            href={route("user.edit", user.id)}
                            className="font-medium text-blue-600 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={(e) => deleteUser(user)}
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
              <Pagination links={users.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
