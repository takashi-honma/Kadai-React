import classNames from 'classnames';

function TextSection({ level, id, text, isError }) {
    const Tag = level;

    const textClass = classNames('text', {
        miss: isError,
    });

    return (
        <section className="section">
            <Tag className={textClass} id={id}>{text}</Tag>
        </section>
    );
}

function FormInput({ label, type, id, value, changeValue }) {
    return (
        <tr>
            <th>
                <label className="form-headline" htmlFor={id}>
                    {label}
                </label>
            </th>
            <td>
                <input
                    className="input"
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => changeValue(id, e.target.value)}
                />
            </td>
        </tr>
    );
}

function LoadingSection() {
    return (
        <section className="section hidden" id="loadingSection">
            <div className="loading">
                <div className="loading-circle"></div>
            </div>
        </section>
    );
}

export { TextSection, FormInput, LoadingSection };