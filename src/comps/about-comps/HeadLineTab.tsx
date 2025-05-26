
interface HeadLineTabProps {
    headLineText: string; // Define the type of the prop
}

export function HeadLineTab({headLineText}:HeadLineTabProps) {
    return (
        <h2>{headLineText}</h2>
    )
}