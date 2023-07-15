import "src/css/print.css";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";

function EtceteraComponent({
    pdfLink: downloadAsPdfLink,
}: {
    pdfLink?: string;
}) {
    const handlePrint = () => window.print();

    return (
        <div className="w-full px-4 py-1 print:hidden">
            <h4 className="text-lg font-bold">سایر</h4>
            <ul className="m-1">
                <li>
                    <button onClick={handlePrint}>
                        <PrintIcon /> چاپ رزومه
                    </button>
                </li>
                {downloadAsPdfLink && (
                    <li>
                        <a
                            href={downloadAsPdfLink}
                            target="_blank"
                            rel="noreferrer"
                            className="no-style"
                        >
                            <DownloadIcon /> دانلود رزومه
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default EtceteraComponent;
