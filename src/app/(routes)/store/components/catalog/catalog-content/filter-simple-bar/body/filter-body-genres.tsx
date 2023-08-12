import { getAllGenres } from "@/data/temp-data";
import { useProductGenreState } from "@/store/useProductGenre";

interface Genre {
  id: string;
  description: string;
}

interface FilterGenreItem {
  title: string;
  id: string;
  selId: string;
  selExcludeId: string;
}

const FilterGenreItem = ({ onClick, onChecked, onClickExclude, title, id, selId, selExcludeId }: any) => {
  return (
    <label
      className="checkbox__label ng-star-inserted"
      htmlFor={id}
      selenium-id={selId}

    >
      <input
        onClick={() => onClick(title)}
        type="checkbox"
        className="checkbox__input ng-star-inserted"
        checked={onChecked}
        name={id}
        id={id} />
      {/**/}
      <span className="filter-options__label ng-star-inserted">
        {" "}
        {title}{" "}
      </span>
      {/**/}
      {/**/}
      {/**/}
      <button
        className="filter-exclude ng-star-inserted"
        title="Exclude results with this genre"
        selenium-id={selExcludeId}
        onClick={onClickExclude}
      >
        <span className="filter-exclude__icon icon-eye-open" />
      </button>
      {/**/}
      {/**/}
    </label>
  )
}

const dataFilterGenres: FilterGenreItem[] = [
  {
    title: "Action",
    id: "genres-action",
    selId: "filterGenresCheckboxaction",
    selExcludeId: "filterGenresExcludeaction"
  }
];

// A function to convert the genre description into the desired format:
const transformGenreToFilter = (genre: Genre): FilterGenreItem => ({
  title: genre.description,
  id: `genres-${genre.description.toLowerCase()}`,
  selId: `filterGenresCheckbox${genre.description.toLowerCase()}`,
  selExcludeId: `filterGenresExclude${genre.description.toLowerCase()}`
})

// Now, let's create a new array:
const updatedDataFilterGenres: FilterGenreItem[] = getAllGenres().map(genre => {
  const existing = dataFilterGenres.find(item => item.title === genre.description);
  return existing ? existing : transformGenreToFilter(genre);
});


export const FilterBodyGenres = () => {
  const { setGenreIds, genreIds } = useProductGenreState();
  const onClickItem = (title: string) => {
    console.log('onClickItem', title);
  
    if (genreIds.includes(title)) {
      // Remove the genre if it's already in the list
      setGenreIds(prevIds => prevIds.filter(id => id !== title));
    } else {
      // Otherwise, add the clicked genre to the list
      setGenreIds(prevIds => [...prevIds, title]);
    }
  };
  

  const onClickExcludeItem = () => {
    console.log('onClickExcludeItem')
  }

  return (
    <div className="ng-tns-c64-4">
      <div>
        {/**/}
        {/**/}
        {/**/}
        <div className="filter-options" selenium-id="filterGenres">
          {/**/}
          {/**/}
          <div
            selenium-id="filterGenresRegularOptionsContainer"
            className="ng-star-inserted"
            style={{}}
          >
            {updatedDataFilterGenres.map(item => (
              <FilterGenreItem key={item.title} {...item} onClick={onClickItem} onClickExclude={onClickExcludeItem} onChecked={genreIds.includes(item.title)} />
            ))}
            {/**/}
          </div>
          {/**/}
        </div>
      </div>
    </div>
  );
};
