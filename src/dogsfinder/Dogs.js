import { Link } from "react-router-dom";

const dogs = [
  {
    name: "Whiskey",
    motto: "I like drinking whiskey",
    age: 5,
    image: 'images/whiskey.jpg',
  },
  {
    name: "Hazel",
    motto: "I like eating hazelnuts",
    age: 3,
    image: "images/hazel.jpg",
  },
  {
    name: "Tubby",
    motto: "I like eating tubs of ice cream",
    age: 4,
    image: '/src/images/tubby.jpg'
  },
];

function Dogs() {
  return (
    <div>
      {dogs.map((item, idx) => {
        return (
          <Link key={idx} to={"/dogs/" + item.name}>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>{item.motto}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Dogs;
