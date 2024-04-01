import { ReactNode } from "react";

function NoBreak({ children }: { children: ReactNode }) {
    return <div className="print:break-inside-avoid">{children}</div>;
}

export default NoBreak;
