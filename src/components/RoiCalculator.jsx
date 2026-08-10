import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, PieChart, Info, ShieldCheck, Sparkles } from 'lucide-react';

export default function RoiCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(2500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(5.8);
  const [loanTerm, setLoanTerm] = useState(30);
  const [expectedRent, setExpectedRent] = useState(15000);
  const [appreciationRate, setAppreciationRate] = useState(6.5);

  // Calculations
  const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
  const loanAmount = purchasePrice - downPaymentAmount;
  
  const monthlyInterestRate = (interestRate / 100) / 12;
  const totalPayments = loanTerm * 12;
  
  const monthlyMortgage = Math.round(
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
  );

  const annualRentalIncome = expectedRent * 12;
  const annualMortgagePayment = monthlyMortgage * 12;
  const netAnnualCashFlow = annualRentalIncome - annualMortgagePayment;
  const grossYield = ((annualRentalIncome / purchasePrice) * 100).toFixed(2);
  
  // 5 Year Projected Value
  const projected5YrValue = Math.round(purchasePrice * Math.pow(1 + appreciationRate / 100, 5));
  const estimated5YrGain = projected5YrValue - purchasePrice;

  return (
    <section id="calculator" className="py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161d2a] border border-[#d4af37]/30">
            <Calculator className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Interactive Investment Modeler</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Mortgage & <span className="gold-gradient-text">Rental ROI Calculator</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            Model your equity schedule, monthly cash flow, and 5-year capital appreciation returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Sliders */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
            <h3 className="text-xl font-serif font-bold text-white border-b border-gray-800 pb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#d4af37]" />
              Investment Parameters
            </h3>

            {/* Slider 1: Purchase Price */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Purchase Price:</span>
                <span className="font-bold text-[#d4af37] font-display">${purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000000"
                max="10000000"
                step="100000"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-gray-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>$1.0M</span>
                <span>$5.0M</span>
                <span>$10.0M</span>
              </div>
            </div>

            {/* Slider 2: Down Payment */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Down Payment ({downPaymentPercent}%):</span>
                <span className="font-bold text-white font-display">${downPaymentAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-gray-800 rounded-lg cursor-pointer h-2"
              />
            </div>

            {/* Slider 3: Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Interest Rate:</span>
                <span className="font-bold text-white font-display">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="3.5"
                max="9.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-gray-800 rounded-lg cursor-pointer h-2"
              />
            </div>

            {/* Slider 4: Expected Monthly Rent */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Est. Monthly Rental Income:</span>
                <span className="font-bold text-emerald-400 font-display">${expectedRent.toLocaleString()}/mo</span>
              </div>
              <input
                type="range"
                min="4000"
                max="40000"
                step="500"
                value={expectedRent}
                onChange={(e) => setExpectedRent(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-gray-800 rounded-lg cursor-pointer h-2"
              />
            </div>

            {/* Slider 5: Annual Appreciation Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Est. Annual Capital Appreciation:</span>
                <span className="font-bold text-sky-400 font-display">{appreciationRate}% p.a.</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="15.0"
                step="0.5"
                value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className="w-full accent-sky-400 bg-gray-800 rounded-lg cursor-pointer h-2"
              />
            </div>

          </div>

          {/* Output Results Panel */}
          <div className="lg:col-span-6 glass-panel-gold rounded-3xl p-6 sm:p-8 space-y-6 border border-[#d4af37]/30">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Financial Projections Output
            </h3>

            {/* Big Stat Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 rounded-2xl border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Est. Monthly Mortgage</p>
                <p className="text-2xl sm:text-3xl font-bold text-[#d4af37] font-display mt-1">
                  ${monthlyMortgage.toLocaleString()}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">{loanTerm} Year Fixed @ {interestRate}%</p>
              </div>

              <div className="bg-black/50 p-4 rounded-2xl border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Gross Rental Yield</p>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-display mt-1">
                  {grossYield}%
                </p>
                <p className="text-[11px] text-gray-400 mt-1">${annualRentalIncome.toLocaleString()} / year</p>
              </div>
            </div>

            {/* 5 Year Value Growth Box */}
            <div className="bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold">
                <span>5-Year Projected Asset Value</span>
                <span>+{((estimated5YrGain / purchasePrice) * 100).toFixed(1)}% Growth</span>
              </div>
              <p className="text-3xl font-bold text-white font-serif">
                ${projected5YrValue.toLocaleString()}
              </p>
              <p className="text-xs text-gray-300">
                Projected Capital Gain: <strong className="text-emerald-400">+${estimated5YrGain.toLocaleString()}</strong> over 5 years.
              </p>
            </div>

            {/* Cashflow Summary */}
            <div className="bg-black/40 p-4 rounded-xl space-y-2 border border-white/5 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Monthly Net Cash Flow (Rent - Mortgage):</span>
                <span className={`font-bold ${netAnnualCashFlow >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  ${Math.round(netAnnualCashFlow / 12).toLocaleString()} / mo
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Required Down Equity:</span>
                <span className="text-white font-bold">${downPaymentAmount.toLocaleString()}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
