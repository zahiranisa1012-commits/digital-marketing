// LOGIN
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin") {
        localStorage.setItem("auth", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Login gagal!");
    }
}

// CEK LOGIN
if (window.location.pathname.includes("dashboard")) {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "index.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}

// PRODUK
const form = document.getElementById("productForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const photo = document.getElementById("photo").files[0];
        const desc = document.getElementById("description").value;
        const result = document.getElementById("result").value;
        const benefit = document.getElementById("benefit").value;

        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById("productOutput").innerHTML = `
                <h3>Detail Produk</h3>
                <img src="${reader.result}">
                <p><strong>Keterangan Produk:</strong><br>${desc}</p>
                <p><strong>Hasil Produk:</strong><br>${result}</p>
                <p><strong>Peluang & Keuntungan:</strong><br>${benefit}</p>
            `;
        }
        reader.readAsDataURL(photo);
    });
}
