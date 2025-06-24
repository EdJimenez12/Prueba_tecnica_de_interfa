import React from "react";

interface DataItemsProps {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    metadata?: React.ReactNode;
    rigthIcon?: React.ReactNode;
}

const DataItems: React.FC<DataItemsProps> = ({
    icon, title, subtitle, metadata, rigthIcon
})=> {
    return(
        <div className="flex justify-between items-center p-3 border rounded bg-white shadow-sm">
            <div className="flex items-start gap-3">
                {icon && <div className="text-xl">{icon}</div>}
                <div>
                    <p className="font-medium text-sm">{title}</p>
                    {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
                    {metadata && <p className="text-xs text-gray-500">{metadata}</p>}
                </div>
            </div>
            {rigthIcon && <div className="text-xl">{rigthIcon}</div>}
        </div>
    )
}
export default DataItems;