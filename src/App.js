
import { useState } from 'react';
import ItemList from './components/ItemList';
import list from './data/allData';
import Buttons from './components/Buttons';


const App = () => {

  // STATE for the initial storage of the list data
  const [data, setData] = useState(list);



  // get the total list of category values by using a spread of new Set() to combine duplicates, spread in all category values and use All for restting the state to the full list
  const allCategories = ['All', ...new Set(data.map(item => item.category))];



  // STATE that holds the categories from the above array map
  const [categories, setCategories] = useState(allCategories);



  //STATE => holds a copy of the original data so we can then change it
  const [filteredData, setFilteredData] = useState(data);



  // function to filter category onClick depending on the param value
  const filterByCategory = (category) => {

    if (category === 'All') {
      setFilteredData(data) // reset the state to ALL categories included
      return;
    }
    

    // map over the inital data, get the category value and compare to the value of the function param
    const catItem = data.filter((item) => item.category === category)
    setFilteredData(catItem);// then set the filtered state (wchich now hold a copy of the initial data) to the filtered value
  }






  return (

    <div className="App">
      <div className="title">
        <h1>
          Category
          <span> Filter</span>
        </h1>
      </div>

      <Buttons categories={categories} filterByCategory={filterByCategory} />
      <ItemList filteredData={filteredData} />
    </div>
  );
}


export default App;
