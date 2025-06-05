import React, {useId} from 'react'

function Inputbox ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions= [],
  selectCurrency ="usd",
  amountDisable = false,
  currencyDisable = false,
  className ="",
 
}) {
  const amountId = useId()


  return (
        <div className={`bg-white p-3 rounded-lg border-black text-sm flex ${className}`}>
            <div className="w-1/2 border-black">
                <label htmlFor={amountId}  className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-black text-black w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-black cursor-pointer outline-black"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}


export default Inputbox;