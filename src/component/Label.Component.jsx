export const LabelText = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="mb-3 block text-base font-medium text-gray-600">
            {text}
        </label>
    )
}