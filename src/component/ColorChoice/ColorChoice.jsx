import React, { useState } from "react";
import "./ColorChoice.css";

const ralColors = [
  { code: "10000", name: "Зелёно-бежевый", color: "#cec094" },
  { code: "1001", name: "Бежевый", color: "#c2b078" },
  { code: "1002", name: "Песочно-жёлтый", color: "#d6ae61" },
  { code: "1003", name: "Сигнальный жёлтый", color: "#f4a900" },
  { code: "1004", name: "Жёлто-золотой", color: "#e49e00" },
  { code: "1005", name: "Медово-жёлтый", color: "#c89300" },
  { code: "1006", name: "Кукурузно-жёлтый", color: "#e2b007" },
  { code: "1007", name: "Нарциссово-жёлтый", color: "#e2a700" },
  { code: "1011", name: "Коричнево-бежевый", color: "#af804f" },
  { code: "1012", name: "Лимонно-жёлтый", color: "#ddc372" },
  { code: "1013", name: "Жемчужно-белый", color: "#e9e5ce" },
  { code: "1014", name: "Слоновая кость", color: "#dfcea1" },
  { code: "1015", name: "Светлая слоновая кость", color: "#EBDEBE" },
  { code: "1016", name: "Жёлтая сера", color: "#EAF044" },
  { code: "1017", name: "Шафраново-жёлтый", color: "#F5B752" },
  { code: "1018", name: "Цинково-жёлтый", color: "#F3E03B" },
  { code: "1019", name: "Серо-бежевый", color: "#A5957E" },
  { code: "1020", name: "Оливково-жёлтый", color: "#aba44d" },
];

const ColorChoice = () => {
  const [modal, setModal] = useState(null); // 'body' | 'doors' | null
  const [differentDoors, setDifferentDoors] = useState(false);
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [selectedSteel, setSelectedSteel] = useState(null);
  const [selectedRal, setSelectedRal] = useState(null);

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  const handleSteelSelect = (type) => {
    setSelectedSteel(type);
    // Optionally, update your parent or form state here
  };

  const handleRalSelect = (code) => {
    setSelectedRal(code);
    // Optionally, update your parent or form state here
  };

  return (
    <div className="color-choice">
      <div className="content-wrapper">
        <p className="div_color">Цвет</p>
        <div className="button-group">
          <button className="dropdown-btn" onClick={() => openModal("body")}>
            Корпус
          </button>
          <button className="dropdown-btn" onClick={() => openModal("doors")}>
            Дверцы
          </button>
        </div>
      </div>
      {modal === "body" && (
        <div className="popup">
          <div
            className="popup-content"
            style={{ minWidth: "420px", position: "relative" }}
          >
            <button
              className="close"
              style={{ position: "absolute", top: 10, right: 10 }}
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 style={{ marginTop: 0 }}>Цвет корпуса</h2>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Цвета RAL
            </div>
            <div className="color-grid">
              {ralColors.map((c) => (
                <div
                  key={c.code}
                  className="color-box"
                  style={{ background: c.color }}
                  title={c.name}
                  onClick={() => setSelectedBody(c.code)}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "#222",
                      textAlign: "center",
                    }}
                  >
                    {c.code}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#222",
                      textAlign: "center",
                    }}
                  >
                    {c.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {modal === "doors" && (
        <div className="popup">
          <div
            className="popup-content"
            style={{ minWidth: "420px", position: "relative" }}
          >
            <button
              className="close"
              style={{ position: "absolute", top: 10, right: 10 }}
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 style={{ marginTop: 0 }}>Цвет дверок</h2>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
              }}
            >
              Разные цвета дверок
              <input
                type="checkbox"
                checked={differentDoors}
                onChange={(e) => setDifferentDoors(e.target.checked)}
              />
            </label>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Нержавеющая сталь
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <div className="steel-grid">
                <div
                  className={`steel-cell${
                    selectedSteel === "silver" ? " selected" : ""
                  }`}
                  onClick={() => handleSteelSelect("silver")}
                  tabIndex={0}
                  aria-label="Серебро"
                  role="button"
                >
                  <div
                    className="steel-color"
                    style={{ background: "#cccccc" }}
                  ></div>
                  <div className="steel-label">Серебро</div>
                </div>
                <div
                  className={`steel-cell${
                    selectedSteel === "gold" ? " selected" : ""
                  }`}
                  onClick={() => handleSteelSelect("gold")}
                  tabIndex={0}
                  aria-label="Золото"
                  role="button"
                >
                  <div
                    className="steel-color"
                    style={{ background: "#ffe100" }}
                  ></div>
                  <div className="steel-label">Золото</div>
                </div>
              </div>
            </div>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Цвета RAL
            </div>
            <div className="ral-grid">
              {ralColors.map((color, idx) => (
                <div
                  key={color.code}
                  className={`ral-cell${
                    selectedRal === color.code ? " selected" : ""
                  }`}
                  onClick={() => handleRalSelect(color.code)}
                  tabIndex={0}
                  aria-label={color.name}
                  role="button"
                >
                  <div
                    className="ral-swatch"
                    style={{ background: color.hex }}
                  ></div>
                  <div className="ral-code">{color.code}</div>
                  <div className="ral-label">{color.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorChoice;
