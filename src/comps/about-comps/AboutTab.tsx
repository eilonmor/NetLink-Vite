import {ButtonViewDetails} from "./ButtonViewDetails"
import { HeadLineTab } from "./HeadLineTab"
import { IconTab } from "./IconTab"
import { TextBoxTab } from "./TextBoxTab"

interface Props{
    iconTabText: string; 
    headLineTabText:string;
    textBoxTabText:string;
    buttonViewDetailsText:string;
}
export function AboutTab({iconTabText, headLineTabText,textBoxTabText, buttonViewDetailsText}: Props) {
    return(
        <div className="col-lg-4">
        <IconTab srcPath={iconTabText}/>
        <HeadLineTab headLineText={headLineTabText}/>
        <TextBoxTab textValue={textBoxTabText}/>
        <ButtonViewDetails buttonText={buttonViewDetailsText}/>
        </div>
    )
    
}