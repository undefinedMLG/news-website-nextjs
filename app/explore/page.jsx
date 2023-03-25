import React from "react";

export default function page() {
  const [keyword, setKeyword] = useState("");
    const [filteredData, setFiltered] = useState([]);
    useEffect(() => {
        filterData();
        }, [data, keyword]);
            
        const handleSearch = (e) => {
            e.preventDefault();
            const filteredData = data.filter((e) => {
            return e.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFiltered(filteredData);
            };
        
            const filterData = () => {
            const filteredData = data.filter((e) => {
                return e.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFiltered(filteredData);
          };

          <form onSubmit={handleSearch} className="relative py-2.5 md:mt-20 md:ml-96 w-5/12 lg:w-72 flex justify-center mb-8">
                <GoSearch className="absolute top-5 left-3 text-[#1C1B1F] z-10 w-4 h-4 fill-current"/>
                <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search News e.g Javascript"
                className="form-control relative flex-auto min-w-0 block w-full pl-9 px-3 py-1.5 text-base font-normal text-[#7C7C7C] bg-clip-padding bg-[#F8F8F8] rounded-full transition ease-in-out m-0 focus:text-[#7C7C7C] focus:bg-[#F8F8F8] "/>
            </form>
  return <div>page</div>;
}
