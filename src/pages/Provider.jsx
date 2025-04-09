import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SaveInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    ruc: "",
    costService: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = formData;
    request.createdUser = 1
    try {
      const response = await fetch("http://127.0.0.1:5000/save/provider", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
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
        <h2 className="text-xl font-bold mb-4">Proveedor</h2>
        <form onSubmit={handleSubmit} className="space-y-2" style={{display: 'grid', justifyContent: 'center'}}>
          <br/>
          <Input
              key="name"
              type="text"
              name="name"
              placeholder="Nombre de empresa"
              onChange={handleChange}
              required
              fullWidth
            />
          <br/>  
          <Input
              key="ruc"
              type="text"
              name="ruc"
              placeholder="RUC"
              onChange={handleChange}
              required
            />
          <br/>  
          <Input
              key="costService"
              type="number"
              name="costService"
              placeholder="Precio del servicio"
              onChange={handleChange}
              required
            />
          <br/>  
          <Button type="submit" className="w-full">Grabar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
