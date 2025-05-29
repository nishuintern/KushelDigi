import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// ✅ Validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Business email is required"),
  service: Yup.string().required("Please select a service"),
  message: Yup.string().required("Message is required"),
});

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-[#0057FF] text-white p-6 rounded-2xl max-w-6xl mx-auto mt-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Next-Level Custom Digital Solutions?
          </h2>
          <p className="text-white/80 mb-8">
            Please fill in the form and let’s chat to understand how we can help
            you better.
          </p>

          <div className="mb-6 bg-[#738FFF] rounded-xl p-4">
            <p className="text-sm text-white">Call Us</p>
            <p className="text-xl font-semibold text-white">+91 9015457012</p>
            <p className="text-sm text-white">INDIA</p>
          </div>
          <div className="bg-[#738FFF] rounded-xl p-4">
            <p className="text-sm text-white">Call Us</p>
            <p className="text-xl font-semibold text-white">+1-585-566-2070</p>
            <p className="text-sm text-white">UNITED STATES</p>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h1 className="text-white text-2xl text-center font-semibold">
            Get Answers to your Questions
          </h1>
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                {...register("firstName")}
                type="text"
                placeholder="First name*"
                className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
              />
              <p className="text-red-300 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="w-1/2">
              <input
                {...register("lastName")}
                type="text"
                placeholder="Last name*"
                className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
              />
              <p className="text-red-300 text-sm">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/5">
              <select
                {...register("phone")}
                className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
              >
                <option value="IN">🇮🇳</option>

                <option value="US">🇺🇸</option>
              </select>

              <p className="text-red-300 text-sm">{errors.phone?.message}</p>
            </div>
            <div className="w-4/5">
              <input
                {...register("phone")}
                type="text"
                placeholder="+91"
                className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
              />
              <p className="text-red-300 text-sm">{errors.phone?.message}</p>
            </div>
          </div>

          <input
            {...register("email")}
            type="email"
            placeholder="Business email*"
            className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
          />
          <p className="text-red-300 text-sm">{errors.email?.message}</p>

          <select
            {...register("service")}
            className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
          >
            <option value="">Select Service*</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="marketing">Digital Marketing</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-300 text-sm">{errors.service?.message}</p>

          <textarea
            {...register("message")}
            rows="4"
            placeholder="Message*"
            className="w-full px-4 py-2 rounded-md text-white bg-[#738FFF]"
          />
          <p className="text-red-300 text-sm">{errors.message?.message}</p>

          <button
            type="submit"
            className="bg-white text-[#0057FF] font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition w-full"
          >
            let’s connect →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
