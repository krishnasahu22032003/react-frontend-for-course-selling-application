export default function Navbar() {
    return (
        <div style={{ backgroundColor: "black",color:'white' }}>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 40px",
                    margin: 0,
                    fontSize: 18,
                }}
            >
                <li>
                    <h3 style={{ margin: 0, fontSize: 28, color: "white" }}>100xDevs</h3>
                </li>
                <li style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>
                        Courses
                    </a>
                    <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>
                        Testimonials
                    </a>
                    <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>
                        FAQs
                    </a>
                    <button
                        style={{
                            borderRadius: 20,
                            backgroundColor: "#000",
                            color: "#fff",
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </button>
                </li>
            </ul>
        </div>
    );
}
