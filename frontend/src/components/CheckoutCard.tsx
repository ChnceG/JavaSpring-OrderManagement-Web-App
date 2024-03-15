import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutCard: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    state: '',
    pin: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      navigate('/success');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-center text-2xl">Checkout</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="firstName" className='bg-white' value={formData.firstName} onChange={handleFormChange} placeholder="First Name" required />
        <input type="text" name="lastName" className='bg-white' value={formData.lastName} onChange={handleFormChange} placeholder="Last Name" required />
        <input type="text" name="city" className='bg-white' value={formData.city} onChange={handleFormChange} placeholder="City" required />
        <input type="text" name="street" className='bg-white' value={formData.street} onChange={handleFormChange} placeholder="Street" required />
        <input type="text" name="state" className='bg-white' value={formData.state} onChange={handleFormChange} placeholder="State" required />
        <input type="text" name="pin" className='bg-white' value={formData.pin} onChange={handleFormChange} placeholder="Pin" required />
        <input type="text" name="phoneNumber" className='bg-white' value={formData.phoneNumber} onChange={handleFormChange} placeholder="Phone Number" required />
        <button type="submit" className='border mx-auto p-1 border-slate-900'>Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutCard;