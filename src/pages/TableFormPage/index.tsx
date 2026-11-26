import { useLocation } from "react-router-dom";
import TableForm from "../../widgets/TableForm";

const TableFormPage = () => {
    const { pathname } = useLocation();
    const instanceId = pathname.split("/").filter(Boolean).pop() ?? "";

    return <TableForm instanceId={instanceId} />;
};
export default TableFormPage;
