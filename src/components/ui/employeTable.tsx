import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeTables = ({ data }: any) => {
  const groupedData = data.reduce((acc: any, curr: any) => {
    const date = dayjs(curr.createDate).format("YYYY-MM-DD");
    if (!acc[date]) acc[date] = [];
    acc[date].push(curr);
    return acc;
  }, {});

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid #ccc",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Tarih
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Saatler
          </th>
        </tr>
      </thead>
      <tbody>
        {groupedData &&
          Object.entries(groupedData).map(([date, records]: [any, any]) => (
            <tr key={date}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {date}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {records.map((record: any) => (
                  <>
                    <span
                      key={record.id}
                      style={{
                        display: "inline-block",
                        padding: "4px 8px",
                        margin: "2px",
                        color: "#fff",
                        borderRadius: "4px",
                        backgroundColor: record.isEntry ? "#007BFF" : "#DC3545",
                      }}
                    >
                      {dayjs(record.createDate).format("HH:mm")}{" "}
                      {record.isEntry ? "Giriş" : "Çıkış"}
                    </span>
                    <br />
                    not:<span>{record.note}</span>
                    <br />
                  </>
                ))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const EmployeeTable = (record: any) => {
  const [startedDate, setStartedDate] = useState(null);
  const [endedDate, setEndedDate] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.mznekip.com/shift/list?page=1,10&sort=id,ASC&filter={%22userId%22:%22${record.record.id}%22`;

      if (startedDate) {
        url += `,%22day__gte%22:%22${dayjs(startedDate).format(
          "YYYY-MM-DD"
        )}%22`;
      }

      if (endedDate) {
        url += `,%22day__lte%22:%22${dayjs(endedDate).format("YYYY-MM-DD")}%22`;
      }

      url += `}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();

      setEmployeeData(data.data || []);
    };

    fetchData();
  }, [startedDate, endedDate]);

  return (
    <div style={{ margin: "20px auto", maxWidth: "800px" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Çalışan Hareketleri
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Başlangıç Tarihi
          </label>
          <DatePicker
            selected={startedDate}
            onChange={(date: any) => setStartedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Başlangıç Tarihi Seçin"
            // style={{
            //   padding: "8px",
            //   border: "1px solid #ccc",
            //   borderRadius: "4px",
            //   width: "100%",
            // }}
          />
        </div>
        <div>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Bitiş Tarihi
          </label>
          <DatePicker
            selected={endedDate}
            onChange={(date: any) => setEndedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Bitiş Tarihi Seçin"
            // style={{
            //   padding: "8px",
            //   border: "1px solid #ccc",
            //   borderRadius: "4px",
            //   width: "100%",
            // }}
          />
        </div>
      </div>
      <EmployeeTables data={employeeData} />
    </div>
  );
};

export default EmployeeTable;
