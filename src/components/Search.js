import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchInput, setSearchInput}) {
  
  
    return (
    <div>
      <Divider>Search</Divider>
      <Input className='inputs' value={searchInput} type="text" onChange={(e) => setSearchInput(e.target.value)} />
    </div>
  );
}

export default Search;
