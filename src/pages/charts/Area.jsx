import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg">
      <Header category={"Chart"} title={"Area"} />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Light" ? "#fff" : "#33373e"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
