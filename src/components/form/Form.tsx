import { Form } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const NewTask: React.FC = () => {
  return (
    <div>
      <Form method="post" action="">
        <input type="text" name="title" placeholder="New Task" />
        <button>
          {" "}
          <FaPlus /> Add Task
        </button>
      </Form>
    </div>
  );
};

export const formAction = async ({ request }: any) => {
  const data = await request.formData();
  const submission: { title: string } = {
    title: data.get("title"),
  };
  console.log(submission);
};
