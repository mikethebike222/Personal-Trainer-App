
const ApplyImageButton = () => {
    const buttonstyle = {
        position: 'absolute',    
        top: '27%',             
        left: '50%',             
        transform: 'translateX(-50%)',
        padding: '0.75rem 2rem',
        fontSize: '1.25rem',
        border: '2px solid white',
        borderRadius: '9999px',
        background: 'Black',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: 1 
    }
    return (
        <button style = {buttonstyle}>
            Apply Now
        </button>
    )
}

export default ApplyImageButton