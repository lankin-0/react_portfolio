const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-full sm:h-screen bg-gray-900 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            Skills
          </p>
        </div>
        <p className="text-xl mt-3 ">
          - Using CSS and CSS frameworks for styling and making Responsive
          designs.
        </p>
        <p className="text-xl mt-3">
          - Using JavaScript to make web pages more interactive and user
          friendly, and understanding DOM manipulation.
        </p>
        <p className="text-xl mt-3">
          - Using and understanding modern ReactJS and its concepts such as
          hooks, props drilling, creating reusable components and custom hooks.
        </p>
        <p className="text-xl mt-3">- Navigating using React Router Dom.</p>
        <p className="text-xl mt-3">
          - RESTful API development with HTTP Methods and CRUD Operations.
        </p>
        <p className="text-xl mt-3">
          - Globalized State Management using Context, React-Redux,
          Redux-Toolkit.
        </p>
        <p className="text-xl mt-3">- Version Control using Git, and GitHub.</p>
        <p className="text-xl mt-3">
          - Knowlage of Windows Operating System, and Linux/Unix based Operating
          Systems CLI.
        </p>
      </div>
    </div>
  );
};
export default Skills;
