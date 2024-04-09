import Image from "next/image";
import loginSvg from "../../assets/login.svg";

export const metadata = {
  title: "AddTask : Work Manager",
};

function AddTask() {
  return (
    <div className="grid grid-cols-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="p-5 col-span-6 col-start-4 ">
        <div className="my-8 flex justify-center items-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
          />
        </div>
        <h1 className="text-2xl text-center font-medium">Add your task here</h1>

        <form action="#">
          <div>
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2 mt-2"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
            />
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2 mt-2"
            >
              Content
            </label>
            <textarea
              type="text"
              id="task_content"
              className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
            />
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2 mt-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
            >
              <option value="" selected disabled>
                ----Select Status----
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="py-2 px-6 border-1 rounded-lg bg-gradient-to-r from-sky-700 to-violet-700">
              Add Todo
            </button>
            <button className=" ml-3 py-2 px-6 border-1 rounded-lg bg-gradient-to-r from-sky-700 to-cyan-500">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
