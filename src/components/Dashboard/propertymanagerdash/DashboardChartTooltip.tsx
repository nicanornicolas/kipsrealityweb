import React from "react";

type PayloadItem = {
	name?: string;
	value?: number | string;
	color?: string;
	stroke?: string;
	fill?: string;
};

type DashboardChartTooltipProps = {
	active?: boolean;
	payload?: PayloadItem[];
	label?: string;
	labelFormatter?: (label: string) => string;
	nameFormatter?: (name: string) => string;
	valueFormatter?: (value: number | string, item: PayloadItem) => string;
	showLabelDivider?: boolean;
};

export const DASHBOARD_TOOLTIP_WRAPPER_STYLE = { zIndex: 50 };

function formatValue(value: number | string | undefined) {
	if (value === null || value === undefined) return "-";
	if (typeof value === "number") return value.toLocaleString();
	return value;
}

export default function DashboardChartTooltip({
	active,
	payload,
	label,
	labelFormatter,
	nameFormatter,
	valueFormatter,
	showLabelDivider = true
}: DashboardChartTooltipProps) {
	if (!active || !payload || payload.length === 0) return null;

	const rawLabel = label ?? "";
	const safeLabel = rawLabel ? (labelFormatter ? labelFormatter(rawLabel) : rawLabel) : "";

	return (
		<div className="bg-white p-4 border border-gray-100 shadow-xl rounded-xl text-sm">
			{safeLabel ? (
				<p className={`font-bold text-gray-900 mb-2 ${showLabelDivider ? "border-b pb-1" : ""}`}>{safeLabel}</p>
			) : null}
			<div className="space-y-1">
				{payload.map((item, idx) => {
					const color = item.color || item.stroke || item.fill || "#111827";
					const name = item.name ?? "Value";
					const displayName = nameFormatter ? nameFormatter(name) : name;
					const rawValue = item.value;
					const displayValue =
						rawValue === null || rawValue === undefined
							? "-"
							: valueFormatter
								? valueFormatter(rawValue, item)
								: formatValue(rawValue);
					return (
						<p key={idx} className="flex justify-between gap-4 font-semibold" style={{ color }}>
							<span>{displayName}</span>
							<span>{displayValue}</span>
						</p>
					);
				})}
			</div>
		</div>
	);
}
