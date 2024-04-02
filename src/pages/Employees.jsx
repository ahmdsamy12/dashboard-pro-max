import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";

const Employyes = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employyes" />
      <GridComponent
        dataSource={employeesData}
        id="gridcomp"
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width={"auto"}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective
              key={i}
              field={item.field}
              headerText={item.headerText}
              width={item.width}
              textAlign={item.textAlign}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employyes;
