import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./Spinner";

const DefaultLayout = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-slate-600 text-sky-50">
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <Suspense fallback={<Spinner />}>
                    <Outlet />
                  </Suspense>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultLayout;
