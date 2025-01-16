

import { Button } from "react-admin"

interface LeadsData {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    status: string,
    createDate: Date
}

export default function VerificateLeads(data: LeadsData | any) {
    const id = localStorage.getItem("id")
    const VerificateLeads = () => {
        if (data.data.firstName | data.data.lastName | data.data.email | data.data.phone | data.data.status | data.data.createDate) {
            fetch('https://api.mznekip.com/students/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: data.data.firstName,
                    lastName: data.data.lastName,
                    email: data.data.email,
                    phone: data.data.phone,
                    status: data.data.status,
                    createDate: data.data.createDate,
                    call: "",
                    image: "",
                    stage: "0",
                    confirmUser: id,
                    leadUser: 0,
                    type: data.data.type,
                    leadReference: data.data.id
                })
            }).then(response => {
                if (response.ok) {
                    // todo buraya referans eklenmeli
                    const res = response.json()
                    console.log(res);


                    fetch('https://api.mznekip.com/leads/update?id=' + data.data.id, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "authorization": "Bearer " + localStorage.getItem("access_token"),
                        },
                        body: JSON.stringify({
                            ...data.data,
                            status: "6"
                        })
                    }).then(response => {
                        const responser = response.json()
                        console.log(responser);

                        if (response.ok) {
                            console.log('Success:', response);
                            alert("Müşteri onaylandı.")
                        } else {
                            console.log('Error:', response);
                        }
                    }

                    ).catch((error) => {
                        console.error('Error:', error);
                    }
                    )


                } else {
                    console.log('Error:', response);
                }
            }

            ).catch((error) => {
                console.error('Error:', error);
            }
            )
        } else {
            alert("Lütfen tüm alanları doldurunuz.")
        }
    }

    return (
        <div>
            <Button style={{ background: "green", color: "white" }} label="Onayla" onClick={() => { VerificateLeads() }} />
        </div>
    )
}