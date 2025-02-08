import {
  DateField,
  FileField,
  FileInput,
  SelectField,
  Show,
  TabbedShowLayout,
  TabbedShowLayoutTabs,
  TextField,
  useShowController,
} from "react-admin";
import VerificateLeads from "../../components/ra-ui/verificateLeads";
import { useState } from "react";
import * as XLSX from "xlsx";

export const LeadsShow = (props: any) => {
  const { record } = useShowController(props);
  const [uploadError, setUploadError] = useState<any[]>([]);

  const handleFileUpload = async (file: File) => {
    try {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet);

        const failedRecords: any[] = [];

        // Kayıtları tek tek işle
        for (const record of jsonData) {
          try {
            const response = await fetch(
              "https://api.mznekip.com/leads/create",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...record,
                  call: "",
                  Images: "",
                }),
              }
            );

            if (!response.ok) {
              failedRecords.push(record); // Eklenmeyen kaydı listeye ekle
            }
          } catch (error) {
            console.error("Kayıt eklenirken hata oluştu:", error);
            failedRecords.push(record); // Hata durumunda kaydı listeye ekle
          }
        }

        // Eklenmeyen kayıtları göster
        setUploadError(failedRecords);

        if (failedRecords.length > 0) {
          alert(
            `${failedRecords.length} kayıt eklenemedi. Listeyi aşağıda görebilirsiniz.`
          );
        } else {
          alert("Tüm veriler başarıyla eklendi.");
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Dosya işlenirken bir hata oluştu:", error);
    }
  };

  return (
    <Show {...props}>
      <TabbedShowLayout
        tabs={
          <TabbedShowLayoutTabs variant="scrollable" scrollButtons="auto" />
        }
      >
        <TabbedShowLayout.Tab label="Genel">
          <TextField source="id" label="İd" />
          <TextField source="firstName" label="İsim" />
          <TextField source="lastName" label="Soyisim" />
          <TextField source="email" label="Email" />
          <TextField source="phone" label="Telefon" />
          <SelectField
            source="status"
            label="Müşteri Durumu"
            choices={[
              { id: "0", name: "Yeni" },
              { id: "1", name: "Yeni" },
              { id: "2", name: "İletişimde" },
              { id: "3", name: "Takipte" },
              { id: "4", name: "İlgili" },
              { id: "5", name: "Pazarlıkta" },
              { id: "6", name: "Satış Tamamlandı" },
              { id: "7", name: "Kaybedildi" },
              { id: "8", name: "Niteliksiz" },
            ]}
          />
          <SelectField
            source="type"
            label="Müşteri Tipi"
            choices={[
              { id: 0, name: "Tanımlanmadı" },
              { id: 1, name: "Dropshipping" },
              { id: 2, name: "Arbitraj" },
              { id: 3, name: "PrivateLabel" },
              { id: 4, name: "Suspend" },
            ]}
          />
          <TextField source="price" label="Teklif" />
          <DateField source="createDate" label="Oluşturulma Tarihi" />
          {record?.status !== "6" && <VerificateLeads data={record} />}
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="Excel Yükleme">
          <h2>Excel ile Yükleme</h2>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={(e) =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
            style={{
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#4b5563",
            }}
          />
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/public/ornek-dosya.xlsx";
              link.download = "ornek-dosya.xlsx";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Örnek Excel Formatı indirmek İçin Tıkla
          </button>
          <ol>
            <li>Örnek dosyayı indir</li>
            <li>Eklenmesini istediğin başvuruları örnekteki formata koy.</li>
            <li>
              Geri yükle. Eğer eklenmeyen olursa sana aşağıda yazacak. Onları
              tekrar dene. <br /> Hata olduğunu düşünürsen yazılımcı ile
              iletişime geç. (5465987822)
            </li>
          </ol>
          {uploadError.length > 0 && (
            <div>
              <h3>Eklenemeyen Kayıtlar:</h3>
              <ul>
                {uploadError.map((error, index) => (
                  <li key={index}>{JSON.stringify(error)}</li>
                ))}
              </ul>
            </div>
          )}
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
