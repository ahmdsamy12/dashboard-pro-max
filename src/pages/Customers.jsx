import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        id="gridcomp"
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width={"auto"}
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective
              key={i}
              type={item.type}
              field={item.field}
              headerText={item.headerText}
              width={item.width}
              textAlign={item.textAlign}
              format={item.format}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
