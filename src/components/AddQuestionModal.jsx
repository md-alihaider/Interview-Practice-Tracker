import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialFormData = {
  title: "",
  category: "",
  difficulty: "",
  status: "",
};

const AddQuestionModal = ({
  isOpen,
  onClose,
  onAddQuestion,
  editingQuestion,
  onUpdateQuestion,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  // Fill form when editing
  useEffect(() => {
    if (editingQuestion) {
      setFormData({
        title: editingQuestion.title,
        category: editingQuestion.category,
        difficulty: editingQuestion.difficulty,
        status: editingQuestion.status,
      });
    } else {
      setFormData(initialFormData);
    }

    setErrors({});
  }, [editingQuestion, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Question is required.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!formData.difficulty) {
      newErrors.difficulty = "Please select a difficulty.";
    }

    if (!formData.status) {
      newErrors.status = "Please select a status.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const questionData = {
      ...formData,
      title: formData.title.trim(),
    };

    if (editingQuestion) {
      onUpdateQuestion(editingQuestion.id, questionData);
    } else {
      onAddQuestion(questionData);
    }

    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {editingQuestion ? "Edit Question" : "Add Question"}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {editingQuestion
                ? "Update your interview question."
                : "Add a new question to your interview preparation."}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-6">
          {/* Question */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Question
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Explain the JavaScript event loop"
              className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 ${
                errors.title
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-blue-500/50"
              }`}
            />

            {errors.title && (
              <p className="mt-1.5 text-xs text-red-400">{errors.title}</p>
            )}
          </div>

          {/* Category + Difficulty */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-sm text-white outline-none ${
                  errors.category
                    ? "border-red-500/60"
                    : "border-white/10 focus:border-blue-500/50"
                }`}
              >
                <option value="">Select category</option>
                <option value="DSA">DSA</option>
                <option value="Technical">Technical</option>
                <option value="Git">Git</option>
              </select>

              {errors.category && (
                <p className="mt-1.5 text-xs text-red-400">{errors.category}</p>
              )}
            </div>

            {/* Difficulty */}
            <div>
              <label
                htmlFor="difficulty"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Difficulty
              </label>

              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-sm text-white outline-none ${
                  errors.difficulty
                    ? "border-red-500/60"
                    : "border-white/10 focus:border-blue-500/50"
                }`}
              >
                <option value="">Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              {errors.difficulty && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.difficulty}
                </p>
              )}
            </div>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Status
            </label>

            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-sm text-white outline-none ${
                errors.status
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-blue-500/50"
              }`}
            >
              <option value="">Select status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            {errors.status && (
              <p className="mt-1.5 text-xs text-red-400">{errors.status}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              {editingQuestion ? "Save Changes" : "Add Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;
