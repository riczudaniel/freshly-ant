import "../styles/Header.css"

export default function Header({user}) {
    return(
        <div className="header-container">
            <img src="logo.png" alt="Freshly Logo" />
            <p>Welcome {user}</p>
        </div>
    )
}