import React from "react";
import Schedule from "./Schedule";
import Notes from "./Notes";
import AssignIt from "./AssignIt";

function End({ start_time, setStart_time, day, setDay }) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Schedule
          start_time={start_time}
          setStart_time={setStart_time}
          day={day}
          setDay={setDay}
        />
        <Notes />
      </div>
      <AssignIt />
    </section>
  );
}

export default End;
