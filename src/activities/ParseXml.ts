import type { IActivityHandler } from "@vertigis/workflow";
import { XMLParser } from "fast-xml-parser";

interface ParseXmlInputs {
    /**
     * @displayName XML
     * @description The XML to convert.
     * @required
     */
    xml: string;
}

interface ParseXmlOutputs {
    /**
     * @description The object corresponding to the given XML text.
     */
    result: any;
}

/**
 * @displayName Parse XML
 * @category XML
 * @description Converts XML text into an object.
 * @clientOnly
 * @supportedApps EXB, GVH, GWV, WAB
 */
export default class ParseXml implements IActivityHandler {
    execute(inputs: ParseXmlInputs): ParseXmlOutputs {
        const { xml } = inputs;

        const parser = new XMLParser({
            allowBooleanAttributes: true,
            ignoreAttributes: false,
        });
        const result = parser.parse(xml);

        return {
            result,
        };
    }
}
