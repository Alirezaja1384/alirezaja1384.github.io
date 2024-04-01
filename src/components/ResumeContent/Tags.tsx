function Tags({ tags }: { tags: string[] }) {
    return (
        <div className="flex">
            <div style={{ direction: "ltr" }} className="text-left ml-auto">
                {tags.map((tag) => (
                    <button disabled key={tag} className="badge badge-gray">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Tags;
