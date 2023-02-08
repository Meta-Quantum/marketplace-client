import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { conditionArray } from "../../utils";

function HouseGardenFilters(props: any) {
  const {
    condition,
    getFilterUrl,
    mainCategory,
    subCategoryHouseAndGardenFinal,
    subCategory,
    category,
    addUpperSpace,
  } = props;

  return (
    <>
      {(category === "furnitureDecorations" ||
        category === "garden" ||
        category === "constructionFurnitureMaterials" ||
        category === "thermalElectricalSanitary" ||
        category === "toolsWroughtIronWork") && (
        <section className="subCategory">
          <label className="mb-1">Sub Category</label>
          {/* Below there was controlid='subCategory' */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(subCategory)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {subCategoryHouseAndGardenFinal.map((c: any, index: any) => (
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
      {mainCategory === "houseAndGarden" && (
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

export default HouseGardenFilters;
