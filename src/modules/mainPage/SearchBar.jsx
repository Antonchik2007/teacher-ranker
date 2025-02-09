import React, {useState} from "react";
import './SearchBar.css'
const SearchBar = ({teachers, setFilteredTeachers}) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if(query.lenght === 0){
            setFilteredTeachers(teachers)
        } else{
            setFilteredTeachers(teachers.filter(teacher => teacher.name.toLowerCase().includes(query)))
        }
    }
    return(
        <form>
            <input type='text' placeholder="Search for a teacher" className="search-bar" value={searchQuery} onChange={handleSearch}/>
        </form>
    )
}

export default SearchBar;