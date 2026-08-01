import React from 'react';

export default function PaymentSection() {
  return (
    <section className="py-12 bg-black border-y border-yellow-600/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-black tracking-wider mb-8 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Deposit & Withdrawal
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {/* UPI */}
          <div className="bg-white rounded-2xl py-3 px-6 flex items-center justify-center w-40 h-24 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-black italic text-gray-700 tracking-tighter flex items-center">
                UPI <span className="text-green-600 text-xl ml-1">▶</span>
              </div>
              <span className="text-[9px] text-gray-500 font-bold tracking-widest mt-1">UNIFIED PAYMENTS INTERFACE</span>
            </div>
          </div>
          
          {/* G Pay */}
          <div className="bg-white rounded-2xl py-3 px-6 flex items-center justify-center w-40 h-24 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-1.5">
              <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-2xl font-medium text-gray-700 font-sans tracking-tight">Pay</span>
            </div>
          </div>
          
          {/* Paytm */}
          <div className="bg-white rounded-2xl py-3 px-6 flex items-center justify-center w-40 h-24 shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-4xl font-black tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
              <span className="text-[#002E6E]">Pay</span><span className="text-[#00BAF2]">tm</span>
            </div>
          </div>
          
          {/* PhonePe */}
          <div className="bg-white rounded-2xl py-3 px-6 flex items-center justify-center w-40 h-24 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-bold text-xl leading-none pt-1">
                पे
              </div>
              <span className="text-[#5f259f] font-bold text-xl tracking-tight">PhonePe</span>
            </div>
          </div>
          
          {/* Bank Transfer */}
          <div className="bg-white rounded-2xl py-3 px-6 flex items-center justify-center w-40 h-24 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-center gap-1 text-[#00a859]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="21" width="18" height="2"/>
                <rect x="5" y="10" width="2" height="9"/>
                <rect x="11" y="10" width="2" height="9"/>
                <rect x="17" y="10" width="2" height="9"/>
                <path d="M2 8L12 3L22 8"/>
                <rect x="2" y="8" width="20" height="2"/>
              </svg>
              <span className="text-[13px] font-extrabold leading-tight text-center">Bank<br/>Transfer</span>
            </div>
          </div>
        </div>
        
        <p className="text-yellow-400 font-bold text-lg md:text-xl tracking-wide">
          Instant Deposit, Fast Withdrawal, Safe Transactions, 24x7 Assistance
        </p>
      </div>
    </section>
  );
}
