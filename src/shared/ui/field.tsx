import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

export const FieldSet = ({ className, ...props }: ComponentProps<"fieldset">) => (
    <fieldset
        data-slot="field-set"
        className={cn("flex min-w-0 flex-col gap-6", className)}
        {...props}
    />
);

export const FieldLegend = ({ className, ...props }: ComponentProps<"legend">) => (
    <legend
        data-slot="field-legend"
        className={cn("mb-3 text-paragraph font-semibold", className)}
        {...props}
    />
);
