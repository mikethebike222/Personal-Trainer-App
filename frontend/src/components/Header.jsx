// Header displays the site's name across all pages.
const Header = () => {
    const headerStyle = {
        color: 'lightgray',
        background: 'black',
        fontSize: 'clamp(28px, 6vw, 30px)',
        padding: '0.55%',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: '0',
        width: '100%',
        fontFamily: 'Impact, sans-serif',
      }

    return (
        <div>
            <header style={headerStyle}>
                Jacob Oestreicher Hypertrophy Coaching
            </header>
        </div>
    )
}
export default Header