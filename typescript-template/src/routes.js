// component imports
import Homepage from "./pages/Homepage";
import NavBottomCategories from "./components/NavBottomContent/NavBottomCategories";
import NavBottomMenu from "./components/NavBottomContent/NavBottomMenu";
import SearchBox from "./components/SearchBox";
import Cart from "./pages/Cart";
import Seller from "./pages/Seller";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import AdminPage from "./pages/AdminPage/AdminPage";
import SellerProfile from "./pages/SellerProfile/SellerProfile";
import ProductList from "./pages/ProductList/ProductList";
import OrderList from "./pages/OrderList/OrderList";
import UserList from "./pages/UserList/UserList";
import UserEdit from "./pages/UserEdit/UserEdit";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Profile from "./pages/Profile/Profile";
import AdminProductList from "./pages/AdminPage/ProductList/ProductList";
import AdminOrderList from "./pages/AdminPage/OrderList/OrderList";
import AdminUserList from "./pages/AdminPage/UserList/UserList";
import AdminUserEdit from "./pages/AdminPage/UserEdit/UserEdit";
import AdminDashboard from "./pages/AdminPage/Dashboard/Dashboard";
import AdminSupport from "./pages/AdminPage/Support/Support";
import SellerProductList from "./pages/SellerPage/ProductList/ProductList";
import SellerOrderList from "./pages/SellerPage/OrderList/OrderList";

// create categories/product imports
import CreateProduct from "./pages/CreateProduct";
import CreateAutoMotoBoats from "./pages/CreateProduct/CreateCategories/CreateAutoMotoBoats";
import CreateRealEstate from "./pages/CreateProduct/CreateCategories/CreateRealEstate";
import CreateElectronicAppliances from "./pages/CreateProduct/CreateCategories/CreateElectronicAppliances";
import CreateAutoParts from "./pages/CreateProduct/CreateCategories/CreateAutoParts";
import CreateFashion from "./pages/CreateProduct/CreateCategories/CreateFashion";
import CreateMomsKids from "./pages/CreateProduct/CreateCategories/CreateMomsKids";
import CreateAgroIndustry from "./pages/CreateProduct/CreateCategories/CreateAgroIndustry";
import CreateAnimals from "./pages/CreateProduct/CreateCategories/CreateAnimals";
import CreateSportFreeTimeArt from "./pages/CreateProduct/CreateCategories/CreateSportFreeTimeArts";
import CreateServicesCompanyEquipment from "./pages/CreateProduct/CreateCategories/CreateServicesCompanyEquipment";
import CreateHouseGarden from "./pages/CreateProduct/CreateCategories/CreateHouseGarden";

// edit categories/product imports
import EditAutoMotoBoats from "./pages/EditProduct/EditCategories/EditAutoMotoBoats";
import EditRealEstate from "./pages/EditProduct/EditCategories/EditRealEstate";
import EditElectronicAppliances from "./pages/EditProduct/EditCategories/EditElectronicAppliances";
import EditFashion from "./pages/EditProduct/EditCategories/EditFashion";
import EditAutoParts from "./pages/EditProduct/EditCategories/EditAutoParts";
import EditMomsKids from "./pages/EditProduct/EditCategories/EditMomsKids";
import EditAgroIndustry from "./pages/EditProduct/EditCategories/EditAgroIndustry";
import EditAnimals from "./pages/EditProduct/EditCategories/EditAnimals";
import EditSportFreeTimeArt from "./pages/EditProduct/EditCategories/EditSportFreeTimeArt";
import EditServicesCompanyEquipment from "./pages/EditProduct/EditCategories/EditServicesCompanyEquipment";
import EditHouseGarden from "./pages/EditProduct/EditCategories/EditHouseGarden";

// filter imports
import Filters from "./pages/Filters";

// router imports
import { createBrowserRouter } from "react-router-dom";
import CreateMomsKids from "./pages/CreateProduct/CreateCategories/CreateMomsKids";
import NavBottomCategories from "../../src/components/NavBottomContent/NavBottomCategories";

