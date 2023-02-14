import React, {useState} from "react"
import { BiChevronDown, BiX } from "react-icons/bi"
import { Link } from "react-router-dom"
import {
  yearArray,
  caroseryArray,
  fuelArray,
  steeringWheelArray,
  colourArray,
  conditionArray,
  kmArray,
  horsePowerArray,
  engineArray,
  usefulTaskArray,
} from "../../utils"

function AutoMotoBoatsFilters(props:any) {
  const {
    subCategoryAutoFinal,
    modelFinal,
    category,
    colour,
    condition,
    steeringWheel,
    subCategory,
    model,
    getFilterUrl,
    carosery,
    fuel,
    mainCategory,
    usefulTask,
    addUpperSpace,
    addUpperFirst,
  } = props;

  const [minYearSelected, setMinYearSelected] = useState('From');
  const [maxYearSelected, setMaxYearSelected] = useState('To');
  const [minEngineSelected, setMinEngineSelected] = useState('From');
  const [maxEngineSelected, setMaxEngineSelected] = useState('To');
  const [minHorsePowerSelected, setMinHorsePowerSelected] = useState('From');
  const [maxHorsePowerSelected, setMaxHorsePowerSelected] = useState('To');
  const [minKmSelected, setMinKmSelected] = useState('From');
  const [maxKmSelected, setMaxKmSelected] = useState('To');
  return (
    <>
      {category === 'cars' && mainCategory && 'autoMotoBoats' ? (
        <>
          <section className="subCategory">
            <label className="mb-1">Sub Category</label>
            {/* Below there was controlid='subCategory' */}
            <div className="dropdown" >
              <button className="dropbtn">
                {addUpperFirst(subCategory)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {subCategoryAutoFinal.map((c:any, index:any) => (
                  <Link
                    to={getFilterUrl({
                      subCategory: c,
                      model: 'all'
                    })}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperFirst(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="model">
            <label className="mb-1">Model</label>
            {/* Below there was controlid='model' */}
            <div className="dropdown" >
              <button className="dropbtn">
                {addUpperFirst(model)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {modelFinal.map((m:any, index:any) => (
                  <Link
                    to={getFilterUrl({ model: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {addUpperFirst(m)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="carosery">
            <label className="mb-1">Carosery</label>
            {/* Below there was controlid='carosery' */}
            <div className="dropdown" >
              <button className="dropbtn">
                {addUpperSpace(carosery)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {caroseryArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ carosery: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="steering-wheel">
            <label className="mb-1">Steering wheel</label>
            {/* Below there was controlid='steering-wheel' */}
            <div className="dropdown" >
              <button className="dropbtn">
                {addUpperSpace(steeringWheel)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {steeringWheelArray.map((steer, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ steeringWheel: steer })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(steer)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="fuel">
            <label className="mb-1">Fuel</label>
            {/* Below there was controlid='fuel' */}
            <div className="dropdown" >
              <button className="dropbtn">
                {addUpperSpace(fuel)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {fuelArray.map((f, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ fuel: f })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(f)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}
      {((category === 'trucksTrailersCaravans' && mainCategory === 'autoMotoBoats') ||
        (category === 'motoScooterAtv' && mainCategory === 'autoMotoBoats') ||
        (category === 'autoUtility' && mainCategory === 'autoMotoBoats')) && (
        <>
          <section className="subCategory">
            <label className="mb-1">Sub Category</label>
            {/* Below there was controlid='subCategory' */}
            <div className="dropdown">
              <button className="dropbtn">
                {addUpperFirst(subCategory)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {subCategoryAutoFinal.map((c:any, index:any) => (
                  <Link
                    to={getFilterUrl({
                      subCategory: c,
                    })}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperFirst(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {category === 'autoUtility' && (
        <section className="usefulTask">
          <label className="mb-1">Useful Task</label>
          {/* Below there was controlid='usefulTask' */}
          <div className="dropdown" >
            <button className="dropbtn">
              {addUpperSpace(usefulTask)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {usefulTaskArray.map((u, index) => (
                <Link
                  to={getFilterUrl({
                    usefulTask: u,
                  })}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  {addUpperSpace(u)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {(category === 'trucksTrailersCaravans' ||
        category === 'cars' ||
        category === 'motoScooterAtv' ||
        category === 'autoUtility' ||
        category === 'boats') && (
        <>
          <section className="year">
            <label className="mb-1">Fabrication year</label>
            <div className="interval-filter">
              {/* Below there was controlid='year' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {minYearSelected}
                  <span>
                    {minYearSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minYear: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinYearSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {yearArray.map((y, index) => (
                    <Link
                      to={getFilterUrl({ minYear: y })}
                      key={index}
                      onClick={() => setMinYearSelected(y)}
                    >
                      {y}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Below there was controlid='year' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {maxYearSelected}
                  <span>
                    {maxYearSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxYear: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxYearSelected('To')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {yearArray.map((y, index) => (
                    <Link
                      to={getFilterUrl({ maxYear: y })}
                      key={index}
                      onClick={() => setMaxYearSelected(y)}
                    >
                      {y}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="engine-capacity">
            <label className="mb-1">Engine capacity</label>
            <div className="interval-filter">
              {/* Below there was controlid='engine-capacity' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {minEngineSelected}
                  <span>
                    {minEngineSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minEngine: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinEngineSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {engineArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ minEngine: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinEngineSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Below there was controlid='engine-capacity' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {maxEngineSelected}
                  <span>
                    {maxEngineSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxEngine: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxEngineSelected('To')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {engineArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ maxEngine: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxEngineSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="horse-power">
            <label className="mb-1">Horse power</label>
            <div className="interval-filter">
              {/* Below there was controlid='horse-power' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {minHorsePowerSelected}
                  <span>
                    {minHorsePowerSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minHorsePower: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinHorsePowerSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {horsePowerArray.map((h, index) => (
                    <Link
                      to={getFilterUrl({ minHorsePower: h })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinHorsePowerSelected(h)}
                    >
                      {h}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Below there was controlid='horse-power' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {maxHorsePowerSelected}
                  <span>
                    {maxHorsePowerSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxHorsePower: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxHorsePowerSelected('To')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {horsePowerArray.map((h, index) => (
                    <Link
                      to={getFilterUrl({ maxHorsePower: h })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxHorsePowerSelected(h)}
                    >
                      {h}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="km">
            <label className="mb-1">Km on board</label>
            <div className="interval-filter">
              {/* Below there was controlid='km' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {minKmSelected}
                  <span>
                    {minKmSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minKm: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinKmSelected('From')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {kmArray.map((k, index) => (
                    <Link
                      to={getFilterUrl({ minKm: k })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinKmSelected(k)}
                    >
                      {k}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Below there was controlid='km' */}
              <div className="dropdown-interval" >
                <button className="dropbtn-interval">
                  {maxKmSelected}
                  <span>
                    {maxKmSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxKm: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxKmSelected('To')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {kmArray.map((k, index) => (
                    <Link
                      to={getFilterUrl({ maxKm: k })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxKmSelected(k)}
                    >
                      {k}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="colour">
            <label className="mb-1">Colour</label>
            {/* Below there was controlid='colour' */}
            <div className="dropdown" >
              <button className="dropbtn">
                {addUpperSpace(colour)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {colourArray.map((col, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ colour: col })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(col)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="condition">
            <label className="mb-1">Condition</label>
            {/* Below there was controlid='condition' */}
            <div className="dropdown" >
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
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default AutoMotoBoatsFilters
