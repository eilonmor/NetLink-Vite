interface FeaturetteProps {
    heading: string;
    subheading: string;
    description: string;
    imgSrc: string;
    reverse?: boolean;
}

export function Featurette({ heading, subheading, description, imgSrc, reverse }: FeaturetteProps) {
    return (
        <div className={`row featurette ${reverse ? "flex-row-reverse" : ""}`}>
            <div className={`col-md-7 ${reverse ? "order-md-2" : ""}`}>
                <h2 className="featurette-heading">
                    {heading}
                    <span className="text-muted"> {subheading}</span>
                </h2>
                <p className="lead">{description}</p>
            </div>
            <div className={`col-md-5 ${reverse ? "order-md-1" : ""}`}>
                <img style={{ width: "300px", height: "200px" }} src={imgSrc} alt={heading} />
            </div>
        </div>
    );
}