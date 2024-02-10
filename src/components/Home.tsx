import TodoList from "./Todo/TodoList";
import TodoManagement from "./Todo/TodoManagement";

const Home = () => {
  return (
    <section className="w-full">
      <div className="hero hero-content max-h-screen mix-blend-hard-light">
        <div className="card w-full flex-shrink-0 bg-slate-700 shadow-2xl">
          <TodoManagement />
          <div className="card-body max-h-96 overflow-auto pt-0">
            <TodoList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
