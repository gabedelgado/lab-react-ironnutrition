import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchInput, setSearchInput}) {
  
  
    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={(e) => setSearchInput(e.target.value)} />
    </>
  );
}

export default Search;
