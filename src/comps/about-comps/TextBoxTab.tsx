interface TextBoxTabProps{
    textValue:string;
}
export function TextBoxTab({textValue}:TextBoxTabProps) {
    const textArray = textValue.split('<br />'); // Split the text on <br />
    return (
        <p>{textArray.map((line,index) => (
            <>
                {line}
                {index < textArray.length - 1 && <br />}
                </>
        ))}<br /><br /></p>
    )
}