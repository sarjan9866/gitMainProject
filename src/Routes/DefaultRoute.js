import { Route, Switch } from "react-router";
import DefaultLayout from "../Layouts/Defaultlayout";
import Loadable from 'react-loadable';
import Loading from 'Commonitem/Loader';

const DefaultRoute = (props) => {


  let AsyncElectricalItemListhouseWiring = Loadable({
    loader: () => import('Views/Electrical/House_Wiring/List'),
    loading: Loading,
  });

  let AsyncElectricalItemListindustrialWiring = Loadable({
    loader: () => import('Views/Electrical/IndustrialWiring/List'),
    loading: Loading,
  });

  let AsyncElectricalItemListcommercialWiring = Loadable({
    loader: () => import('Views/Electrical/Commercial_Wiring/List'),
    loading: Loading,
  });

 

  let AsyncElectricalItemListelectrician = Loadable({
    loader: () => import('Views/Electrical/ProfileList'),
    loading: Loading,
  });
 
 
  let AsyncPainterItemList = Loadable({
    loader: () => import('Views/Painter/ProfileList'),
    loading: Loading,
  });
  let AsyncPainterItemListColor = Loadable({
    loader: () => import('Views/Painter/PainterColor/List'),
    loading: Loading,
  });

  let AsyncPainterItemListPaintingCharge = Loadable({
    loader: () => import('Views/Painter/PaintingCharge/List'),
    loading: Loading,
  });

  let AsyncPlumberProfile = Loadable({
    loader: () => import('Views/Plumber/ProfileList'),
    loading: Loading,
  });
  
  let AsyncPlumbingInHouse = Loadable({
    loader: () => import('Views/Plumber/PlumbingInHouse/List'),
    loading: Loading,
  });
  let AsyncPlumbingInindustrial = Loadable({
    loader: () => import('Views/Plumber/PlumbingInIndustrial/List'),
    loading: Loading,
  });

  let AsyncPlumbingInCommercial = Loadable({
    loader: () => import('Views/Plumber/PlumbingInCommercial/List'),
    loading: Loading,
  });

 
  let AsyncCarpenterItems = Loadable({
    loader: () => import('Views/Carpenter/CarpenterItems/List'),
    loading: Loading,
  });
 
  let AsyncCarpenterCharge = Loadable({
    loader: () => import('Views/Carpenter/CarpenterCharge/List'),
    loading: Loading,
  });
  let AsyncCarpenterProfile = Loadable({
    loader: () => import('Views/Carpenter/ProfileList'),
    loading: Loading,
  });
 

  

  let AsyncManPowerPartTimeProfile = Loadable({
    loader: () => import('Views/ManPower/PartTime/ProfileList'),
    loading: Loading,
  });

  let AsyncfullTimeProfile = Loadable({
    loader: () => import('Views/ManPower/FullTime/ProfileList'),
    loading: Loading,
  });
  let AsyncmonthlyProfile = Loadable({
    loader: () => import('Views/ManPower/Monthly/ProfileList'),
    loading: Loading,
  });

  let AsyncElectricalItems = Loadable({
    loader: () => import('Views/Supplier/ElectricItems/List'),
    loading: Loading,
  });

  let AsyncpaintingItemsItemList = Loadable({
    loader: () => import('Views/Supplier/PaintingItems/List'),
    loading: Loading,
  });

  let AsyncSupplierCarpenterItems = Loadable({
    loader: () => import('Views/Supplier/CarpenterItems/List'),
    loading: Loading,
  });

  let AsyncSupplierPlumbingrItems = Loadable({
    loader: () => import('Views/Supplier/PlumbingItems/List'),
    loading: Loading,
  });

  let AsyncRepairElectricParts = Loadable({
    loader: () => import('Views/Repair/ElectricParts/List'),
    loading: Loading,
  });

  let AsyncRepairWaterParts = Loadable({
    loader: () => import('Views/Repair/WaterParts/List'),
    loading: Loading,
  });

  let AsyncRepairHeatingParts = Loadable({
    loader: () => import('Views/Repair/HeatingParts/List'),
    loading: Loading,
  });

  let AsyncRepairFreezeAC = Loadable({
    loader: () => import('Views/Repair/FreezeAC/List'),
    loading: Loading,
  });

  let AsyncRepairTools = Loadable({
    loader: () => import('Views/Repair/Tools/List'),
    loading: Loading,
  });

  


  let AsyncLandingPage= Loadable({
    loader: () => import('Views/LangingPage.js/LandingPage'),
    loading: Loading,
  });
  return (
    <DefaultLayout>
      <Switch>
        <Route  exact path="/electrical/houseWiring"
         component={AsyncElectricalItemListhouseWiring}/>

        <Route  exact path="/electrical/industrialWiring"
         component={AsyncElectricalItemListindustrialWiring}/>

        <Route  exact path="/electrical/commercialWiring"
         component={AsyncElectricalItemListcommercialWiring}/>
        <Route  exact path="/electrical/electrician"
         component={AsyncElectricalItemListelectrician}/>

        <Route  exact path="/painter" component={AsyncPainterItemList}/>
        <Route  exact path="/painter/color" component={AsyncPainterItemListColor}/>
        <Route  exact path="/painter/paintingCharge" component={AsyncPainterItemListPaintingCharge}/>
        
        <Route  
        exact path="/plumber/plumbingInHouse" 
        component={AsyncPlumbingInHouse}/>

        <Route  
        exact path="/plumber/plumbingInIndustrial" 
        component={AsyncPlumbingInindustrial}/>

        <Route  
        exact path="/plumber/plumbingInCommercial" 
        component={AsyncPlumbingInCommercial}/>


        <Route  exact path="/plumber/profile" component={AsyncPlumberProfile}/>

        <Route  
        exact path="/carpenter/carpenterItems" 
        component={AsyncCarpenterItems}/>

        <Route  
        exact path="/carpenter/carpenterCharge" 
        component={AsyncCarpenterCharge}/>
        <Route  
        exact path="/carpenter/profile" 
        component={AsyncCarpenterProfile}/>

        <Route  exact path="/manPower/monthly" 
        component={AsyncmonthlyProfile}/>

        <Route  exact path="/manPower/fullTime"
         component={AsyncfullTimeProfile}/>

        <Route  exact path="/manPower/partTime"
         component={AsyncManPowerPartTimeProfile}/>

        <Route  exact path="/supplier/electricItems"
         component={AsyncElectricalItems}/>

        <Route  exact path="/supplier/paintingItems"
         component={AsyncpaintingItemsItemList}/>

        <Route  exact path="/supplier/plumbingItems"
         component={AsyncSupplierPlumbingrItems}/>

        <Route  exact path="/supplier/carpenterItems"
         component={AsyncSupplierCarpenterItems}/>

        <Route  exact path="/repair/electricParts"
         component={AsyncRepairElectricParts}/>

        <Route  exact path="/repair/waterParts"
         component={AsyncRepairWaterParts}/>

        <Route  exact path="/repair/heatingParts"
         component={AsyncRepairHeatingParts}/>

        <Route  exact path="/repair/freezeAC"
         component={AsyncRepairFreezeAC}/>

        <Route  exact path="/repair/Tools"
         component={AsyncRepairTools}/>


        <Route  exact path='/' component={AsyncLandingPage}></Route>
      </Switch>
    </DefaultLayout>
  );
};
export default DefaultRoute;
