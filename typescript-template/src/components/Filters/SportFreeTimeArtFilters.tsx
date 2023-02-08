import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { conditionArray } from "../../utils";

function SportFreeTimeArtFilters(props: any) {
  const {
    subCategorySportFreeTimeArtFinal,
    subCategory,
    condition,
    getFilterUrl,
    category,
    addUpperSpace,
  } = props;

  return (
    <>
      {(category === "airsoft" ||
        category === "box" ||
        category === "bicycleFitnessSupplements" ||
        category === "camping" ||
        category === "dansGymnastics" ||
        category === "hike" ||
        category === "footbal" ||
        category === "fishing" ||
        category === "waterSport" ||
        category === "winterSport" ||
        category === "catennismping" ||
        category === "scootersRollersSkateboards" ||
        category === "booksMoviesMusic") && (
        <section className="subCategory">
          <label className="mb-1">Sub Category</label>
          {/* Below there was contorlid='subCategory' */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(subCategory)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {subCategorySportFreeTimeArtFinal.map((c: any, index: any) => (
                <Link
                  key={index}
                  to={getFilterUrl({ subCategory: c })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperSpace(c)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {(category === "airsoft" ||
        category === "box" ||
        category === "bicycleFitnessSupplements" ||
        category === "camping" ||
        category === "dansGymnastics" ||
        category === "hike" ||
        category === "footbal" ||
        category === "fishing" ||
        category === "waterSport" ||
        category === "winterSport" ||
        category === "catennismping" ||
        category === "scootersRollersSkateboards" ||
        category === "booksMoviesMusic" ||
        category === "running" ||
        category === "climbing" ||
        category === "basketBall" ||
        category === "baseball" ||
        category === "pool" ||
        category === "horseRiding" ||
        category === "bagsTrollers" ||
        category === "golf" ||
        category === "karateJudo" ||
        category === "motoEnduroAtv" ||
        category === "hangGlinding" ||
        category === "archery" ||
        category === "trampoline" ||
        category === "hunting" ||
        category === "voleyBall" ||
        category === "artCollection" ||
        category === "entertainmentEvents") && (
        <section className="condition">
          <label className="mb-1">Condition</label>
          {/* Below there was controlid='condition' */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(condition)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {conditionArray.map((c, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ condition: c })}
                  style={{ textDecoration: "none" }}
                >
                  {addUpperSpace(c)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SportFreeTimeArtFilters;
