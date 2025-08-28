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

export {FormInput};