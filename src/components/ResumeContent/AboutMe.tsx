function AboutMeComponent({ aboutMe }: { aboutMe: string }) {
    if (aboutMe.length === 0) return null;

    return (
        <div className="m-2">
            {aboutMe.indexOf("<") === -1 ? (
                // Text content
                <p>{aboutMe}</p>
            ) : (
                // Html content
                <div dangerouslySetInnerHTML={{ __html: aboutMe }}></div>
            )}
        </div>
    );
}

export default AboutMeComponent;
