import React, { useEffect, useState } from 'react';

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [dropdown, setDropdown] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((item) => item.firstName));
                setLoading(false);
            }
           
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleclick=(event)=>{
      setDropdown(false)
      setSearch(event.target.innerText)
      setFilteredData([])
    }

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        if (query.length > 1 ) {
          if(users.length){
            const filteredData = users.filter((item) => item.toLowerCase().indexOf(query) > -1);
            setFilteredData(filteredData);
            setDropdown(true);}
        } else {
            setDropdown(false);
        }
    };



    return (
        <div>
            <input placeholder='Enter Item To Search' value={search} onChange={handleChange}/>
            {/* Display dropdown based on state */}
            {dropdown && (
                <div>
                    {/* Render filteredData here */}
                    {filteredData.map((item, index) => (
                        <div onClick={handleclick} key={index}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
