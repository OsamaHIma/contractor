import LeftComponent from "./LeftComponent";
import RightComponents from "./RightComponents";

const Center = () => {
  return (
    <section className="p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        <div className="md:col-span-3">
          <LeftComponent />
        </div>
        <div className="md:col-span-9">
          <RightComponents />
        </div>
      </div>
    </section>
  );
};

export default Center;
