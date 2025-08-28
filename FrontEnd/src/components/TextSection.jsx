function TextSection({ level, id, text, isError }) {
    const Tag = level;

    return (
        <section className="section">
            <Tag className={isError ? 'text miss' : 'text'} id={id}>{text}</Tag>
        </section>
    );
}

export {TextSection};