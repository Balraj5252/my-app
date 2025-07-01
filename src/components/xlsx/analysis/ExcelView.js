import TableView from "./TableView";

const ExcelView = (props) => {
    return (
        <div>
          <TableView data = {props.excelData} />
        </div>
    );
}

export default ExcelView;