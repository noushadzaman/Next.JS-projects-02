
const PaymentForm = () => {
    return (
        <form>
            <div class="my-4 space-y-2">
                <label htmlFor="name" class="block">Name</label>
                <input type="text" id="name" class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div class="my-4 space-y-2">
                <label htmlFor="email" class="block">Email</label>
                <input type="email" id="email"
                    class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div class="my-4 space-y-2">
                <label htmlFor="card" class="block">Card Number</label>
                <input type="text" id="card" class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div class="my-4 space-y-2">
                <label htmlFor="expiry" class="block">Expiry Date</label>
                <input type="text" id="expiry"
                    class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <div class="my-4 space-y-2">
                <label htmlFor="cvv" class="block">CVV</label>
                <input type="text" id="cvv" class="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
            </div>

            <button type="submit" class="w-full my-8 bg-indigo-600 hover:bg-indigo-800 py-2 rounded-md">Pay Now</button>
        </form>
    );
};

export default PaymentForm;