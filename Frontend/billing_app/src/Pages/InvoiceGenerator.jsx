import React, { useState } from "react";
import { FileText, User, Phone, DollarSign, Percent, Receipt } from "lucide-react";

function InvoiceGenerator() {
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");

  const calculateTotal = () => {
    const sub = parseFloat(subtotal) || 0;
    const disc = parseFloat(discount) || 0;
    const taxAmt = parseFloat(tax) || 0;
    return sub - disc + taxAmt;
  };

  const handleGeneratePDF = () => {
    alert("PDF generation feature coming soon! 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-5xl relative">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          
          <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">My Company Pvt Ltd</h1>
                  <p className="text-sm text-white/80">Professional Invoice Generator</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Customer Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                  />
                </div>
                
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Customer Contact"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Receipt className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Billing Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative group">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="number"
                    placeholder="Subtotal"
                    value={subtotal}
                    onChange={(e) => setSubtotal(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>
                
                <div className="relative group">
                  <Percent className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="number"
                    placeholder="Discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>
                
                <div className="relative group">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="number"
                    placeholder="Tax"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="relative space-y-3">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span className="text-lg font-semibold">₹ {parseFloat(subtotal) || 0}</span>
                </div>
                
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Discount</span>
                  <span className="text-lg font-semibold text-red-600">- ₹ {parseFloat(discount) || 0}</span>
                </div>
                
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Tax</span>
                  <span className="text-lg font-semibold">₹ {parseFloat(tax) || 0}</span>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-4"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Amount</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    ₹ {calculateTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button 
                onClick={handleGeneratePDF}
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Generate PDF Invoice
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceGenerator;