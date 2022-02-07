import React,{useState,useEffect} from "react";


const MyComponent =  () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          
        <ul>
            <h1>Users Information</h1>
            
        {items.map(item => (
          <li key={item.id}>
             <b>Name: </b>{item.name} {item.username}
             <b>  EMAIL :</b> {item.email} 
            <hr/>
            <b>Address:</b> {item.address.street} &nbsp;&nbsp;  {item.address.suite} 
            {item.address.city}&nbsp;&nbsp;   {item.address.zipcode} 
            <hr/>
             <b>Web Company  Address:</b> {item.phone}&nbsp;&nbsp; {item.website}
            {item.company.name}&nbsp;&nbsp; {item.company.catchPhrase}
            <hr/>
          </li>
        ))}
      </ul>
      );
    }
  }

  export default MyComponent;