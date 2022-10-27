import { useParams } from "react-router-dom";

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
function SingleDog() {

    const { name } = useParams();


    const dog = dogs.filter(item => item.name === name)[0];

    return ( 
        <>
        <img src={dog.image}/>
        <div>Hello from {name}</div>
        <div>My motto is {dog.motto}</div>
        </>
     );
}

export default SingleDog;