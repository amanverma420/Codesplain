import React from "react";
import "./CodeExplainForm.css";
import { useActionState } from "react";
import { explain } from "../../actions";
import CodeExplanation from "../CodeExplanation";
import Error from "../Error";
const CodeExplainForm = () => {
  const [formState, formAction, isPending] = useActionState(explain,null)
  return (
    <div className="form-container">
      <form action={formAction}>
        <label className="form-label">Language:</label>
        <select name="language" className="form-select">
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <label className="form-label">Your code:</label>
        <textarea
          name="code"
          required
          placeholder="Paste your code here..."
          className="form-textarea"
        />

        <button type="submit" 
          disabled = {isPending}
          className="form-button">
          {isPending ? "Explaining..." : "Explain code"}
        </button>
      </form>
      {
        isPending ? (
          <p className="bg-gray-300 my-3 w-64 p-2 rounded-sm">Thinking...</p>
        ) : formState?.success ? (
            <CodeExplanation explanation={formState?.data.explanation} /> 
          ) : (
              formState
                ?.success === false && (
                <Error error={formState?.error} />
              )
        )
      }
    </div>
  );
};

export default CodeExplainForm;
