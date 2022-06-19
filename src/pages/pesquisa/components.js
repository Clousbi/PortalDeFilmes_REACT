import { Resultado } from "./styles";
const SearchResults = ({data}) => {

    if(!data || !data.length) return null;

    const resultList = data.map ((item)=>{
        return (
            <li key={item._id}>
                <span>{item.title}</span>
            </li>
        );
    });



    return(
        <Resultado>
            <ul>{resultList}</ul>
        </Resultado>

    );

}
export default SearchResults;