const router = createBrowserRouter([
  // components/pages paths
  { path: "/", element: <Homepage /> },
  { path: "category", element: <NavBottomCategories /> },
  { path: "menu-pages", element: <NavBottomMenu /> },
  { path: "search", element: <SearchBox /> },
  { path: "cart", element: <Cart /> },
  { path: ":id", element: <ProductPage /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "product-list", element: <ProductList /> },
  { path: "/product-list/page-number/:page-number", element: <ProductList /> },
  { path: "order-list", element: <OrderList /> },
  { path: "user-list", element: <UserList /> },
  { path: "user/:id/edit", element: <UserEdit /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "support", element: <Support /> },
  { path: "profile", element: <Profile /> },

  // admin routes
  { path: "admin/page", element: <AdminPage /> },
  { path: "admin/product-list", element: <AdminProductList /> },
  {
    path: "admin/product-list/page-number/:page-number",
    element: <AdminProductList />,
  },
  { path: "admin/order-list", element: <AdminOrderList /> },
  { path: "admin/user-list", element: <AdminUserList /> },
  { path: "admin/user/:id/edit", element: <AdminUserEdit /> },
  { path: "admin/dashboard", element: <AdminDashboard /> },
  { path: "admin/support", element: <AdminSupport /> },

  // seller routes
  { path: "seller", element: <Seller /> },
  { path: "seller/:id", element: <SellerProfile /> },
  { path: "seller/product-list", element: <SellerProductList /> },
  { path: "seller/order-list", element: <SellerOrderList /> },

  //   create categories/product paths
  {
    path: "create-product",
    element: <CreateProduct />,
  },
  { path: "create-product/auto-moto-boats", element: <CreateAutoMotoBoats /> },
  { path: "create-product/real-estate", element: <CreateRealEstate /> },
  {
    path: "create-product/electronic--appliances",
    element: <CreateElectronicAppliances />,
  },
  {
    path: "create-product/auto-parts",
    element: <CreateAutoParts />,
  },
  { path: "create-product/fashion", element: <CreateFashion /> },
  { path: "create-product/moms-kids", element: <CreateMomsKids /> },
  { path: "create-product/agro-industry", element: <CreateAgroIndustry /> },
  { path: "create-product/animals", element: <CreateAnimals /> },
  {
    path: "create-product/sport-free-time-art",
    element: <CreateSportFreeTimeArt />,
  },
  {
    path: "create-product/services-company-equipment",
    element: <CreateServicesCompanyEquipment />,
  },
  {
    path: "create-product/house&garden",
    element: <CreateHouseGarden />,
  },

  //   edit categories/product paths
  {
    path: ":id/edit-product/auto-moto-boats",
    element: <EditAutoMotoBoats />,
  },
  { path: ":id/edit-product/real-estate", element: <EditRealEstate /> },
  {
    path: ":id/edit-product/electronic--appliances",
    element: <EditElectronicAppliances />,
  },
  { path: ":id/edit-product/auto-parts", element: <EditAutoParts /> },
  { path: ":id/edit-product/fashion", element: <EditFashion /> },
  { path: ":id/edit-product/moms-kids", element: <EditMomsKids /> },
  { path: ":id/edit-product/agro-industry", element: <EditAgroIndustry /> },
  { path: ":id/edit-product/animals", element: <EditAnimals /> },
  {
    path: ":id/edit-product/sport-free-time-art",
    element: <EditSportFreeTimeArt />,
  },
  {
    path: ":id/edit-product/services-company-equipment",
    element: <EditServicesCompanyEquipment />,
  },
  { path: ":id/edit-product/house&garden", element: <EditHouseGarden /> },

  //  filter paths
  {
    path: "filters/name/:name/mainCategory/:mainCategory",
    element: <Filters />,
  },
  { path: "filters/name/:name", element: <Filters /> },
  {
    path: "filters/mainCategory/:mainCategory/category/:category/subCategory/:subCategory",
    element: <Filters />,
  },
  {
    path: "filters/mainCategory/:mainCategory/category/:category",
    element: <Filters />,
  },
  {
    path: "filters/mainCategory/:mainCategory/name/:name/category/:category/subCategory/:subCategory/model/:model/steeringWheel/:steeringWheel/carosery/:carosery/colour/:colour/condition/:condition/fuel/:fuel/minPrice/:minPrice/maxPrice/:maxPrice/minYear/:minYear/maxYear/:maxYear/minKm/:minKm/maxKm/:maxKm/minEngine/:minEngine/maxEngine/:maxEngine/minHorsePower/:minHorsePower/maxHorsePower/:maxHorsePower/furnished/:furnished/rooms/:rooms/minUsefulSurface/:minUsefulSurface/maxUsefulSurface/:maxUsefulSurface/groundType/:groundType/commerceType/:commerceType/brand/:brand/rezolution/:rezolution/usefulTask/:usefulTask/size/:size/material/:material/season/:season/display/:display/whichFor/:whichFor/waterResistance/:waterResistance/caseMaterial/:caseMaterial/caseColour/:caseColour/soleType/:soleType/floor/:floor/minLandArea/:minLandArea/maxLandArea/:maxLandArea/minBuiltArea/:minBuiltArea/maxBuiltArea/:maxBuiltArea/compartimentType/:compartimentType/productType/:productType/chargeType/:chargeType/mountType/:mountType/tireSize/:tireSize/tireWidth/:tireWidth/tireProfile/:tireProfile/rimType/:rimType/rimSize/:rimSize/age/:age/experience/:experience/operationDistance/:operationDistance/availability/:availability/financePosibility/:financePosibility/guarantee/:guarantee/emergencyService/:emergencyService/memoryR/:memoryR/videoType/:videoType/storageType/:storageType/processorBrand/:processorBrand",
    element: <Filters />,
  },
]);

export default router;
