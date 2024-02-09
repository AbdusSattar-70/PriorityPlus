import CreateTodo from "./Todo/CreateTodo";

const Home = () => {
  return (
    <section className="w-full">
      <div className="hero hero-content">
        <div className=" card w-full flex-shrink-0 bg-slate-700 shadow-2xl">
          <div className="text-center">
            <img
              className="mx-auto w-48"
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              alt="logo"
            />
            <h4 className="mb-4 mt-1 pb-1 text-xl font-semibold">
              Manage Your Tasks
            </h4>
          </div>
          <div className="card-body">
            <CreateTodo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
