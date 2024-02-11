import TodoList from "./Todo/TodoList";
import TodoManagement from "./Todo/TodoManagement";

const Home = () => {
  return (
    <section className="w-full">
      <div className="hero hero-content mix-blend-hard-light">
        <div className="card w-full flex-shrink-0 bg-slate-700 shadow-2xl">
          <div className="flex flex-col items-center justify-center gap-1 p-4">
            <h1 className="font-light text-slate-200">
              <span className="text-3xl font-bold text-blue-600">P</span>riority
              <span className="font-semibold text-red-600">P</span>
              lus
            </h1>
            <h2 className=" font-bold text-slate-200">
              Your Trusted Task Tracker
            </h2>
          </div>
          <TodoManagement />
          <div className="card-body max-h-96 overflow-auto px-2 pt-0">
            <TodoList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
