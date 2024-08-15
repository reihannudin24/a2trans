export const LabelText = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="mb-3 block  text-sm font-medium text-gray-600">
            {text}
        </label>
    )
}