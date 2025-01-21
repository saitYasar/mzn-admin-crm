import { Button } from "react-admin";

interface LeadsData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  createDate: Date;
}

export default function VerificateSell(data: LeadsData | any) {
  const id = localStorage.getItem("id");
  console.log(data.data);

  const VerificateLeads = () => {
    if (
      data.data.firstName |
      data.data.lastName |
      data.data.date |
      data.data.phone |
      data.data.serviceType
    ) {
      fetch("https://api.mznekip.com/students/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          email: "",
          phone: data.data.phone,
          status: data.data.status,
          createDate: new Date(),
          call: "",
          image: "",
          stage: "0",
          confirmUser: id,
          leadUser: 0,
          type: data.data.serviceType,
          leadReference: 0,
        }),
      })
        .then((response) => {
          if (response.ok) {
            const res = response.json();

            fetch("https://api.mznekip.com/sell/update?id=" + data.data.id, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + localStorage.getItem("access_token"),
              },
              body: JSON.stringify({
                ...data.data,
              }),
            })
              .then((response) => {
                const responser = response.json();

                if (response.ok) {
                  console.log("Success:", response);
                  alert("Müşteri onaylandı.");
                } else {
                  console.log("Error:", response);
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          } else {
            console.log("Error:", response);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Lütfen tüm alanları doldurunuz.");
    }
  };

  return (
    <div>
      <Button
        style={{ background: "green", color: "white" }}
        label="Onayla"
        onClick={() => {
          VerificateLeads();
        }}
      />
    </div>
  );
}
