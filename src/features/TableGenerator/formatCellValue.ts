export const formatCellValue = (value: unknown) => {
    if (value == null) return "";

    return typeof value === "object" ? JSON.stringify(value) : String(value);
};
