import type { IActivityHandler } from "@geocortex/workflow/runtime";
import { XMLBuilder } from "fast-xml-parser";

interface ConvertToXmlInputs {
    /**
     * @description The object to convert to XML text.
     * @required
     */
    object: any;

    /**
     * @description Whether to format the XML output. The default is false.
     */
    format: boolean;
}

interface ConvertToXmlOutputs {
    /**
     * @description The XML text.
     */
    result: string;
}

/**
 * @displayName Convert To XML
 * @category XML
 * @description Converts an object to XML text.
 * @clientOnly
 * @unsupportedApps GMV
 */
export default class ConvertToXmlActivity implements IActivityHandler {
    execute(inputs: ConvertToXmlInputs): ConvertToXmlOutputs {
        const { format, object } = inputs;

        const builder = new XMLBuilder({
            format,
            ignoreAttributes: false,
        });
        const result = builder.build(object);

        return {
            result,
        };
    }
}
