type PropType = {
    type?: 'text' | 'checkbox' | 'mail' | 'tel';
    pattern?: string;
    name: string;
    placeholder?: string;
    className?: string;
    id?: string;
};
function Input({
    type = 'text',
    pattern = '.*',
    name,
    placeholder,
    className = '',
    id = '',
}: PropType) {
    return (
        <>
            <input
                className={`input-general ${className}`}
                type={type}
                pattern={pattern}
                name={name}
                placeholder={placeholder}
                id={id}
            />
        </>
    );
}
export default Input;
