import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SaveInfoForm() {
  const [formData, setFormData] = useState({
    param1: "",
    param2: "",
    param3: "",
    param4: "",
    param5: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-backend-api.com/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data", error);
      alert("Failed to save data");
    }
  };

  return (
    <Card className="max-w-md mx-auto p-4 shadow-lg">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Manifiesto</h2>
        <form onSubmit={handleSubmit} className="space-y-2" style={{display: 'grid', justifyContent: 'center'}}>
          <br/>
          <Input
              key="name"
              type="text"
              name="name"
              placeholder="Nombre de empresa"
              required
            />
          <br/>  
          <Input
              key="ruc"
              type="text"
              name="ruc"
              placeholder="RUC"
              required
            />
          <br/>  
          <Input
              key="costService"
              type="number"
              name="costService"
              placeholder="Precio del servicio"
              required
            />
          <br/>  
          <Button type="submit" className="w-full">Grabar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
