/* eslint-disable react/prop-types */
import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const Stacked = ({ width, height }) => {
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Stacked" />
      <div className="w-full">
        <ChartComponent
          width={width}
          height={height}
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          id="charts"
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[Legend, Category, StackingColumnSeries, Tooltip]}
          />
          <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Stacked;
