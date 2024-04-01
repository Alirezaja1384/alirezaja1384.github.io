import "src/css/print.css";
import PrintIcon from "@mui/icons-material/Print";

function EtceteraComponent() {
    const handlePrint = () => window.print();

    return (
        <div className="w-full py-1 print:hidden">
            <h4 className="text-lg font-bold">سایر</h4>
            <ul className="m-1">
                <li>
                    <button onClick={handlePrint}>
                        <PrintIcon /> چاپ رزومه
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default EtceteraComponent;
