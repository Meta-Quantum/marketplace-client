import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

function AgroIndustryFilters(props: any) {
  const {
    getFilterUrl,
    subCategoryAgroIndustryFinal,
    subCategory,
    category,
    addUpperSpace,
  } = props;
  return (
    <>
      {(category === "agroIndustrialMachinery" ||
        category === "marketProducts" ||
        category === "cerealsPlantsTrees" ||
        category === "domesticAnimals") && (
        <section className="subCategory">
          <label className="mb-1">Sub Category</label>
          {/* Bwlow was controlid="subCategory" */}
          <div className="dropdown">
            <button className="dropbtn">
              {addUpperSpace(subCategory)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {subCategoryAgroIndustryFinal.map((c: any, index: any) => (
                <Link
                  to={getFilterUrl({
                    subCategory: c,
                  })}
                  key={index}
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

export default AgroIndustryFilters;
