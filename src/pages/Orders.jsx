import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        dataSource={ordersData}
        id="gridcomp"
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective
              key={i}
              field={item.field}
              headerText={item.headerText}
              width={item.width}
              textAlign={item.textAlign}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
