
interface ButtonViewDetailsProps{
    buttonText:string;
}
export function ButtonViewDetails({buttonText}:ButtonViewDetailsProps) {
    return (
        <p><a className="btn btn-secondary" href="#" role="button">{buttonText}</a></p>
    )
}