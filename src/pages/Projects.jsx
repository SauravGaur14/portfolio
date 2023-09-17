import Project from "../components/Project";
import Header from "../components/Header";
import worldwise from "../assets/worldwise.jpeg";
import foodzApp from "../assets/foodzApp.png";
import expenseTracker from "../assets/expenseTracker.png";

export default function Projects() {
  return (
    <div className="gap-y-11 bg-gray-100">
      <Header />
      <p className="mb-8 mt-10 pl-10 text-center font-sans text-4xl font-semibold">
        Some of my recent works😉
      </p>
      <div className="flex flex-col ">
        <Project
          projectName="Worldwise"
          projectImg={worldwise}
          projectDescription="You travel the world. WorldWise keeps track of your adventures. A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world."
        />

        <Project
          projectName="Foodz"
          projectImg={foodzApp}
          projectDescription="Delicious Food, Delivered To You
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious
          lunch or dinner at home."
        />

        <Project
          projectName="Expense Tracker"
          projectImg={expenseTracker}
          projectDescription="No more worrying about memorizing your expenditures. Expense Tracker is an easy to use and simple, yet effective web application that helps you keep track of your expenses."
        />
      </div>
    </div>
  );
}
