import "./Cards.css";
import Card from "./Card";

function Cards({ result, selectedFilter }) {
  let values = Object.values(result);

  return (
    <div className="w-[80%] flex flex-wrap justify-center gap-4 pb-4">
      {selectedFilter === "All" ? (
        values.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {category.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        ))
      ) : (
        <div className="w-[80%] flex flex-wrap justify-center gap-4 pb-4">
          {result[selectedFilter].map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
