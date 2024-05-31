import { EnumDeclaration } from "typescript";
import { languages } from "../Type/Experience";
import { PickOnlyOne } from "../Type/PickOne";

type Props = {
    Keys: Array<String>,
    filters: PickOnlyOne<object>;
}

const Filter = (props: Props) => {

    return <>
        {props.Keys.map(item => {
            return <>{item}</>
        })}
    </>
}

export default Filter