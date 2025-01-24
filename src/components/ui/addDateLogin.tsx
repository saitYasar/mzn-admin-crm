import { useState } from "react";
import "../ra-ui/layout/addCss.css";

const AddLoginDate = () => {
  const [actionType, setActionType] = useState("");
  const [note, setNote] = useState("");

  const handleSave = () => {
    if (!actionType) {
      alert("Lütfen giriş mi çıkış mı olduğunu seçin!");
      return;
    }

    // if (!note.trim()) {
    //   alert("Lütfen bir not girin!");
    //   return;
    // }

    const currentDateTime = new Date().toLocaleString("tr-TR");
    fetch(`https://api.mznekip.com/shift/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId: localStorage.getItem("id"),
        isEntry: actionType === "Giriş" ? true : false,
        note: note,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Kayıt başarılı!");
          setActionType("");
          setNote("");
        }
      });
  };

  return (
    <div className="add-login-date">
      <h2>Giriş/Çıkış Kaydı</h2>
      <div
        className="action-buttons"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <label>
            <input
              type="radio"
              name="action"
              value="Giriş"
              onChange={(e) => setActionType(e.target.value)}
            />
            Giriş
          </label>
          <label>
            <input
              type="radio"
              name="action"
              value="Çıkış"
              onChange={(e) => setActionType(e.target.value)}
            />
            Çıkış
          </label>
        </div>
        <div>
          <input
            placeholder="Notunuz varsa..."
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Kaydet
      </button>
    </div>
  );
};

export default AddLoginDate;
