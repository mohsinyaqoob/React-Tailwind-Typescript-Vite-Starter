import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");

  return (
    <div className="grid gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <button className="bg-gray-400 p-2" onClick={handleBackToHome}>
        Go back
      </button>
    </div>
  );
};

export default Page404;
