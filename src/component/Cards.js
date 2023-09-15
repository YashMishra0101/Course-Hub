import './Cards.css'
import Card from './Card';

function Cards({ result,selectedFilter }) {

  return (
    <div className="w-[80%] flex flex-wrap justify-center gap-4 pb-4">
    {
      selectedFilter==="All"?
      Object.keys(result).map((category) => (
        <div key={category}>
            {
             result[category].map((course) => (
               <Card key={course.id} course={course}/>
              ))
            } 
        </div>
      )) :
      <div className="w-[80%] flex flex-wrap justify-center gap-4 pb-4">
        {
          result[selectedFilter].map((course) => (
            <Card key={course.id} course={course}/>
          ))
        }
      </div>
    }  
    </div>
  );
}

export default Cards;



