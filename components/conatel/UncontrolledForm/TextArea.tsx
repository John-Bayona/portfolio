type PropType = {
    name: string;
    placeholder?: string;
    cols?: number;
    rows?: number;
};
function TextArea({ name, placeholder = '', cols = 50, rows = 5 }: PropType) {
    return (
        <>
            <textarea
                className='input-general w-96'
                name={name}
                placeholder={placeholder}
                cols={cols}
                rows={rows}></textarea>
        </>
    );
}
export default TextArea;
