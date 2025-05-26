
interface IconTabProps {
    srcPath: string; // Define the type of the prop
}

export function IconTab({srcPath}:IconTabProps) {
    return (
        <img className="rounded-circle" src={srcPath} alt="increase image" width={140} height={140} />
    )
}