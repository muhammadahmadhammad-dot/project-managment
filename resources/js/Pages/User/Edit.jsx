import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, user }) {

  const { data, setData, post, errors, reset } = useForm({
    id: user.id,
    name: user.name || "",
    email: user.email || "",
    password:  "",
    password_confirmation:  "",
    _method: "PUT",
  });
  const onSubmit = (e) => {
    e.preventDefault();

    post(route("user.update", user.id));
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            User Edit
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
      <Head title="User Create" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8  shadow sm:runded-lg"
            >
                <div className="mt-4">
                              <InputLabel
                                htmlFor="user_name"
                                value={"User Name"}
                              />
                              <TextInput
                                id="user_name"
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
                                htmlFor="user_email"
                                value={"User Email"}
                              />
                              <TextInput
                                id="user_email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border"
                                onChange={(e) => setData("email", e.target.value)}
                              />
                              <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div className="mt-4">
                              <InputLabel
                                htmlFor="user_password"
                                value={"User Password"}
                              />
                              <TextInput
                                id="user_password"
                                type="text"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border"
                                onChange={(e) => setData("password", e.target.value)}
                              />
                              <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="mt-4">
                              <InputLabel
                                htmlFor="user_confirm"
                                value={" Confirm Password"}
                              />
                              <TextInput
                                id="user_confirm"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full border"
                                onChange={(e) => setData("password_confirmation", e.target.value)}
                              />
                              <InputError message={errors.password_confirmation} className="mt-2" />
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
