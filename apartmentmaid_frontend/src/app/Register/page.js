'use client';


export default function Register() {
    return (
        <>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full sm:w-96 md:w-full lg:w-2/3">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />

            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password" />
            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="address"
                placeholder="Address" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="apartment_number"
                placeholder="Apartment Number" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="town_city"
                placeholder="Town/City" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="state_country"
                placeholder="State/Country" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="postcode_zip"
                placeholder="Postcode/Zip" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="contact_number"
                placeholder="Contact Number" />

            <button
                type="submit"
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >Create Account</button>

            <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
            </div>
        </div>

        <div class="text-black-dark mt-6">
            Already have an account? 
        </div>
         </div>
    </div>

        </>
    )
}